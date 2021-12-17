<template>
  <show-page :title="$t('Show')" :search-info="searchInfo" :show-info="showInfo"
             :search-info-change="searchInfoChange"/>
</template>

<script>
import showPageList, {getSearchInfo} from "@/mixins/showPageList";

export default {
  mixins: [showPageList],
  head() {
    return {
      title: `节目 - ${this.$dic.logoText}`
    }
  },
  async asyncData({app, query, params}) {
    let searchInfo = getSearchInfo(query, params);
    let [
      {data: {data: showInfo}},
    ] = await Promise.all([
      app.$axios.get('/show/list', {params: searchInfo}),
    ])
    return {
      showInfo,
      searchInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
