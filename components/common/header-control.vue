<!--头部控制区域-->
<template>
  <div class="header-control-warp">
    <div class="container header-control-box">
      <span class="link-box">
        <NuxtLink to="/about">关于</NuxtLink>
        <!--<nuxt-link to="/contact">加入</nuxt-link>-->
        <nuxt-link to="/changelog">优化记录</nuxt-link>
      </span>
      <nav class="theme-box">
        <a href="javascript:void 0" class="item-box" v-for="(label,value) of themeMap" :key="value"
           @click="changeTheme(value)" :class="{active:theme===value}">{{ label }}</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
let {theme, themeMap, changeTheme} = useTheme();
</script>

<style lang="scss" scoped>
.header-control-warp {
  height: 40px;
  line-height: 40px;
  background: var(--color-background-deep);

  .header-control-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link-box {
      font-size: 13px;

      a {
        display: inline-block;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .theme-box {
      .item-box {
        font-size: 12px;
        margin-left: 15px;

        &.active {
          color: var(--color-primary);
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
