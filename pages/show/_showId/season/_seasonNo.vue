<template>
  <el-row class="show-episode-page" :gutter="15">
    <el-col class="stick-top" :xs="12" :sm="12" :md="8" :lg="6" :xl="6">
      <content-warp size="small" :name="`共${seasonList.length}季`">
        <season-item v-for="season of seasonList" :key="season.seasonId" :info="season" class="list"
                     :class="{active:season.seasonNo==seasonNo}"/>
      </content-warp>
    </el-col>
    <el-col :xs="12" :sm="12" :md="16" :lg="18" :xl="18">
      <content-warp
        :name="`S${seasonInfo.seasonNo} ${$store.getters.NAME_BY_LANG(seasonInfo.seasonName,seasonInfo.seasonNameZh)}`">
        <content-warp name="单季简介" size="small"
                      v-if="$store.getters.TEXT_BY_LANG(seasonInfo.seasonSummary,seasonInfo.seasonSummaryZh)">
          <div class="season-summary"
               v-html="$store.getters.TEXT_BY_LANG(seasonInfo.seasonSummary,seasonInfo.seasonSummaryZh)"></div>
        </content-warp>
        <content-warp name="剧集列表" size="small">
          <episode-item v-for="(episode,index) of episodeList"
                        :class="`delay-${index}`" :key="episode.episodeId" :info="episode"/>
        </content-warp>
      </content-warp>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      seasonNo: null,
      seasonInfo: null,
      seasonList: [],
      episodeList: []
    }
  },
  async asyncData({app, params}) {
    let {showId, seasonNo} = params;
    let [
      {data: {data: seasonList}},
    ] = await Promise.all([
      app.$axios.get('/season/list', {params: {showId}})
    ])
    if (!seasonNo || !seasonList.find(item => item.seasonNo == seasonNo)) {
      seasonNo = seasonList[0].seasonNo
    }
    let [
      {data: {data: seasonInfo}},
      {data: {data: episodeList}}
    ] = await Promise.all([
      app.$axios.get('/season/info', {params: {showId, seasonNo}}),
      app.$axios.get('/episode/list', {params: {showId, seasonNo}}),
    ])
    return {
      seasonList,
      seasonNo,
      seasonInfo,
      episodeList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.show-episode-page {
  .season-summary {
    font-size: 13px;
    line-height: 24px;
    @include fontColor('color-text');

    ::v-deep p {
      text-indent: 26px;
    }
  }
}
</style>
