<template>
  <el-input class="content-search"
            v-bind="$attrs" v-on="$listeners" :placeholder="placeholder" suffix-icon="el-icon-search" size="small"
            @change="newValue=>$emit('change','name',newValue)" clearable/>
</template>

<script>
export default {
  props: {
    placeholder: {type: String, default: '名称搜索'}
  }
}
</script>

<style lang="scss" scoped>
.content-search {
  width: 200px;
}
</style>
