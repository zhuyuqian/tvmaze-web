<template>
  <div class="content-order-warp">
    <el-tooltip v-for="(desc,key) of orderMap" :key="key" :content="desc" placement="top">
      <span class="order-item" @click="$emit('input',key);$emit('change','order',key)" :class="{active:value===key}">
        {{ $t(`order.${key}`) }}
      </span>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: String, required: true},
    orderMap: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.content-order-warp {
  margin-right: 15px;
  display: flex;
  align-items: center;

  .order-item {
    font-size: 13px;
    margin-left: 14px;
    text-align: center;
    cursor: pointer;
    @include fontColor('color-text');

    &:hover, &.active {
      @include fontColor('color-primary');
    }

    &.active {
      position: relative;

      &:before {
        position: absolute;
        content: '';
        width: 20px;
        height: 2px;
        bottom: -10px;
        left: 50%;
        margin-left: -10px;
        @include backgroundColor('color-primary');
      }
    }

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
