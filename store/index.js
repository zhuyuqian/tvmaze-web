import Cookies from 'js-cookie'

const state = () => ({
  // 皮肤相关
  theme: 'black',
  // 语言相关
  locale: 'zh',
  // 节目列表展示方式
  showShape: 'card',
  // 节目类型列表
  showTypeList: [],
  // 节目风格列表
  showGenreList: [],
  // 节目语言列表
  showLanguageList: []
})

const mutations = {
  SET_SHOW_TYPE_LIST(state, showTypeList) {
    state.showTypeList = showTypeList;
  },
  SET_SHOW_GENRE_LIST(state, showGenreList) {
    state.showGenreList = showGenreList;
  },
  SET_SHOW_LANGUAGE_LIST(state, showLanguageList) {
    state.showLanguageList = showLanguageList;
  },
  SET_LOCALE(state, locale) {
    state.locale = locale;
    Cookies.set('locale', locale);
  },
  SET_SHOW_SHAPE(state, showShape) {
    state.showShape = showShape;
    Cookies.set('showShape', showShape);
  },
  SET_THEME(state, theme) {
    if (process.browser) {
      document.body.setAttribute('data-theme', theme);
    }
    state.theme = theme;
    Cookies.set('theme', theme);
  }
}

const getters = {
  // 根据语言返回拼接好的名称
  NAME_BY_LANG: state => {
    return (text, textZh) => {
      if (state.locale === 'zh') {
        return textZh ?
          textZh + ' ' + text :
          text
      }
      return text
    }
  },
  TEXT_BY_LANG: state => {
    return (text, textZh) => {
      if (state.locale === 'zh') return textZh || text;
      return text
    }
  },
  LOCALE: state => state.locale,
  THEME: state => state.theme,
  SHOW_SHAPE: state => state.showShape,
  SHOW_TYPE_LIST: state => state.showTypeList,
  SHOW_GENRE_LIST: state => state.showGenreList,
  SHOW_LANGUAGE_LIST: state => state.showLanguageList,
}

const getCookie = (cookie, tName) => {
  if (cookie) {
    // 将cookie转成json对象（自己实现该方法）
    let cookies = cookie.split(';');
    let theme = null;
    for (let c of cookies) {
      let [name, value] = c.trim().split('=');
      if (name === tName) {
        theme = value;
        break;
      }
    }
    return theme
  } else {
    return null
  }
}

const actions = {
  async nuxtServerInit({commit}, {app, req}) {
    let [
      {data: {data: type}},
      {data: {data: genre}},
      {data: {data: language}},
    ] = await Promise.all([
      app.$axios.get('/show/type'),
      app.$axios.get('/show/genre'),
      app.$axios.get('/show/language'),
    ])
    commit('SET_SHOW_TYPE_LIST', type);
    commit('SET_SHOW_GENRE_LIST', genre);
    commit('SET_SHOW_LANGUAGE_LIST', language);
    let locale = getCookie(req.headers.cookie, 'locale');
    let showShape = getCookie(req.headers.cookie, 'showShape');
    let theme = getCookie(req.headers.cookie, 'theme');
    locale && commit('SET_LOCALE', locale);
    showShape && commit('SET_SHOW_SHAPE', showShape);
    theme && commit('SET_THEME', theme);
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
