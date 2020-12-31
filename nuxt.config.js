export default {
  ssr: false,
  loadingIndicator: {
    name: 'folding-cube',
    color: '#7f77bc',
    background: '#121212'
  },
  loading: {
    color: '#7f77bc'
  },
  target: 'static',
  head: {
    titleTemplate: '%s - Argyle',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Just some useful tools' },
      { name: 'theme-color', content: '#7f77bc' },
      // OpenGraph
      { name: 'og:site_name', content: 'GeopJr#4066' },
      { name: 'og:description', content: 'Just some useful tools' },
      { name: 'og:title', content: 'Argyle' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://geopjr.xyz/' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image', content: 'https://i.imgur.com/H7GmGzQ.png' },
      // Apple
      { name: 'apple-mobile-web-app-title', content: 'Argyle' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'canonical', href: 'https://argyle.geopjr.xyz' },
      // Favicons
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png?v=2' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png?v=2' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico?v=2' },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico', color: '#ffff00' },
      // Apple
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      // MEMEME
      { rel: 'me', href: 'https://tech.lgbt/@GeopJr' },
      { rel: 'me', href: 'https://github.com/GeopJr' }
    ]
  },
  components: true,
  // Reduces vuetify size apparently
  build: {
    extractCSS: true
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/vuetify', { customVariables: ['~/assets/variables.scss'], treeShake: true }]
  ],
  generate: { fallback: '404.html' },
  vuetify: {
    breakpoint: {
      thresholds: {
        xl: 12000
      }
    },
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#a56262',
          accent: '#a56262'
        },
        dark: {
          primary: '#7f77bc',
          accent: '#7f77bc'
        }
      }
    }
  },
  css: ['@/assets/transitions.css']
}
