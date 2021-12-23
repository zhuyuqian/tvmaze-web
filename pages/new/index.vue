<template>
  <content-warp name="资讯">
    <new-item v-for="(item,index) of pageInfo.data" :key="item.newId" :info="item"/>
    <pagination-plus :current-page="searchInfo.page" :page-size="18" :total="pageInfo.count"
                     @change="searchInfoChange"/>
  </content-warp>
</template>

<script>
const getSearchInfo = (query = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
  }
}
export default {
  watchQuery: true,
  head() {
    return {
      title: `资讯 - ${this.$dic.logoText}`
    }
  },
  data() {
    return {
      searchInfo: getSearchInfo(),
      pageInfo: {data: [], count: 0},
    }
  },
  methods: {
    searchInfoChange(name, value) {
      this.$router.push({path: this.$route.path, query: Object.assign(this.searchInfo, {[name]: value})});
    },
    async getList() {
      this.searchInfo = getSearchInfo(this.$route.query);
      let {data: {data: pageInfo}} = await this.$axios.get('/new/list', {params: this.searchInfo});
      this.pageInfo = pageInfo;
    }
  },
  async asyncData({app, query}) {
    let searchInfo = getSearchInfo(query);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/new/list', {params: searchInfo}),
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
