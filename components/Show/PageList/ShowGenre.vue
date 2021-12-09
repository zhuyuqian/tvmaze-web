<template>
  <content-warp class="show-genre" :name="$t('Genre')" size="small">
    <span slot="rt" class="show-all" @click="showAll=!showAll">{{ showAll ? '收起' : '展开' }}
      <i class="el-icon-d-arrow-right" :class="showAll?'up':'down'"></i>
    </span>
    <el-checkbox-group v-model="newValue" @change="change">
      <el-checkbox v-for="item of SHOW_GENRE_LIST" v-show="showAll||newValue.includes(item.id.toString())"
                   :key="item.id" :label="item.id.toString()">{{ $t(`show.genre.${item.name}`) }}
      </el-checkbox>
    </el-checkbox-group>
  </content-warp>
</template>

<script>
import {mapGetters} from 'vuex';

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
  computed: {
    ...mapGetters(['SHOW_GENRE_LIST'])
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
    max-height: 200px;
    overflow-y: auto;

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
