import Vue from 'vue';
import Dayjs from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/zh-cn');

Dayjs.locale('zh-cn');
Dayjs.extend(relativeTime);

Vue.prototype.$dayjs = Dayjs;
Vue.prototype.$valid = {}
Vue.prototype.$dic = {
  logoText: '追剧指南 - TvMaze.cn',
  themeMap: {
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

Vue.prototype.$tool = {
  // 打开外链
  openLink: (link, target = '_black') => {
    let a = document.createElement("a");
    a.style.display = 'none'
    if (target == '_black') target += ('_' + new Date().getTime());
    a.target = target;
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
