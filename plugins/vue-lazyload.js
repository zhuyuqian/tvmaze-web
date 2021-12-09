import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.33,
  error: require('@/assets/image/image-loading-error.svg'),
  loading: require('@/assets/image/image-loading-load.gif'),
  attempt: 2,
  throttleWait: 500
})
