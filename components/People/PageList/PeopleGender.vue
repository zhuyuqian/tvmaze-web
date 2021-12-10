<template>
  <content-warp class="show-gender" :name="$t('Gender')" size="small">
    <el-radio-group v-model="newValue" @change="change">
      <el-radio label="">{{ $t('All') }}</el-radio>
      <el-radio v-for="(label,key) of $dic.sexMap" :key="key" :label="key">{{ $t(`people.gender.${key}`) }}
      </el-radio>
    </el-radio-group>
  </content-warp>
</template>

<script>

export default {
  props: {
    value: {type: String, default: ''}
  },
  data() {
    return {
      newValue: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.newValue = newValue;
    }
  },
  methods: {
    change() {
      this.$emit('change', 'gender', this.newValue);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-gender {
  ::v-deep .el-radio-group {
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
