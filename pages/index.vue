<!--首页-->
<template>
  <!--移动-->
  <div v-if="$store.getters.IS_MOBILE">
    <new-swiper :list="newList" v-if="newList.length"/>
    <content-warp name="片单推荐" size="small" more-link="/album" v-if="recommendedAlbumList.length">
      <album-item v-for="album of recommendedAlbumList" :key="album.albumId" :info="album" :card="false"/>
    </content-warp>
    <content-warp name="本月热播" size="small" more-link="/show" v-if="monthShowList.length">
      <show-item shape="list" v-for="(show,index) of monthShowList" :key="show.showId" :info="show" :delay="index"/>
    </content-warp>
    <content-warp name="高分推荐" size="small" more-link="/show" v-if="hotShowList.length">
      <show-item v-for="(show,index) of hotShowList" :key="show.showId" shape="list" :info="show" :delay="index"/>
    </content-warp>
    <content-warp name="即将回归" size="small" more-link="/show" v-if="returnShowList.length">
      <show-item v-for="(show,index) of returnShowList" :key="show.showId" shape="list" :info="show" :delay="index"/>
    </content-warp>
  </div>
  <!--pc-->
  <el-row v-else :gutter="15">
    <el-col :xs="15" :sm="15" :md="17" :lg="18" :xl="18">
      <!--资讯轮播图-->
      <new-swiper :list="newList" v-if="newList"/>
      <content-warp name="即将回归" more-link="/show" v-if="returnShowList.length">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(show,index) of returnShowList"
                  :key="show.showId">
            <show-item shape="list" :info="show" :delay="index"/>
          </el-col>
        </el-row>
      </content-warp>
      <content-warp name="高分推荐" more-link="/show" v-if="hotShowList.length">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(show,index) of hotShowList" :key="show.showId">
            <show-item shape="list" :info="show" :delay="index"/>
          </el-col>
        </el-row>
      </content-warp>
    </el-col>
    <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="6" class="stick-top" v-if="monthShowList.length">
      <content-warp name="本月热播" size="small" more-link="/show">
        <show-item shape="list" v-for="(show,index) of monthShowList" :key="show.showId" :info="show" :delay="index"/>
      </content-warp>
      <content-warp name="片单推荐" size="small" more-link="/album" v-if="recommendedAlbumList.length">
        <album-item v-for="album of recommendedAlbumList" :key="album.albumId" :info="album" :card="false"/>
      </content-warp>
    </el-col>
  </el-row>
</template>

<script>
import NewSwiper from "@/components/Index/NewSwiper";

export default {
  components: {NewSwiper},
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
