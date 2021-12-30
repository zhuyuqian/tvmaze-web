<template>
  <show-page :title="webChannelInfo.webChannelName" :query-info="queryInfo" :page-info="pageInfo"
             :query-info-change="queryInfoChange"/>
</template>

<script>
import ShowPageList from "@/mixins/showPageList";

export default {
  mixins: [ShowPageList],
  props: {
    webChannelInfo: {type: Object, required: true},
  }
}
</script>

<style lang="scss" scoped>
</style>
