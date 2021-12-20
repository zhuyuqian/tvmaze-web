<template>
  <div class="tvmaze-page">
    <div v-if="!$store.getters.IS_MOBILE">
      <div>
        <h1>哇，窗口太小啦</h1>
        <p>请调整浏览器窗口大小或者请使用手机查看！</p>
      </div>
    </div>
    <div :class="{'pc-model':!$store.getters.IS_MOBILE}">
      <header-control-warp/>
      <header-menu-warp/>
      <div class="container">
        <nuxt/>
      </div>
      <footer-menu-warp/>
    </div>
  </div>
</template>
<script>
import HeaderControlWarp from "@/components/_Layout/HeaderControlWarp";
import HeaderMenuWarp from "@/components/_Layout/HeaderMenuWarp";
import FooterMenuWarp from "@/components/_Layout/FooterMenuWarp";

export default {
  components: {HeaderControlWarp, HeaderMenuWarp, FooterMenuWarp},
  async mounted() {
    // if (!localStorage.getItem('look-about')) {
    //   let method = await this.$msgbox({title: '哈喽~', message: '欢迎访问这个小站，先了解我一下吧~'}).catch(err => err);
    //   if (method === 'confirm') return this.$router.push({path: '/about'});
    // }
  },
  created() {
    if (process.browser) {
      this.$store.commit('SET_THEME', this.$store.getters.THEME);
      this.$store.commit('SET_SHOW_SHAPE', this.$store.getters.SHOW_SHAPE);
      this.$store.commit('SET_LOCALE', this.$store.getters.LOCALE);
    }
  },
}
</script>
<style lang="scss" scoped>
.tvmaze-page {
  .container {
    padding-top: 25px;
  }
}
</style>
