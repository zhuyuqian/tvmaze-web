<template>
  <div class="image-box common-card">
    <div class="cover-box">
      <image-plus :src="info.imageMedium||info.imageOriginal" fit="contain"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object, required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.image-box {
  .cover-box {
    width: 100%;
    height: 200px;
  }
}
</style>
