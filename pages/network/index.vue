<template>
  <div class="page-box">
    <content-warp name="全部频道" :count="pageInfo.count">
      <content-search-warp slot="rt" v-model="searchInfo.name" @change="searchInfoChange"/>
      <el-row :gutter="15">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" v-for="(network,index) of pageInfo.data" :key="network.networkId">
          <network-item :info="network" class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
        </el-col>
        <data-empty v-if="!pageInfo.count"/>
      </el-row>
    </content-warp>
    <pagination-plus :current-page="searchInfo.page" :page-size="24" :total="pageInfo.count"
                     @change="searchInfoChange"/>
  </div>
</template>

<script>

const getSearchInfo = (query = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    name: query.name || ''
  }
}

export default {
  data() {
    return {
      searchInfo: getSearchInfo(),
      pageInfo: {data: [], count: 0}
    }
  },
  watch: {
    $route() {
      this.getList()
    }
  },
  methods: {
    searchInfoChange(name, value) {
      this.$router.push({path: this.$route.path, query: Object.assign(this.searchInfo, {[name]: value})});
    },
    async getList() {
      this.searchInfo = getSearchInfo(this.$route.query);
      let {data: {data: pageInfo}} = await this.$axios.get('/network/list', {params: this.searchInfo});
      this.pageInfo = pageInfo;
    }
  },
  async asyncData({app, query}) {
    let searchInfo = getSearchInfo(query);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/network/list', {params: searchInfo}),
    ])
    return {
      pageInfo,
      searchInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.page-box {

}
</style>
