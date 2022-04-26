// 切换主题
export default function () {
    // 从cookie中获取theme参数
    let theme = useCookie('THEME');
    // 主题
    let themeMap = {
        black: '暗黑',
        light: '海天'
    }
    // 变更主题的函数
    const changeTheme = (t) => {
        useHead({htmlAttrs: {'data-theme': t}})
        theme.value = t;
    }
    // 先调用一次
    changeTheme(theme.value || 'black');
    // 将响应式数据返回
    return {theme, themeMap, changeTheme};
}
