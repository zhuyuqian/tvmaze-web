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
const isMobile = (ua) => {
  return !!ua.match(/AppleWebKit.*Mobile.*/)
}
export default {
  async nuxtServerInit({commit}, {app, req}) {
    let [
      {data: {data: genre}},
      {data: {data: newCategory}},
      {data: {data: friendLinkList}},
    ] = await Promise.all([
      app.$axios.get('/show/genre'),
      app.$axios.get('/new/category'),
      app.$axios.get('/friendlyLink/list')
    ])

    let locale = getCookie(req.headers.cookie, 'locale') || 'zh';
    let showShape = getCookie(req.headers.cookie, 'showShape') || 'list';
    let theme = getCookie(req.headers.cookie, 'theme') || 'black';

    commit('SET_IS_MOBILE', isMobile(req.headers['user-agent']));
    commit('SET_SHOW_GENRE_LIST', genre);
    commit('SET_NEW_CATEGORY_LIST', newCategory);
    commit('SET_FRIEND_LINK', friendLinkList);
    locale && commit('SET_LOCALE', locale);
    showShape && commit('SET_SHOW_SHAPE', showShape);
    theme && commit('SET_THEME', theme);

    app.head.htmlAttrs['data-theme'] = theme
  }
}
