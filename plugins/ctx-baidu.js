if (process.client && process.env.NODE_ENV === 'production') {
  (function () {
    const hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?41f38681f8d99762660112602b65d4de';
    hm.id = 'baidu_tj';
    const hmc = document.getElementsByTagName('script')[0];
    hmc.parentNode.insertBefore(hm, hmc);
  })();
}

export default ({app: {router, $axios}}) => {
  router.afterEach((to, form) => {
    if (process.client && process.env.NODE_ENV === 'production') {
      $axios.get('/common/site', {params: {path: location.href}});
      _hmt.push(['_trackPageview', to.fullPath]);
    }
  });
}
