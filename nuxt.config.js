export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myWebpage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ' This is Markus Leemet personal homepage. Currently it contains only interactive resume but it will be developed further in the future.' },
      { hid: 'og:title', property: 'og:title', content: 'Markus Leemet webpage' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['vue-scrollto/nuxt',
      {
        duration: 1000
      }
    ],
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['et', 'en'],
    defaultLocale: 'et',
    vueI18n: {
      fallbackLocale: 'et',
      messages: {
        en: require('./locales/en.json'),
        et: require('./locales/et.json')
      }
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  googleAnalytics: {
    id: 'G-H46KEC8D9N'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  fontawesome: {
    icons: {
      solid: true
    }
  }
}
