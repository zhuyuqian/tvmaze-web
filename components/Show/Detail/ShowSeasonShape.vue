<template>
  <div class="show-shape">
    <el-tooltip v-for="(shape,key) of shapeMap" :key="key" :content="shape.desc" placement="top">
      <i class="iconfont" :class="{active:value===key,[`icon-${shape.icon}`]:true}"
         @click="$emit('input',key);$emit('change',key)"></i>
    </el-tooltip>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String, required: true
    }
  },
  data() {
    return {
      shapeMap: {
        card: {
          icon: 'card',
          desc: "卡片展示"
        },
        list: {
          icon: 'layout',
          desc: '列表详情展示'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-shape {
  display: flex;
  align-items: center;

  .iconfont {
    margin-left: 10px;
    font-size: 30px;
    cursor: pointer;
    @include fontColor('color-text');

    &.active, &:hover {
      @include fontColor('color-primary');
    }
  }
}
</style>
