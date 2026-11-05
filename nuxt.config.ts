// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      title: 'Portofolio | Anggin Megantara',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'bg-[#040A18]',
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons'],
  devtools: { enabled: false },
  postcss: {
    plugins: {
      "tailwindcss/nesting": false,
    },
  },
})
