<template>
  <div class="footer-menu-warp" :class="{mobile:$store.getters.IS_MOBILE}">
    <div class="container footer-menu-box">
      <div class="link-warp">
        <div class="link-flex">
          <p class="name">站内</p>
          <div class="link-box">
            <nuxt-link to="/people">卡司</nuxt-link>
            <nuxt-link to="/network">频道</nuxt-link>
            <nuxt-link to="/webChannel">流媒体</nuxt-link>
          </div>
        </div>
        <div class="link-flex">
          <p class="name">友情链接</p>
          <div class="link-box">
            <a v-for="link of $store.getters.LINK_LIST" :key="link.id" :href="`${link.link}#tvmaze.cn`"
               target="_blank">{{ link.name }}</a>
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
            font-size: 14px;
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

  &.mobile {
    .footer-menu-box {
      .link-warp {
        display: block;
      }

      .slogan {
        margin-top: 20px;
        text-align: center;
      }

      .beian-warp {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
}
</style>
