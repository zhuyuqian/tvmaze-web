<template>
  <show-page :title="networkInfo.networkName" :query-info="queryInfo" :page-info="pageInfo"
             :query-info-change="queryInfoChange"/>
</template>

<script>
import ShowPageList from "@/mixins/showPageList";

export default {
  mixins: [ShowPageList],
  props: {
    networkInfo: {type: Object, required: true},
  }
}
</script>

<style lang="scss" scoped>
</style>
