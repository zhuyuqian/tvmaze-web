<template>
  <el-input class="content-search"
            v-bind="$attrs" v-on="$listeners" placeholder="名称搜索" suffix-icon="el-icon-search" size="small"
            @change="newValue=>$emit('change','name',newValue)" clearable/>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-search {
  width: 200px;
}
</style>
