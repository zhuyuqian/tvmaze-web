<template>
  <div class="logo-box">
    <span>{{ $dic.logoText }}</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.logo-box {
  span {
    font-size: 26px;
    @include fontColor("color-title")
  }
}
</style>
