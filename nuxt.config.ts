export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Мельник Денис - Vue Frontend',
      link: [
        {
          key: 'icon',
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.svg'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: import.meta.env.NUXT_PUBLIC_API_BASE
    }
  },

  css: [
    '~/assets/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/base/vars.scss" as *;
            @use "~/assets/base/media.scss" as *;
          `
        }
      }
    }
  }
})
