<template>
  <content-warp name="导航">
    <content-search-warp slot="rt" v-model="keyword"/>
    <content-warp v-for="category of showFriendlyList" :key="category.name" :name="category.name" size="small">
      <el-row :gutter="15">
        <el-col v-for="(item,index) of category.list" :xs="12" :sm="12" :md="6" :lg="6" :xl="6" :key="item.id">
          <link-item :info="item" :delay="index"/>
        </el-col>
      </el-row>
    </content-warp>
  </content-warp>
</template>

<script>
export default {
  data() {
    return {
      friendlyList: [],
      keyword: ''
    }
  },
  computed: {
    showFriendlyList() {
      let info = {};
      this.friendlyList.forEach(item => {
        if (!this.keyword || (this.keyword && (item.name.includes(this.keyword) || item.abstract.includes(this.keyword)))) {
          info[item.categoryName] ? info[item.categoryName].push(item) : info[item.categoryName] = [item];
        }
      })
      let list = [];
      for (let name in info) {
        list.push({name: name, list: info[name]})
      }
      return list;
    }
  },
  head() {
    return {
      title: `导航 - ${this.$dic.logoText}`
    }
  },
  async asyncData({app}) {
    let {data: {data: friendlyList}} = await app.$axios.get('/friendlyLink/list');
    return {friendlyList}
  }
}
</script>

<style scoped>

</style>
