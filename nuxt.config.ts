export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
