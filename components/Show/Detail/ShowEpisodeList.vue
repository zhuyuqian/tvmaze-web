<template>
  <content-warp
    :name="`S${this.seasonInfo.seasonNo} ${$store.getters.NAME_BY_LANG(seasonInfo.seasonName,seasonInfo.seasonNameZh)}`"
    :desc="$store.getters.NAME_BY_LANG(seasonInfo.showName,seasonInfo.showNameZh)">
    <!--其他信息-->
    <span v-if="seasonInfo.seasonPremiere" slot="rt"
          class="el-icon-date">播出：{{ $dayjs(seasonInfo.seasonPremiere).format('YYYY-MM-DD') }}</span>
    <span v-if="seasonInfo.seasonEnd" slot="rt"
          class="el-icon-date">季终：{{ $dayjs(seasonInfo.seasonEnd).format('YYYY-MM-DD') }}</span>
    <!--单季简介-->
    <content-warp name="单季简介" size="small" v-if="seasonInfo.seasonSummary||seasonInfo.seasonSummaryZh">
      <div class="season-summary"
           v-html="$store.getters.TEXT_BY_LANG(seasonInfo.seasonSummary,seasonInfo.seasonSummaryZh)"></div>
    </content-warp>
    <!--剧集列表-->
    <content-warp name="剧集列表" size="small" :desc="episodeList.length">
      <el-tooltip v-if="hasSpecial" slot="rt" content="打开此按钮时将隐藏特别篇和剧场版" placement="top">
        <el-switch v-model="onlyRegular" active-text="仅显示正剧"/>
      </el-tooltip>
      <template v-for="(episode,index) of episodeList">
        <show-episode-item class="animate__animated animate__fadeInUp" :class="`delay-${index}`"
                           v-show="!onlyRegular||episode.episodeType==='regular'"
                           :key="episode.episodeId" :info="episode"/>
      </template>
      <data-empty v-if="!loading && !episodeList.length"/>
    </content-warp>
  </content-warp>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      onlyRegular: false,
      seasonInfo: {},
      episodeList: []
    }
  },
  computed: {
    hasSpecial() {
      return !!(this.episodeList.find(item => item.episodeType !== 'regular'));
    }
  },
  methods: {
    async getData(seasonId) {
      this.loading = true;
      let [
        {data: {data: seasonInfo}},
        {data: {data: episodeList}},
      ] = await Promise.all([
        this.$axios.get('/season/info', {params: {seasonId: seasonId}}),
        this.$axios.get('/episode/list', {params: {seasonId: seasonId}})
      ])
      this.loading = false;
      this.seasonInfo = seasonInfo;
      this.episodeList = episodeList;
    },
    init(seasonId) {
      this.getData(seasonId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.season-summary {
  font-size: 12px;
  line-height: 24px;
  @include fontColor('color-text')
}

.el-icon-date {
  font-size: 12px;
  margin-right: 15px;
  @include fontColor('color-text');

  &:before {
    margin-right: 2px;
  }
}

</style>
