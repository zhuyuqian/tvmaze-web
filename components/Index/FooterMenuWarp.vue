<template>
  <div class="footer-menu-warp">
    <div class="content footer-menu-box">
      <logo-box/>
      <nav class="menu-warp">
        <nuxt-link class="menu-box" to="/">{{ $t('Main') }}</nuxt-link>
        <nuxt-link class="menu-box" to="/about">{{ $t('About') }}</nuxt-link>
        <a href="javascript:void 0" class="menu-box" @click="thank">{{ $t('Thank') }}</a>
      </nav>
      <div></div>
    </div>
  </div>
</template>

<script>
import LogoBox from "@/components/Index/LogoBox";

export default {
  components: {LogoBox},
  methods: {
    thank() {
      const h = this.$createElement;
      this.$msgbox({
        title: this.$t('Thank'),
        message: h('div', null, [
          h('span', {}, '特别感谢'),
          h('a', {
            attrs: {href: 'https://www.tvmaze.com/api', target: '_black'},
            style: {'fontWeight': "bold", 'fontSize': '20px', 'margin': '0 10px'}
          }, 'tvmaze.com'),
          h('span', {}, '提供的开放API数据接口！😄'),
        ]),
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.footer-menu-warp {
  border-top-width: 1px;
  border-top-style: solid;
  @include backgroundColor("color-card-background");
  @include borderColor("border-color");

  .footer-menu-box {
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 76px;

    .menu-warp {
      .menu-box {
        font-size: 16px;
        font-weight: bold;
        margin-right: 15px;

        &.nuxt-link-exact-active {
          @include fontColor("color-primary")
        }
      }
    }
  }
}
</style>
