export default {
  head: {
    title: 'TvMaze.cn - 追剧日记 - 你的个人追剧指南',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      {name: 'keywords', content: "追剧,预告,电视剧,美剧,日剧,韩剧,卡司,角色,追剧日记,追剧指南"},
      {
        name: 'description',
        content: '电视剧和网剧、个性化的时间表、剧集指南，演员，工作人员和角色信息、回顾，预告，名人照片。'
      },
    ],
    script: [
      {type: 'text/javascript', src: '/lib/swiper.min.js'},
      {type: 'text/javascript', src: '/lib/echarts.min.js'},
      {type: 'text/javascript', src: '/lib/echarts.theme.chalk.js'},
      {src: '//res.wx.qq.com/open/js/jweixin-1.4.0.js'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "stylesheet", href: '//at.alicdn.com/t/c/font_2965179_ij4pg4q5n7c.css'},
      {rel: 'stylesheet', href: "/lib/swiper.min.css"}
    ],
    htmlAttrs: {}
  },
  globalName: "tvmaze",
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
    '@/plugins/ctx-baidu.js',
    '@/plugins/ctx-theme.js',
    {src: '@/plugins/vue-lazyload', ssr: false},
    {src: '@/plugins/wx-share.js', ssr: false},
    {src: '@/plugins/screen-display.js', ssr: false},
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
    extend(config, {isClient}) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.js'
    },
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
