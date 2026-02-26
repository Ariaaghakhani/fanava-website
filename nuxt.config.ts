// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import type Plugin from 'vite'
export default defineNuxtConfig({
  // Node Version : 24.13
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/style/main.css'],
  vite: {
    plugins: [tailwindcss() as Plugin],
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fa',
    locales: [
      {
        code: 'fa',
        name: 'fa-ir',
        dir: 'rtl',
        file: 'fa.json',
        language: 'fa',
      },
      {
        code: 'en',
        name: 'en-us',
        dir: 'ltr',
        file: 'en.json',
        language: 'en',
      },
    ],
  },
})
