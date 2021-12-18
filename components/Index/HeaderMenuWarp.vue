<template>
  <div class="header-menu-warp">
    <div class="content header-menu-box">
      <logo-box/>
      <nav class="menu-warp">
        <nuxt-link class="menu-box" to="/" :class="{active:$route.path==='/'}">首页</nuxt-link>
        <nuxt-link class="menu-box" to="/show" :class="{active:$route.path.startsWith('/show')}">节目</nuxt-link>
        <nuxt-link class="menu-box" to="/album" :class="{active:$route.path.startsWith('/album')}">片单</nuxt-link>
        <nuxt-link class="menu-box" to="/schedule" :class="{active:$route.path.startsWith('/schedule')}">时间表</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
import LogoBox from "@/components/Index/LogoBox";

export default {
  components: {LogoBox}
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.header-menu-warp {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  @include borderColor("border-color");
  @include backgroundColor("color-card-background");
  @include boxShadow("box-shadow");

  .header-menu-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    .menu-warp {
      .menu-box {
        font-size: 16px;
        font-weight: bold;
        margin-right: 30px;

        &.active {
          @include fontColor("color-primary")
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
