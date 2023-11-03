// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildDir: 'nuxt-build',
  nitro: {
    output: {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
    },
    devProxy: {
      '/api/': {
        target: 'http://localhost:4000/api/',
        changeOrigin: true,
        prependPath: true,
        followRedirects: true
      }
    },
    // routeRules: {
    //   '/api/**': {
    //     proxy: 'http://localhost:4000/api/**'
    //   }
    // }
  },
  css: ['assets/css/common.scss'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-icon'
  ],
  tailwindcss: {
    //   cssPath: 'assets/css/_tailwind.scss',
    configPath: '~/tailwind.config.ts'
  },
  plugins: [
    { src: '~/plugins/scrollbars.client.ts'},
    { src: '~/plugins/presets.ts'}
  ],
  colorMode: {
    preference: 'dark'
  },
  ui: {
    icons: ['simple-icons', 'ph', 'uil', 'heroicons', 'octicon', 'logos']
  }
})
