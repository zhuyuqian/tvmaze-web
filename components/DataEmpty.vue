<template>
  <div class="data-empty" :class="{[size]:true}">
    <img class="data-empty-image" src="~@/assets/image/data-empty.svg"/>
    <p class="data-empty-text">暂无数据</p>
  </div>
</template>

<script>
export default {
  props: {
    size: {type: String, default: 'normal'}
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.data-empty {
  text-align: center;

  .data-empty-image {

    opacity: 0.5;
  }

  .data-empty-text {

    @include fontColor('color-disabled');
  }

  &.normal {
    padding: 100px 0;

    .data-empty-image {
      width: 150px;
    }

    .data-empty-text {
      font-size: 14px;
    }
  }

  &.small {
    padding: 20px 0;

    .data-empty-image {
      width: 80px;
    }

    .data-empty-text {
      font-size: 12px;
    }
  }
}
</style>
