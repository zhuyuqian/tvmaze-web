<!--首页-->
<template>
  <el-row :gutter="15">
    <el-col :xs="15" :sm="15" :md="17" :lg="18" :xl="19">
      <content-warp :name="$t('Hot')" size="small" more-link="/show">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" v-for="(show,index) of hotShowList" :key="show.showId">
            <show-item shape="list" :info="show" :delay="index"/>
          </el-col>
        </el-row>
      </content-warp>
      <content-warp :name="$t('Will Return')" size="small" more-link="/show">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" v-for="(show,index) of returnShowList" :key="show.showId">
            <show-item shape="list" :info="show" :delay="index"/>
          </el-col>
        </el-row>
      </content-warp>
    </el-col>
    <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="5" class="stick-top">
      <content-warp name="片单推荐" size="small" more-link="/album">
        <album-item v-for="album of recommendedAlbumList" :key="album.albumId" :info="album" :card="false"/>
      </content-warp>
    </el-col>
  </el-row>
</template>

<script>


export default {
  data() {
    return {
      returnShowList: [], // 即将回归
      hotShowList: [], // 热门
      recommendedAlbumList: [] // 推荐片单
    }
  },
  async asyncData({app}) {
    let [
      {data: {data: returnShowList}},
      {data: {data: hotShowList}},
      {data: {data: recommendedAlbumList}}
    ] = await Promise.all([
      app.$axios.get('/show/return'),
      app.$axios.get('/show/hot'),
      app.$axios.get('/album/recommended')
    ])
    return {
      returnShowList,
      hotShowList,
      recommendedAlbumList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
