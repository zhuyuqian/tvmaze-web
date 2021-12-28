<template>
  <!--移动-->
  <content-warp name="动态" v-if="$store.getters.IS_MOBILE">
    <new-item v-for="(item,index) of pageInfo.data" :key="item.newId" :info="item" :delay="index"/>
    <pagination-plus :current-page="searchInfo.page" :page-size="18" :total="pageInfo.count"
                     @change="searchInfoChange"/>
  </content-warp>
  <!--pc-->
  <content-warp v-else name="动态">
    <content-search-warp slot="rt" v-model="searchInfo.title" placeholder="标题搜索" @change="searchInfoChange"/>
    <el-row :gutter="15">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3" class="stick-top">
        <new-category v-model="searchInfo.category" @change="searchInfoChange"/>
      </el-col>
      <el-col :xs="19" :sm="19" :md="19" :lg="20" :xl="21">
        <new-item v-for="(item,index) of pageInfo.data" :key="item.newId" :info="item" :delay="index"/>
        <pagination-plus :current-page="searchInfo.page" :page-size="18" :total="pageInfo.count"
                         @change="searchInfoChange"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
const getSearchInfo = (query = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    title: query.title || undefined,
    category: query.category || undefined
  }
}
export default {
  watchQuery: true,
  head() {
    return {
      title: `动态 - ${this.$dic.logoText}`
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
