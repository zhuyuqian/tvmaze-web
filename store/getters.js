export default {
  // 用户信息
  USER: state => state.user,
  // 是否是手机
  IS_MOBILE: state => state.mobile,
  // 语言
  LOCALE: state => state.locale,
  // 主题
  THEME: state => state.theme,
  // 节目列表显示效果
  SHOW_SHAPE: state => state.showShape,
  // 节目类型列表
  SHOW_TYPE_LIST: state => state.showTypeList,
  // 节目题材列表
  SHOW_GENRE_LIST: state => state.showGenreList,
  // 节目语言列表
  SHOW_LANGUAGE_LIST: state => state.showLanguageList,
  // 资讯分类列表
  NEW_CATEGORY_LIST: state => state.newCategoryList,
  // 友情链接列表
  LINK_LIST: state => state.linkList
}
