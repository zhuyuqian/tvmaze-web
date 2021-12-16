import Vue from 'vue';
import Dayjs from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/zh-cn');

Dayjs.locale('zh-cn');
Dayjs.extend(relativeTime);

Vue.prototype.$dayjs = Dayjs;
Vue.prototype.$valid = {}
Vue.prototype.$dic = {
  themeMap: {
    fugu: "复古",
    haitian: '海天',
    dark: "深邃",
    black: "暗黑",
  },
  localeMap: {
    zh: '中文',
    en: 'English'
  },
  sexMap: {
    Male: "汉纸",
    Female: '妹纸'
  }
}
