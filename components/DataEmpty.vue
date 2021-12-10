<template>
  <div class="data-empty">
    <img class="data-empty-image" src="~@/assets/image/data-empty.svg"/>
    <p class="data-empty-text">暂无数据</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.data-empty {
  padding: 100px 0;
  text-align: center;

  .data-empty-image {
    width: 150px;
    opacity: 0.5;
  }

  .data-empty-text {
    font-size: 14px;
    @include fontColor('color-disabled');
  }
}
</style>
