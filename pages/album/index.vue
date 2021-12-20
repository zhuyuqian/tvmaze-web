<template>
  <content-warp name="片单">
    <content-order-warp slot="rt" v-model="searchInfo.order" @change="searchInfoChange" :order-map="orderMap"/>
    <content-search-warp slot="rt" v-model="searchInfo.name" @change="searchInfoChange"/>
    <template v-if="$store.getters.IS_MOBILE">
      <album-item v-for="(album,index) of pageInfo.data" :key="album.albumId" :info="album" :delay="index"
                  :card="false"/>
    </template>
    <el-row v-else :gutter="15">
      <el-col v-for="(album,index) of pageInfo.data" :key="album.albumId" :xs="8" :sm="8" :md="6" :lg="4" :xl="4">
        <album-item :info="album" :delay="index"/>
      </el-col>
    </el-row>
    <data-empty v-if="!pageInfo.count"/>
    <pagination-plus :current-page="searchInfo.page" :page-size="24" :total="pageInfo.count"
                     @change="searchInfoChange"/>
  </content-warp>
</template>

<script>
export const getSearchInfo = (query = {}, params = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    order: query.order || 'a-z',
    name: query.name || undefined,
  }
}
export default {
  data() {
    return {
      pageInfo: {data: [], count: 0},
      searchInfo: getSearchInfo(),
      orderMap: {
        'a-z': '名称由A-Z排序',
        'new': '创建时间由近及远',
      }
    }
  },
  head() {
    return {
      title: `片单 - ${this.$dic.logoText}`
    }
  },
  watch: {
    $route() {
      this.getList()
    }
  },
  methods: {
    searchInfoChange(name, value) {
      let assign = {[name]: value};
      // 如果不是页码，则页码变回1
      if (name !== 'page') assign.page = 1;
      // 合并搜索条件
      Object.assign(this.searchInfo, assign);
      // 从query中去除params的参数
      let query = JSON.parse(JSON.stringify(this.searchInfo))
      for (let key in query) {
        if (this.$route.params[key]) delete query[key]
      }
      // 跳转
      this.$router.push({path: this.$route.path, query: query});
    },
    async getList() {
      this.searchInfo = getSearchInfo(this.$route.query, this.$route.params);
      let {data: {data: pageInfo}} = await this.$axios.get('/album/list', {params: this.searchInfo});
      this.pageInfo = pageInfo;
    }
  },
  async asyncData({app, query, params}) {
    let searchInfo = getSearchInfo(query, params);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/album/list', {params: searchInfo}),
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
