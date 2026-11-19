// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css', 'animate.css'],
  app: {
    head: {
      title: 'Anggin Megantara | Senior Frontend Developer (Jakarta, Tangerang, BSD & Yogyakarta)',
      htmlAttrs: {
        lang: 'id',
        class: 'scroll-smooth',
      },
      bodyAttrs: {
        class: 'bg-[#040A18] font-sans',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio resmi Anggin Megantara (Tara) - Senior Frontend Developer & Jasa Freelance Web berpengalaman 8+ tahun. Spesialis Vue.js, Nuxt.js, React, Next.js, TypeScript, & Tailwind CSS. Siap untuk project freelance, remote, & hybrid/on-site di Jakarta, Tangerang, BSD, dan Yogyakarta.',
        },
        {
          name: 'keywords',
          content: 'Anggin Megantara, Tara, iamtara, Frontend Developer Jakarta, Frontend Developer Tangerang, Frontend Developer BSD, Frontend Developer Yogyakarta, Jasa Freelance Web, Jasa Pembuatan Website Jakarta, Vue Developer Indonesia, Nuxt Developer Jakarta, React Developer BSD, Senior Frontend Engineer Indonesia, Jasa Frontend Developer, Web Developer Yogyakarta',
        },
        { name: 'author', content: 'Anggin Megantara' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'google-site-verification', content: 'S2MuTz0esGVvaA-5DJ5LT_km2IZUbim9ARCS38Z0i0o' },

        // Open Graph / Facebook / WhatsApp / LinkedIn
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://portofolio-anggin-megantara.vercel.app/' },
        { property: 'og:title', content: 'Anggin Megantara | Senior Frontend Developer (Jakarta, Tangerang, BSD & Yogyakarta)' },
        {
          property: 'og:description',
          content: 'Experienced Frontend Developer dengan keahlian Vue.js, Nuxt.js, React, Next.js, dan Tailwind CSS. Tersedia untuk proyek freelance, kontrak, dan full-time di Jakarta, Tangerang, BSD, & Yogyakarta.',
        },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: 'Anggin Megantara Portfolio' },
        { property: 'og:image', content: 'https://portofolio-anggin-megantara.vercel.app/og-image.png' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://portofolio-anggin-megantara.vercel.app/' },
        { name: 'twitter:title', content: 'Anggin Megantara | Senior Frontend Developer & Web Specialist' },
        {
          name: 'twitter:description',
          content: 'Experienced Frontend Developer dengan keahlian Vue, Nuxt, React, dan Tailwind CSS. Siap untuk proyek di Jakarta, Tangerang, BSD, & Yogyakarta.',
        },
        { name: 'twitter:image', content: 'https://portofolio-anggin-megantara.vercel.app/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://portofolio-anggin-megantara.vercel.app/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Anggin Megantara',
            alternateName: ['Tara', 'iamtara'],
            jobTitle: 'Senior Frontend Developer',
            description: 'Senior Frontend Developer & Freelance Web Specialist with 8+ years of experience crafting modern, high-performing web applications in Vue.js, Nuxt.js, React, Next.js, TypeScript, and Tailwind CSS. Open for freelance, remote, and on-site opportunities in Jakarta, Tangerang, BSD, and Yogyakarta.',
            url: 'https://portofolio-anggin-megantara.vercel.app/',
            email: 'mailto:angginjogjamedia@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Yogyakarta',
              addressRegion: 'Daerah Istimewa Yogyakarta',
              addressCountry: 'ID',
            },
            areaServed: [
              { '@type': 'City', name: 'Jakarta' },
              { '@type': 'City', name: 'Tangerang' },
              { '@type': 'City', name: 'BSD City' },
              { '@type': 'City', name: 'Yogyakarta' },
              { '@type': 'Country', name: 'Indonesia' },
            ],
            sameAs: [
              'https://www.linkedin.com/in/anggin-megantara',
              'https://github.com/iamtara24',
              'https://www.youtube.com/@iamtara',
            ],
            knowsAbout: [
              'Frontend Development',
              'Vue.js',
              'Nuxt.js',
              'React.js',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'JavaScript',
              'HTML5 & CSS3',
              'Web Performance Optimization',
              'Responsive Web Design',
              'Single Page Applications',
            ],
          }),
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons', 'nuxt-lottie', 'nuxt-swiper'],
  devtools: { enabled: false },
  postcss: {
    plugins: {
      "tailwindcss/nesting": false,
    },
  },
})
