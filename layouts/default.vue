<template>
  <div class="tvmaze-page">
    <header-control-warp/>
    <header-menu-warp/>
    <div class="content">
      <nuxt/>
    </div>
    <footer-menu-warp/>
  </div>
</template>
<script>
import layoutMixin from '@/mixins/layout';
import HeaderControlWarp from "@/components/Index/HeaderControlWarp";
import HeaderMenuWarp from "@/components/Index/HeaderMenuWarp";
import FooterMenuWarp from "@/components/Index/FooterMenuWarp";

export default {
  mixins: [layoutMixin],
  components: {HeaderControlWarp, HeaderMenuWarp, FooterMenuWarp},
  async mounted() {
    if (!localStorage.getItem('look-about')) {
      let method = await this.$msgbox({title: '哈喽~', message: '欢迎访问这个小站，先了解我一下吧~'}).catch(err => err);
      if (method === 'confirm') return this.$router.push({path: '/about'});
    }
  }
}
</script>
<style lang="scss" scoped>

.tvmaze-page {
  .content {
    padding-top: 25px;
  }
}
</style>
