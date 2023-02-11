<template>
  <content-warp name="全部动态">
    <content-search-warp slot="rt" v-model="queryInfo.name" placeholder="标题搜索" @change="queryInfoChange"/>
    <!--移动-->
    <template v-if="$store.getters.IS_MOBILE">
      <new-item v-for="(item,index) of pageInfo.data" :key="item.id" :info="item" :delay="index"/>
      <pagination-plus :current-page="Number(queryInfo.page)" :page-size="18" :total="pageInfo.count"
                       @change="queryInfoChange"/>
    </template>
    <!--pc-->
    <el-row v-else :gutter="15">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3" class="stick-top">
        <new-category v-model="queryInfo.category" @change="queryInfoChange"/>
      </el-col>
      <el-col :xs="19" :sm="19" :md="19" :lg="20" :xl="21">
        <new-item v-for="(item,index) of pageInfo.data" :key="item.id" :info="item" :delay="index"/>
        <pagination-plus :page-size="18" :current-page="Number(queryInfo.page)" :total="pageInfo.count"
                         @change="queryInfoChange"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  props: {
    queryInfo: {type: Object, required: true},
    pageInfo: {type: Object, required: true},
    queryInfoChange: {type: Function, required: true}
  }
}
</script>

<style lang="scss" scoped>
</style>
