import { spawn } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import fs from 'node:fs'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PORT = 9344
const URL = process.argv[2] || 'http://localhost:3000/'
const OUT = process.argv[3] || 'shot.png'
const W = Number(process.argv[4] || 1440)
const H = Number(process.argv[5] || 1000)

const chrome = spawn(
  CHROME,
  ['--headless=new', `--remote-debugging-port=${PORT}`, '--disable-gpu', '--hide-scrollbars', '--no-first-run', `--window-size=${W},${H}`, 'about:blank'],
  { stdio: 'ignore', detached: true },
)

let ws, _id = 0
const pending = new Map()
const send = (method, params = {}) => {
  const id = ++_id
  ws.send(JSON.stringify({ id, method, params }))
  return new Promise((res, rej) => pending.set(id, { res, rej }))
}

async function target() {
  for (let i = 0; i < 50; i++) {
    try {
      const r = await fetch(`http://localhost:${PORT}/json`)
      const list = await r.json()
      const p = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl)
      if (p) return p.webSocketDebuggerUrl
    } catch {}
    await sleep(200)
  }
  throw new Error('no target')
}

function cleanup() {
  try { ws && ws.close() } catch {}
  try { process.kill(-chrome.pid) } catch {}
  setTimeout(() => process.exit(0), 200)
}

try {
  const wsUrl = await target()
  ws = new WebSocket(wsUrl)
  await new Promise((r) => ws.addEventListener('open', r, { once: true }))
  ws.addEventListener('message', (ev) => {
    const m = JSON.parse(ev.data)
    if (m.id && pending.has(m.id)) {
      const p = pending.get(m.id)
      pending.delete(m.id)
      m.error ? p.rej(new Error(m.error.message)) : p.res(m.result)
    }
  })
  await send('Page.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: W < 600 })
  await send('Page.navigate', { url: URL })
  await sleep(3500)
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })
  fs.writeFileSync(OUT, Buffer.from(shot.data, 'base64'))
  console.log('saved', OUT)
  cleanup()
} catch (e) {
  console.error('ERR', e.message)
  cleanup()
}
