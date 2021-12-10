<template>
  <div class="header-menu-warp">
    <div class="content header-menu-box">
      <logo-box/>
      <nav class="menu-warp">
        <nuxt-link class="menu-box" to="/" :class="{active:$route.path==='/'}">
          {{ $t('Main') }}
        </nuxt-link>
        <nuxt-link class="menu-box" to="/show" :class="{active:$route.path.startsWith('/show')}">
          {{ $t('Show') }}
        </nuxt-link>
        <nuxt-link class="menu-box" to="/network" :class="{active:$route.path.startsWith('/network')}">
          {{ $t('Network') }}
        </nuxt-link>
        <nuxt-link class="menu-box" to="/webChannel" :class="{active:$route.path.startsWith('/webChannel')}">
          {{ $t('WebChannel') }}
        </nuxt-link>
        <nuxt-link class="menu-box" to="/schedule" :class="{active:$route.path.startsWith('/schedule')}">
          {{ $t('Schedule') }}
        </nuxt-link>
        <nuxt-link class="menu-box" to="/people" :class="{active:$route.path.startsWith('/people')}">
          {{ $t('People') }}
        </nuxt-link>
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
