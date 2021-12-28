import Cookies from 'js-cookie'

export default {
  SET_IS_MOBILE(state, flag) {
    state.mobile = flag;
  },
  SET_NEW_CATEGORY_LIST(state, list) {
    state.newCategoryList = list;
  },
  SET_SHOW_GENRE_LIST(state, showGenreList) {
    state.showGenreList = showGenreList;
  },
  SET_FRIEND_LINK(state, friendLinkList) {
    state.friendLinkList = friendLinkList;
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
      document.querySelector('html').setAttribute('data-theme', theme);
    }
    state.theme = theme;
    Cookies.set('theme', theme);
  }
}
