export default {
  head: {
    title: 'TVmaze - 你的个人追剧指南',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      {
        hid: 'description', name: 'description',
        content: '电视节目和网络连续剧数据库。创建个性化的时间表。剧集指南，演员，工作人员和角色信息。回顾，评论，预告片，名人照片。'
      },
    ],
    script: [
      {type: 'text/javascript', src: '//cdn.bootcdn.net/ajax/libs/Swiper/6.8.0/swiper-bundle.min.js'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "stylesheet", href: '//at.alicdn.com/t/font_2965179_bov1rdm0tm6.css'},
      {rel: 'stylesheet', href: "//cdn.bootcdn.net/ajax/libs/Swiper/6.8.0/swiper-bundle.css"}
    ]
  },
  loading: {color: '#409EFF', height: '1px'},
  router: {
    scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
    }
  },
  css: [
    '@/assets/scss/common.scss'
  ],
  plugins: [
    '@/plugins/tool',
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    {src: '@/plugins/vue-lazyload', ssr: false},
  ],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    prefix: '/api',
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8360/web/',
      pathRewrite: {'^/api': ''},
    },
  },
  build: {
    // cache: true,
    // parallel: true,
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    vendor: ['axios', 'vue-i18n'],
    extractCSS: {allChunks: true},// 从文档中抽离css
  },
  render: {
    resourceHints: false
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}
