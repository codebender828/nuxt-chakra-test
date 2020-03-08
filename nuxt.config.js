global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement
// const createEmotionServer = require('create-emotion-server').default

export default {
  // hooks: {
  //   render: {
  //     route (url, result) {
  //       const { renderStylesToString } = createEmotionServer(global.emotionCache)
  //       const withCss = renderStylesToString(result.html)

  //       result.html = withCss
  //     }
  //   },
  //   generate: {
  //     page (page) {
  //       const { renderStylesToString } = createEmotionServer(global.emotionCache)
  //       const withCss = renderStylesToString(page.html)

  //       page.html = withCss
  //     }
  //   }
  // },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: 'plugins/kiwi',
    ssr: true
  }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/emotion'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
