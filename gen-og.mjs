import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'

const oswald = fs.readFileSync('public/fonts/Oswald-600.ttf')
const geist = fs.readFileSync('public/fonts/Geist-400.ttf')

const fonts = [
  { name: 'Oswald', data: oswald, weight: 600, style: 'normal' },
  { name: 'Geist', data: geist, weight: 400, style: 'normal' },
]

const el = (type, style, children) => ({ type, props: { style, children } })

function tree(title, subtitle) {
  return el(
    'div',
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      backgroundColor: '#0b0b0d',
      padding: '80px',
      fontFamily: 'Geist',
    },
    [
      el('div', { display: 'flex', alignItems: 'center' }, [
        el('div', {
          display: 'flex',
          width: '60px',
          height: '60px',
          borderRadius: '999px',
          backgroundColor: '#ffd21e',
          marginRight: '20px',
        }, []),
        el('div', { display: 'flex', fontFamily: 'Oswald', fontSize: '34px', color: '#fafaf7' }, 'FrontAngel'),
      ]),
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el('div', { display: 'flex', fontFamily: 'Oswald', fontSize: '72px', color: '#fafaf7', lineHeight: 1.05 }, title),
        el('div', { display: 'flex', marginTop: '26px', fontSize: '30px', color: '#a1a1aa' }, subtitle),
      ]),
      el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, [
        el('div', { display: 'flex', fontFamily: 'Geist', fontSize: '24px', color: '#ffd21e' }, 'frontangel.dev'),
        el('div', { display: 'flex', fontSize: '22px', color: '#6b6b73' }, 'Інженерна студія'),
      ]),
    ],
  )
}

async function render(title, subtitle, out) {
  const svg = await satori(tree(title, subtitle), { width: 1200, height: 630, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
  fs.writeFileSync(out, png)
  console.log('wrote', out, png.length, 'bytes')
}

await render('Нестандартні веб-продукти за дні', 'MVP · AI-інтеграції · Автоматизація', 'public/og.png')
await render('Журнал — AI-дайджест', 'Новини · Кейси · Інструменти · Фічі', 'public/og-journal.png')
