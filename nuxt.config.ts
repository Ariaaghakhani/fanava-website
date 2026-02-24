// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  // Node Version : 24.13
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],
  css:['~/assets/style/main.css'],
  vite:{
    plugins:[
      tailwindcss() as any
  ]
  }
})
