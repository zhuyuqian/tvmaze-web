<template>
  <content-warp class="show-language" :name="$t('Language')" size="small">
    <span slot="rt" class="show-all" @click="showAll=!showAll">{{ showAll ? '收起' : '展开' }}
      <i class="el-icon-d-arrow-right" :class="showAll?'up':'down'"></i>
    </span>
    <el-radio-group v-model="newValue" @change="change">
      <el-radio label="">{{ $t('All') }}</el-radio>
      <el-radio v-for="item of SHOW_LANGUAGE_LIST" v-show="showAll||newValue===item"
                :key="item" :label="item">{{ $t(`show.language.${item}`) }}
      </el-radio>
    </el-radio-group>
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
      newValue: this.value
    }
  },
  watch: {
    value(newValue) {
      this.newValue = newValue;
    }
  },
  computed: {
    ...mapGetters(['SHOW_LANGUAGE_LIST'])
  },
  methods: {
    change() {
      this.$emit('change', 'language', this.newValue);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-language {
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

  ::v-deep .el-radio-group {
    max-height: 200px;
    overflow-y: auto;

    .el-radio {
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
