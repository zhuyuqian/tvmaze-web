<template>
  <div class="animate__animated animate__fadeInUp show-episode-item common-card" :class="card?'card':'list'">
    <div class="cover-box">
      <image-plus :src="info.episodeImageMedium"/>
    </div>
    <div class="info-box">
      <div class="other-box">
        {{ $dayjs(info.episodeAirsTime).format('YYYY/MM/DD') }} S{{ info.seasonNo }} E{{ info.episodeNo }}
      </div>
      <div class="name-box">{{ $store.getters.NAME_BY_LANG(info.episodeName, info.episodeNameZh) }}</div>
      <div class="summary-box pub-ellipsis-2"
           v-html="$store.getters.TEXT_BY_LANG(info.episodeSummary, info.episodeSummaryZh)"></div>
      <div class="other-box">
        <span></span>
        <span>{{ info.tvmazeRatingAverage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {type: Boolean, default: false},
    info: {type: Object, required: true}
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
}
</style>
