<template>
  <div class="album-page" :class="{mobile:$store.getters.IS_MOBILE}">
    <div class="name-warp">
      <h1>{{ albumInfo.albumName }}</h1>
      <p>{{ albumInfo.albumRecommend }}</p>
    </div>
    <div class="summary-warp">
      <div class="banner-box">
        <image-plus :src="albumInfo.albumCover"/>
      </div>
      <div class="summary-box" v-html="albumInfo.albumSummary"></div>
    </div>
    <content-warp name="节目">
      <!--移动-->
      <template v-if="$store.getters.IS_MOBILE">
        <show-item v-for="(show,index) of showList" :key="show.showId" shape="list" :info="show" :delay="index"/>
      </template>
      <el-row v-else :gutter="15">
        <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4" v-for="(show,index) of showList" :key="show.showId">
          <show-item shape="card" :info="show" :delay="index"/>
        </el-col>
      </el-row>
    </content-warp>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albumInfo: {},
      showList: []
    }
  },
  head() {
    return {
      title: `${this.albumInfo.albumName} - ${this.albumInfo.albumRecommend} - ${this.$dic.logoText}`
    }
  },
  async asyncData({app, params}) {
    let {albumId} = params;
    let [
      {data: {data: albumInfo}},
      {data: {data: {data: showList}}}
    ] = await Promise.all([
      app.$axios.get('/album/info', {params: {albumId}}),
      app.$axios.get('/show/list', {params: {albumId}}),
    ]);
    return {
      albumInfo,
      showList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.album-page {
  .name-warp {
    width: 80%;
    margin: 20px auto 0;
    @include fontColor('color-title');

    h1 {
      font-size: 46px;
      @include fontColor('color-title');

      &:hover {
        animation: text-animate 0.5s linear infinite;
      }
    }

    p {
      margin: 10px auto 0;
      font-size: 14px;
      @include fontColor('color-text');
    }
  }

  .summary-warp {
    width: 80%;
    margin: 30px auto 40px;
    overflow: hidden;

    .banner-box {
      float: left;
      margin: 0 20px 4px 0;
      width: 50%;
      height: 250px;
      padding: 10px;
      border-radius: 4px;
      box-sizing: border-box;
      overflow: hidden;
      @include backgroundColor('color-card-background');
      @include border('border-base');
    }

    .summary-box {
      font-size: 14px;
      line-height: 28px;
      @include fontColor('color-text');

      ::v-deep p {
        text-indent: 28px;
      }
    }
  }

  &.mobile {
    .name-warp {
      margin: 0;
      width: 100%;

      h1 {
        font-size: 30px;
      }
    }

    .summary-warp {
      width: 100%;

      .banner-box {
        width: 100%;
        float: none;
      }

      .summary-box {
        float: none;
        margin-top: 10px;
      }
    }
  }
}
</style>
