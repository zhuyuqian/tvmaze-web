export default {
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
  // 根据语言返回拼接好的字符串
  TEXT_BY_LANG: state => {
    return (text, textZh) => {
      if (state.locale === 'zh') return textZh || text;
      return text
    }
  },
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
  // 友情链接列表
  FRIEND_LINK_LIST: state => state.friendLinkList
}
