<template>
  <content-warp :name="title" :desc="showInfo.count">
    <content-order-warp slot="rt" v-model="searchInfo.order" @change="searchInfoChange" :order-map="orderMap"/>
    <content-search-warp slot="rt" v-model="searchInfo.name" @change="searchInfoChange"/>
    <show-shape slot="rt"/>
    <el-row :gutter="15">
      <el-col :span="3" class="stick-top">
        <show-language v-model="searchInfo.language" @change="searchInfoChange"/>
        <show-type v-model="searchInfo.type" @change="searchInfoChange"/>
        <show-genre v-model="searchInfo.genre" @change="searchInfoChange"/>
      </el-col>
      <el-col :span="21">
        <el-row :gutter="15">
          <el-col v-for="(show,index) of showInfo.data" :key="show.showId"
                  :xs="SHOW_SHAPE==='list'?24:8" :sm="SHOW_SHAPE==='list'?24:8"
                  :md="SHOW_SHAPE==='list'?24:6" :lg="SHOW_SHAPE==='list'?24:4">
            <show-item :info="show" :shape="SHOW_SHAPE" :class="`delay-${index}`"/>
          </el-col>
        </el-row>
        <data-empty v-if="!showInfo.count"/>
        <pagination-plus :current-page="searchInfo.page" :page-size="18" :total="showInfo.count"
                         @change="searchInfoChange"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  props: {
    searchInfo: {type: Object, required: true},
    showInfo: {type: Object, required: true},
    title: {type: String, required: true},
    searchInfoChange: {type: Function, required: true}
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
