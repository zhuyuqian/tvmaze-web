<template>
  <content-warp name="流媒体">
    <content-search-warp slot="rt" v-model="searchInfo.name" @change="searchInfoChange"/>
    <el-row :gutter="15">
      <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="(webChannel,index) of pageInfo.data"
              :key="webChannel.webChannelId">
        <web-channel-item :info="webChannel" :delay="index"/>
      </el-col>
      <data-empty v-if="!pageInfo.count"/>
    </el-row>
    <pagination-plus :current-page="searchInfo.page" :page-size="24" :total="pageInfo.count"
                     @change="searchInfoChange"/>
  </content-warp>
</template>

<script>
const getSearchInfo = (query = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    name: query.name || ''
  }
}

export default {
  watchQuery: true,
  data() {
    return {
      searchInfo: getSearchInfo(),
      pageInfo: {data: [], count: 0}
    }
  },
  head() {
    return {
      title: `流媒体 - ${this.$dic.logoText}`
    }
  },
  methods: {
    searchInfoChange(name, value) {
      this.$router.push({path: this.$route.path, query: Object.assign(this.searchInfo, {[name]: value})});
    },
    async getList() {
      this.searchInfo = getSearchInfo(this.$route.query);
      let {data: {data: pageInfo}} = await this.$axios.get('/webChannel/list', {params: this.searchInfo});
      this.pageInfo = pageInfo;
    }
  },
  async asyncData({app, query}) {
    let searchInfo = getSearchInfo(query);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/webChannel/list', {params: searchInfo}),
    ])
    return {
      pageInfo,
      searchInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
