<template>
  <new-page-list :page-info="pageInfo" :query-info="queryInfo" :query-info-change="queryInfoChange"/>
</template>

<script>
import NewPageList from "@/mixins/NewPageList";

export default {
  mixins: [NewPageList],
  head() {
    return {
      title: `动态 - ${this.$dic.logoText}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
