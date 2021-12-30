<template>
  <new-page-list :page-info="pageInfo" :query-info="queryInfo" :query-info-change="queryInfoChange"/>
</template>

<script>
import NewPageList from "@/mixins/NewPageList";

export default {
  mixins: [NewPageList],
  props: {
    showInfo: {type: Object, required: true}
  },
  head() {
    return {
      title: `${this.showInfo.showName} - 全部动态 - ${this.$dic.logoText}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
