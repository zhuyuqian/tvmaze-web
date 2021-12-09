<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" :append-to-body="true" :modal-append-to-body="true">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
</style>
