<template>
  <content-warp name="卡司">
    <content-order-warp slot="rt" v-model="searchInfo.order" @change="searchInfoChange" :order-map="orderMap"/>
    <content-search-warp slot="rt" v-model="searchInfo.name" @change="searchInfoChange"/>
    <!--手机-->
    <template v-if="$store.getters.IS_MOBILE">
      <people-item v-for="(people,index) of pageInfo.data" :key="people.peopleId" jump="people"
                   :jump-id="people.peopleId" :delay="index" :cover="people.peopleImageMedium"
                   :title="people.peopleName"/>
    </template>
    <!--pc-->
    <el-row v-else :gutter="15">
      <el-col :xs="5" :sm="5" :md="3" :lg="3" :xl="3" class="stick-top">
        <people-gender v-model="searchInfo.gender" @change="searchInfoChange"/>
      </el-col>
      <el-col :xs="19" :sm="19" :md="21" :lg="21" :xl="21">
        <el-row :gutter="15">
          <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="(people,index) of pageInfo.data" :key="people.peopleId">
            <people-item card jump="people" :jump-id="people.peopleId" :delay="index" :cover="people.peopleImageMedium"
                         :title="people.peopleName"/>
          </el-col>
        </el-row>
        <data-empty v-if="!pageInfo.count"/>
        <pagination-plus :current-page="searchInfo.page" :page-size="24" :total="pageInfo.count"
                         @change="searchInfoChange"/>
      </el-col>
    </el-row>
    <pagination-plus :current-page="searchInfo.page" :page-size="24" :total="pageInfo.count"
                     @change="searchInfoChange"/>
  </content-warp>
</template>

<script>
const getSearchInfo = (query = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    name: query.name || undefined,
    gender: query.gender || undefined,
    order: query.order || 'a-z',
  }
}

export default {
  data() {
    return {
      searchInfo: getSearchInfo(),
      pageInfo: {data: [], count: 0},
      orderMap: {
        'a-z': '名称由A-Z排序',
        'birthday': '出生日期从最近向前',
        'new': '更新时间由近向前排序',
      }
    }
  },
  head() {
    return {
      title: `卡司 - ${this.$dic.logoText}`
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
      let {data: {data: pageInfo}} = await this.$axios.get('/people/list', {params: this.searchInfo});
      this.pageInfo = pageInfo;
    }
  },
  async asyncData({app, query}) {
    let searchInfo = getSearchInfo(query);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/people/list', {params: searchInfo}),
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
