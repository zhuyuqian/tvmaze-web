<template>
  <img class="image-plus" v-lazy="src" :key="src" :style="{objectFit:fit}">
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
    width: 20px;
    object-fit: contain !important;
  }

  &[lazy=error] {
    display: block;
    margin: 0 auto;
    width: 40px;
    object-fit: contain !important;
    opacity: 0.5;
  }
}
</style>
