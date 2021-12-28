<!--首页-->
<template>
  <!--移动-->
  <div v-if="$store.getters.IS_MOBILE">
    <content-warp name="片单推荐" size="small" more-link="/album">
      <album-item v-for="album of recommendedAlbumList" :key="album.albumId" :info="album" :card="false"/>
    </content-warp>
    <content-warp name="本月热播" size="small" more-link="/show">
      <show-item shape="list" v-for="(show,index) of monthShowList" :key="show.showId" :info="show" :delay="index"/>
    </content-warp>
    <content-warp name="高分推荐" size="small" more-link="/show">
      <show-item v-for="(show,index) of hotShowList" :key="show.showId" shape="list" :info="show" :delay="index"/>
    </content-warp>
    <content-warp name="即将回归" size="small" more-link="/show">
      <show-item v-for="(show,index) of returnShowList" :key="show.showId" shape="list" :info="show" :delay="index"/>
    </content-warp>
  </div>
  <!--pc-->
  <el-row v-else :gutter="15">
    <el-col :xs="15" :sm="15" :md="17" :lg="18" :xl="18">
      <content-warp name="最新资讯" more-link="/new">
        <new-item v-for="(item,index) of newList" :key="item.newId" :info="item" :delay="index"/>
      </content-warp>
      <content-warp name="即将回归" more-link="/show">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(show,index) of returnShowList"
                  :key="show.showId">
            <show-item shape="list" :info="show" :delay="index"/>
          </el-col>
        </el-row>
      </content-warp>
      <content-warp name="高分推荐" more-link="/show">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(show,index) of hotShowList" :key="show.showId">
            <show-item shape="list" :info="show" :delay="index"/>
          </el-col>
        </el-row>
      </content-warp>
    </el-col>
    <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="6" class="stick-top">
      <content-warp name="本月热播" size="small" more-link="/show">
        <show-item shape="list" v-for="(show,index) of monthShowList" :key="show.showId" :info="show" :delay="index"/>
      </content-warp>
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
      hotShowList: [], // 热门
      monthShowList: [], // 本月热播
      returnShowList: [], // 即将回归
      recommendedAlbumList: [], // 推荐片单
      newList: [] // 最新资讯
    }
  },
  async asyncData({app}) {
    let [
      {data: {data: monthShowList}},
      {data: {data: returnShowList}},
      {data: {data: hotShowList}},
      {data: {data: recommendedAlbumList}},
      {data: {data: newList}}
    ] = await Promise.all([
      app.$axios.get('/show/month'),
      app.$axios.get('/show/return'),
      app.$axios.get('/show/hot'),
      app.$axios.get('/album/recommended'),
      app.$axios.get('/new/new'),
    ])
    return {
      head: app.head,
      monthShowList,
      returnShowList,
      hotShowList,
      recommendedAlbumList,
      newList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
