export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image'],
  image: {
    format: ['webp', 'avif']
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Tejados M.R.A. | Reparación de Tejados y Goteras en Sierra de Madrid',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1' },
        { name: 'theme-color', content: '#FD8801' },
        {
          name: 'description',
          content:
            'Tejados M.R.A. - Reparación de tejados, goteras, humedades y canalones en la Sierra de Madrid. Presupuesto gratis. Atendemos urgencias.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap',
          media: 'print',
          onload: "this.media='all'"
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
          media: 'print',
          onload: "this.media='all'"
        }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
})