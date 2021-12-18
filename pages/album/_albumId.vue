<template>
  <div class="album-page">
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
      <el-row :gutter="15">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="4" v-for="(show,index) of showList" :key="show.showId">
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
  padding: 50px 0;

  .name-warp {
    text-align: center;
    @include fontColor('color-title');

    h1 {
      @include fontColor('color-title');
    }

    p {
      @include fontColor('color-text');
    }
  }

  .summary-warp {
    width: 80%;
    margin: 30px auto;
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
      line-height: 24px;
      @include fontColor('color-text');

      ::v-deep p {
        text-indent: 28px;
      }
    }
  }
}
</style>
