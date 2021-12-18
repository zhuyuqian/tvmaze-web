<template>
  <content-warp class="show-genre" :name="$t('Genre')" size="small">
    <span slot="rt" class="show-all" @click="showAll=!showAll">{{ showAll ? '收起' : '展开' }}
      <i class="el-icon-d-arrow-right" :class="showAll?'up':'down'"></i>
    </span>
    <el-scrollbar :style="{height: showAll?'200px':'100%'}">
      <el-checkbox-group v-model="newValue" @change="change">
        <el-checkbox v-for="item of $store.getters.SHOW_GENRE_LIST" :key="item.id" :label="item.id.toString()"
                     v-show="showAll||newValue.includes(item.id.toString())">{{ $t(`show.genre.${item.name}`) }}
        </el-checkbox>
      </el-checkbox-group>
    </el-scrollbar>
  </content-warp>
</template>

<script>
export default {
  props: {
    value: {type: String, default: ''}
  },
  data() {
    return {
      showAll: true,
      newValue: this.value ? this.value.split(',') : []
    }
  },
  watch: {
    value(newValue) {
      this.newValue = newValue ? newValue.split(',') : []
    }
  },
  methods: {
    change() {
      this.$emit('change', 'genre', this.newValue.join(','));
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-genre {
  .show-all {
    cursor: pointer;
    font-size: 12px;
    @include fontColor('color-text');

    .el-icon-d-arrow-right {
      transition: 0.5s all;

      &.up {
        transform: rotate(-90deg);
      }

      &.down {
        transform: rotate(90deg);
      }
    }
  }

  ::v-deep .el-checkbox-group {
    .el-checkbox {
      width: 100%;
      margin-bottom: 10px;
      margin-right: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
