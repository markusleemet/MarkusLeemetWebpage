export default {
  ssr: false,
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
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

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt',
      {
        duration: 1000
      }
    ],
    '@nuxtjs/i18n'
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

  axios: {},

  googleAnalytics: {
    id: 'G-H46KEC8D9N'
  },

  content: {},

  build: {
  },
  fontawesome: {
    icons: {
      solid: true
    }
  },
}
