// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Portofolio | Anggin Megantara',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'bg-[#040A18] font-sans',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap' },
      ],
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
