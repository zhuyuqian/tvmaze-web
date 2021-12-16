<!--首页-->
<template>
  <div class="page-box">
    <content-warp :name="$t('Will Return')" more-link="/show">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" v-for="(show,index) of willReturnShowList" :key="show.showId">
          <show-item shape="list" :info="show" :delay="index"/>
        </el-col>
      </el-row>
    </content-warp>
    <content-warp :name="$t('Hot')" more-link="/show">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" v-for="(show,index) of hotShowList" :key="show.showId">
          <show-item shape="list" :info="show" :delay="index"/>
        </el-col>
      </el-row>
    </content-warp>
  </div>
</template>

<script>


export default {
  data() {
    return {
      willReturnShowList: [], // 即将回归
      hotShowList: [], // 热门
    }
  },
  async asyncData({app}) {
    let [
      {data: {data: willReturnShowList}},
      {data: {data: hotShowList}},
    ] = await Promise.all([
      app.$axios.get('/show/listByWillReturn'),
      app.$axios.get('/show/listByHot'),
    ])
    return {
      willReturnShowList,
      hotShowList
    }
  }
}
</script>

<style lang="scss" scoped>
.page-box {

}
</style>
