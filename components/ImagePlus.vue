<template>
  <img class="image-plus" v-lazy="src||''" :key="src" :style="{objectFit:fit}">
</template>

<script>
export default {
  props: {
    src: {type: String, default: ''},
    fit: {type: String, default: 'cover'},
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.image-plus {
  width: 100%;
  height: 100%;
  border-radius: 4px;

  &[lazy=loading] {
    display: block;
    margin: 0 auto;
    opacity: 0.4;
    width: 20px !important;
    object-fit: contain !important;
  }

  &[lazy=error] {
    display: block;
    margin: 0 auto;
    opacity: 0.4;
    width: 40px !important;
    object-fit: contain !important;
  }
}
</style>
