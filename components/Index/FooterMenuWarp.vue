<template>
  <div class="footer-menu-warp">
    <div class="content footer-menu-box">
      <div class="link-warp">
        <div class="link-flex">
          <p class="name">友情链接</p>
          <div class="link-box">
            <a href="https://www.tvmaze.com/api" target="_blank">TVmaze.com</a>
            <a href="https://www.nuxtjs.cn/" target="_blank">NuxtJs</a>
            <a href="https://thinkjs.org/" target="_blank">ThinkJs</a>
          </div>
        </div>
        <div class="link-flex">
          <p class="name">站内</p>
          <div class="link-box">
            <nuxt-link to="/about">关于</nuxt-link>
            <nuxt-link to="/contact">联系</nuxt-link>
            <nuxt-link to="/people">卡司</nuxt-link>
          </div>
        </div>
      </div>
      <p class="slogan">
        <nuxt-link to="/">Tvmaze.cn © 2021</nuxt-link>
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


    .link-warp {
      display: flex;

      .link-flex {
        flex: 1;

        .name {
          text-align: left;
          font-size: 12px;
          @include fontColor('color-placeholder')
        }

        .link-box {
          margin: 6px 0;
          text-align: left;

          a {
            margin-right: 20px;
            font-size: 13px;
          }
        }
      }
    }

    .slogan {
      text-align: right;
      margin-top: 10px;
      font-size: 14px;
    }

    .beian-warp {
      text-align: right;
      font-size: 12px;

      a {
        margin: 0 4px;
        font-size: 12px !important;
      }
    }
  }
}
</style>
