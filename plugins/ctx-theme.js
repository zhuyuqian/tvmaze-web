export default ({app: {head, store, router}}) => {
  router.afterEach((to, form) => {
    head.htmlAttrs['data-theme'] = store.getters.THEME;
  });
}
