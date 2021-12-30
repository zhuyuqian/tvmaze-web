<template>
  <show-page :title="$t('Show')" :query-info="queryInfo" :page-info="pageInfo"
             :query-info-change="queryInfoChange"/>
</template>

<script>
import showPageList from "@/mixins/showPageList";

export default {
  mixins: [showPageList],
  head() {
    return {
      title: `节目 - ${this.$dic.logoText}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
