<template>
  <div class="logo-box">
    <nuxt-link class="logo-text" to="/">{{ $dic.logoText }}</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.logo-box {
  .logo-text {
    font-size: 26px;
  }
}
</style>
