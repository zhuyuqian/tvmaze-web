<template>
  <div class="show-order">
    <el-tooltip v-for="(order,key) of orderMap" :key="key" :content="order.desc" placement="top">
      <span class="order-item" @click="$emit('input',key);$emit('change','order',key)"
            :class="{active:value===key}">{{ $t(`show.order.${order.name}`) }}</span>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: String, default: ''}
  },
  data() {
    return {
      orderMap: {
        'a-z': {
          name: "A-Z",
          desc: '名称由A-Z排序'
        },
        hot: {
          name: 'Score',
          desc: '评分由高到低排序'
        },
        new: {
          name: 'Lately',
          desc: '更新时间由近向前排序'
        },
        premiered: {
          name: 'Premiered',
          desc: '首播时间由近向前排序'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-order {
  margin-right: 15px;
  display: flex;
  align-items: center;

  .order-item {
    font-size: 13px;
    margin-left: 10px;
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
