<template>
  <show-page :title="pageInfo.webChannelName" :search-info="searchInfo" :search-info-change="searchInfoChange"
             :show-info="showInfo"/>
</template>

<script>
import showPageList, {getSearchInfo} from "@/mixins/showPageList";

export default {
  mixins: [showPageList],
  data() {
    return {
      pageInfo: {}
    }
  },
  async asyncData({app, query, params}) {
    let searchInfo = getSearchInfo(query, params);
    let [
      {data: {data: showInfo}},
      {data: {data: pageInfo}}
    ] = await Promise.all([
      app.$axios.get('/show/list', {params: searchInfo}),
      app.$axios.get('/webChannel/info', {params: {webChannelId: params.webChannelId}})
    ])
    return {
      pageInfo,
      showInfo,
      searchInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
