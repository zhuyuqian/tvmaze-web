<template>
  <el-input class="content-search" :placeholder="placeholder" suffix-icon="el-icon-search" size="small"
            :value="value" @input="newValue=>$emit('input',newValue)"
            @change="newValue=>$emit('change','name',newValue)" clearable/>
</template>

<script>
export default {
  props: {
    value: {type: [String], default: ''},
    placeholder: {type: String, default: '名称搜索'}
  }
}
</script>

<style lang="scss" scoped>
.content-search {
  width: 200px;
}
</style>
