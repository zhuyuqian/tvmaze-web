import Vue from 'vue';
import Dayjs from 'dayjs';
import isEmail from 'is-email';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/zh-cn');

Dayjs.locale('zh-cn');
Dayjs.extend(relativeTime);

Vue.prototype.$dayjs = Dayjs;
Vue.prototype.$valid = {
  isEmail,
}
Vue.prototype.$dic = {
  logoText: 'TvMaze',
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
    1: "汉纸",
    2: '妹纸'
  }
}
