<template>
  <div class="footer-menu-warp">
    <div class="content footer-menu-box">

      <p class="name">友情链接</p>
      <div class="link-box">
        <a href="https://www.tvmaze.com/api" target="_blank">TvMaze.com</a>
      </div>
      <p class="slogan">
        <nuxt-link to="/about">TvMaze.cn 追剧日记 为追剧而生</nuxt-link>
      </p>
      <p class="beian-warp">
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2021038749号-1</a>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016134">
          <img src="~@/assets/image/beian.png"/>
          <span>浙公网安备 33011002016134号</span>
        </a>
      </p>
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
          h('span', {}, '提供的开放API！😄'),
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
    padding: 20px 0;
    text-align: center;
    @include fontColor('color-text');

    .slogan {
      font-size: 14px;
    }

    .name {
      text-align: left;
      font-size: 12px;
    }

    .link-box {
      margin: 6px 0;
      text-align: left;

      a {
        font-size: 13px;
      }
    }

    .beian-warp {
      margin-top: 10px;
      font-size: 12px;

      a {
        margin: 0 4px;
      }
    }
  }
}
</style>
