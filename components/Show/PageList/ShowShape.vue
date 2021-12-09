<template>
  <div class="show-shape">
    <el-tooltip v-for="(shape,key) of shapeMap" :key="key" :content="shape.desc" placement="top">
      <i class="iconfont" :class="{active:SHOW_SHAPE===key,[`icon-${key}`]:true}"
         @click="$store.commit('SET_SHOW_SHAPE',key)"></i>
    </el-tooltip>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['SHOW_SHAPE'])
  },
  data() {
    return {
      shapeMap: {
        card: {
          icon: 'card',
          desc: "卡片展示"
        },
        list: {
          icon: 'list',
          desc: '列表展示'
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
