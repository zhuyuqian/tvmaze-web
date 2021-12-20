<template>
  <div>
    <div class="pc-model">
      <header-control-warp/>
      <header-menu-warp/>
      <div class="container tvmaze-page">
        <nuxt/>
      </div>
      <footer-menu-warp/>
    </div>
    <div class="pc-tooltip">
      <h1>哇，窗口太小啦</h1>
      <p>请调整浏览器窗口大小或者请使用手机查看！</p>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import HeaderControlWarp from "@/components/Index/HeaderControlWarp";
import HeaderMenuWarp from "@/components/Index/HeaderMenuWarp";
import FooterMenuWarp from "@/components/Index/FooterMenuWarp";

export default {
  components: {HeaderControlWarp, HeaderMenuWarp, FooterMenuWarp},
  computed: {
    ...mapGetters(['THEME', 'SHOW_SHAPE', 'LOCALE'])
  },
  async mounted() {
    if (!localStorage.getItem('look-about')) {
      let method = await this.$msgbox({title: '哈喽~', message: '欢迎访问这个小站，先了解我一下吧~'}).catch(err => err);
      if (method === 'confirm') return this.$router.push({path: '/about'});
    }
  },
  created() {
    if (process.browser) {
      this.$store.commit('SET_THEME', this.THEME);
      this.$store.commit('SET_SHOW_SHAPE', this.SHOW_SHAPE);
      this.$store.commit('SET_LOCALE', this.LOCALE);
    }
  },
}
</script>
<style lang="scss" scoped>
.tvmaze-page {
  padding-top: 25px
}
</style>
