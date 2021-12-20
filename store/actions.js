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
    commit('SET_IS_MOBILE', isMobile(req.headers['user-agent']));
    let [
      {data: {data: genre}},
      {data: {data: friendLinkList}},
    ] = await Promise.all([
      app.$axios.get('/show/genre'),
      app.$axios.get('/friendlyLink/list')
    ])
    commit('SET_SHOW_GENRE_LIST', genre);
    commit('SET_FRIEND_LINK', friendLinkList);
    let locale = getCookie(req.headers.cookie, 'locale');
    let showShape = getCookie(req.headers.cookie, 'showShape');
    let theme = getCookie(req.headers.cookie, 'theme');
    locale && commit('SET_LOCALE', locale);
    showShape && commit('SET_SHOW_SHAPE', showShape);
    theme && commit('SET_THEME', theme);
  }
}
