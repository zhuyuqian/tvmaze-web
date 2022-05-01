<template>
  <div class="header-menu-warp" :class="{mobile:IS_MOBILE}">
    <div class="container header-menu-box">
      <common-logo/>
      <nav class="menu-warp">
        <nuxt-link class="menu-box" to="/show" :class="{active:route.path.startsWith('/show')}">节目</nuxt-link>
        <nuxt-link class="menu-box" to="/album" :class="{active:route.path.startsWith('/album')}">片单</nuxt-link>
        <nuxt-link class="menu-box" to="/schedule" :class="{active:route.path.startsWith('/schedule')}">时间表</nuxt-link>
        <nuxt-link class="menu-box" to="/new" :class="{active:route.path.startsWith('/new')}">动态</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "../../stores";

const route = useRoute();
const {IS_MOBILE} = useStore();
</script>

<style lang="scss" scoped>
.header-menu-warp {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border: var(--border-base);
  background: var(--color-background-card);
  box-shadow: var(--box-shadow-base);

  .header-menu-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;

    .menu-warp {
      .menu-box {
        font-size: 16px;
        font-weight: bold;
        margin-right: 30px;

        &.active {
          color: var(--color-primary);
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  &.mobile {
    .header-menu-box {
      display: block;
      text-align: center;

      .logo-box {
        color: var(--color-primary);
      }

      .menu-warp {
        margin-top: 10px;

        .menu-box {
          font-size: 14px;
          margin-right: 15px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
