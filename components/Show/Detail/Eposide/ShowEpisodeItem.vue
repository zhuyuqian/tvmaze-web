<template>
  <div class="show-episode-item common-card list">
    <div class="cover-box">
      <image-plus :src="info.episodeImageMedium"/>
    </div>
    <div class="info-box">
      <div class="other-box">
        {{ $dayjs(info.episodeAirsTime).format('YYYY/MM/DD') }} S{{ info.seasonNo }} E{{ info.episodeNo }}
      </div>
      <div class="name-box">{{ info.episodeNameZh }} {{ info.episodeName }}</div>
      <div class="summary-box" v-html="$store.getters.TEXT_BY_LANG(info.episodeSummary, info.episodeSummaryZh)"></div>
      <div class="score-box">
        <span>{{ info.tvmazeRatingAverage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object, required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-episode-item {
  display: flex;

  .cover-box {
    width: 150px;
    height: 100px;
  }

  .info-box {
    flex: 1;
    margin-left: 10px;

    .summary-box {
      margin-top: 2px;
      font-size: 14px;
    }

    .score-box {
      text-align: right;
      margin-top: 2px;
      font-size: 12px;
    }
  }
}
</style>
