<template>
  <el-input v-bind="$attrs" v-on="$listeners" placeholder="名称搜索" suffix-icon="el-icon-search" size="small"
            @change="newValue=>$emit('change','name',newValue)" clearable/>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
