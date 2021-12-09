<template>
  <div class="page-box">
    <show-page-nav/>
    <div class="base-warp">
      <show-main-info :info="showInfo"/>
      <show-slide :list="imageList"/>
    </div>
    <show-other-info :info="showInfo"/>
    <show-season-list ref="season" :list="seasonList"/>
    <show-cast-list ref="cast" :list="castList"/>
    <show-crew-list ref="crew" :list="crewList"/>
    <show-image-list ref="image" :list="imageList"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showInfo: {},
      castList: [],
      crewList: [],
      seasonList: [],
      imageList: []
    }
  },
  async asyncData({app, params}) {
    let [
      {data: {data: showInfo}},
      {data: {data: castList}},
      {data: {data: crewList}},
      {data: {data: seasonList}},
      {data: {data: imageList}},
    ] = await Promise.all([
      app.$axios.get('/show/info', {params: {showId: params.showId}}),
      app.$axios.get('/cast/list', {params: {showId: params.showId}}),
      app.$axios.get('/crew/list', {params: {showId: params.showId}}),
      app.$axios.get('/season/list', {params: {showId: params.showId}}),
      app.$axios.get('/image/list', {params: {showId: params.showId}})
    ])
    return {
      showInfo,
      castList,
      crewList,
      seasonList,
      imageList
    }
  }
}
</script>

<style lang="scss" scoped>
.page-box {
  .base-warp {
    display: flex;
    align-items: center;
  }

  .nav-warp {
    margin-top: 20px;
  }
}
</style>
