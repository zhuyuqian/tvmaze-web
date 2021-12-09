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
  components: {HeaderControlWarp, HeaderMenuWarp, FooterMenuWarp}
}
</script>
<style lang="scss" scoped>

.tvmaze-page {
  .content {
    padding-top: 25px;
  }
}
</style>
