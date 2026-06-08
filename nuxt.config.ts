import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: false },
  devServer: { port: 3101 },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon', '@nuxtjs/seo', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'uk',
    detectBrowserLanguage: false,
    locales: [
      { code: 'uk', language: 'uk-UA', name: 'UA', file: 'uk.json' },
      { code: 'en', language: 'en-US', name: 'EN', file: 'en.json' },
    ],
  },
  site: {
    url: 'https://frontangel.dev',
    name: 'FrontAngel',
    description:
      'Нестандартні веб-продукти, зібрані за дні. MVP, AI-інтеграції та автоматизація бізнес-процесів. Команда інженерів, а не продавців.',
    defaultLocale: 'uk',
  },
  // Dynamic OG generation disabled (Satori can't pull cyrillic via @nuxt/fonts in v6).
  // Using pre-rendered static images in /public (regenerate with `node gen-og.mjs`).
  ogImage: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    defaults: { subsets: ['latin', 'cyrillic'] },
    families: [
      { name: 'Oswald', provider: 'google', weights: [500, 600, 700], subsets: ['latin', 'cyrillic'] },
      { name: 'Geist', provider: 'google', weights: [400, 500, 600], subsets: ['latin', 'cyrillic'] },
      { name: 'Geist Mono', provider: 'google', weights: [400, 600], subsets: ['latin', 'cyrillic'] },
    ],
  },
  icon: { mode: 'svg' },
  app: {
    head: {
      htmlAttrs: { lang: 'uk' },
      title: 'FrontAngel — Інженерна студія',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Нестандартні веб-продукти, зібрані за дні. MVP, AI-інтеграції та автоматизація бізнес-процесів. Команда інженерів, а не продавців.',
        },
        { name: 'theme-color', content: '#0B0B0D' },
        { property: 'og:image', content: 'https://frontangel.dev/og.png' },
        { name: 'twitter:image', content: 'https://frontangel.dev/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
})
