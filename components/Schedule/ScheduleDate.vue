<template>
  <el-date-picker size="small" placeholder="日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :clearable="false"
                  v-model="newValue" @change="newValue=>$emit('change','date',newValue)"/>
</template>

<script>
export default {
  props: {
    value: {type: String, required: true}
  },
  data() {
    return {
      newValue: this.value
    }
  },
  watch: {
    value(newValue) {
      this.newValue = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
