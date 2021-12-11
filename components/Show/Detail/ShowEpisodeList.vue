<template>
  <content-warp :name="name" :count="`${seasonInfo.showNameZh} ${seasonInfo.showName}`">
    <span slot="rt" class="el-icon-date"
          v-if="seasonInfo.seasonPremiere">播出：{{ $dayjs(seasonInfo.seasonPremiere).format('YYYY-MM-DD') }}</span>
    <span slot="rt" class="el-icon-date"
          v-if="seasonInfo.seasonEnd">季终：{{ $dayjs(seasonInfo.seasonEnd).format('YYYY-MM-DD') }}</span>
    <el-tooltip slot="rt" content="打开此按钮时将隐藏特别篇和剧场版" placement="top">
      <el-switch v-model="onlySelf" active-text="仅显示正剧"/>
    </el-tooltip>
    <show-episode-item v-for="(episode,index) of episodeList" :key="episode.episodeId" :info="episode"
                       v-show="!onlySelf||episode.episodeType==='regular'"
                       class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
    <data-empty v-if="!loading && !episodeList.length"/>
  </content-warp>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      onlySelf: false,
      seasonInfo: {},
      episodeList: []
    }
  },
  computed: {
    name() {
      if (!this.seasonInfo.seasonId) return;
      let text = '';
      text += `S${this.seasonInfo.seasonNo}`;
      if (this.seasonInfo.seasonName) {
        text += `：${this.seasonInfo.seasonName}`;
      }
      return text;
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

.el-icon-date {
  font-size: 12px;
  margin-right: 15px;
  @include fontColor('color-text');

  &:before {
    margin-right: 2px;
  }
}

</style>
