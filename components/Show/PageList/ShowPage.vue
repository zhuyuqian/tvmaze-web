<template>
  <!--移动-->
  <content-warp v-if="$store.getters.IS_MOBILE" :name="title">
    <content-search-warp slot="rt" v-model="queryInfo.name" @change="queryInfoChange"/>
    <show-item v-for="(show,index) of pageInfo.data" :key="show.showId" :info="show" shape="list" :delay="index"/>
    <data-empty v-if="!pageInfo.count"/>
    <pagination-plus :current-page="queryInfo.page" :page-size="18" :total="pageInfo.count"
                     @change="queryInfoChange"/>
  </content-warp>
  <!--pc-->
  <content-warp v-else :name="title">
    <content-order-warp slot="rt" v-model="queryInfo.order" @change="queryInfoChange" :order-map="orderMap"/>
    <content-search-warp slot="rt" v-model="queryInfo.name" @change="queryInfoChange"/>
    <show-shape slot="rt"/>
    <el-row :gutter="15">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3" class="stick-top">
        <show-status v-model="queryInfo.status"  @change="queryInfoChange"/>
        <show-language v-model="queryInfo.language" @change="queryInfoChange"/>
        <show-type v-model="queryInfo.type" @change="queryInfoChange"/>
        <show-genre v-model="queryInfo.genre" @change="queryInfoChange"/>
      </el-col>
      <el-col :xs="19" :sm="19" :md="19" :lg="20" :xl="21">
        <el-row :gutter="15">
          <el-col v-for="(show,index) of pageInfo.data" :key="show.showId"
                  :xs="SHOW_SHAPE==='list'?24:8" :sm="SHOW_SHAPE==='list'?24:8"
                  :md="SHOW_SHAPE==='list'?24:6" :lg="SHOW_SHAPE==='list'?24:4"
                  :xl="SHOW_SHAPE==='list'?24:4">
            <show-item :info="show" :shape="SHOW_SHAPE" :delay="index"/>
          </el-col>
        </el-row>
        <data-empty v-if="!pageInfo.count"/>
        <pagination-plus :current-page="queryInfo.page" :page-size="18" :total="pageInfo.count"
                         @change="queryInfoChange"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  props: {
    title: {type: String, required: true},
    queryInfo: {type: Object, required: true},
    pageInfo: {type: Object, required: true},
    queryInfoChange: {type: Function, required: true}
  },
  data() {
    return {
      orderMap: {
        'a-z': '名称由A-Z排序',
        'hot': '评分由高到低排序',
        'new': '更新时间由近向前排序',
        'premiered': '首播时间由近向前排序'
      }
    }
  },
  computed: {
    ...mapGetters(['SHOW_SHAPE'])
  }
}
</script>

<style lang="scss" scoped>
</style>
