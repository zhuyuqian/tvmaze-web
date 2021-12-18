<template>
  <div class="animate__animated animate__fadeInUp image-box common-card" :class="{[`delay-${delay}`]:true}">
    <div class="cover-box">
      <image-plus :src="info.imageMedium||info.imageOriginal" fit="contain"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delay: {type: Number, default: 0},
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.image-box {
  .cover-box {
    width: 100%;
    height: 160px;
  }
}
</style>
