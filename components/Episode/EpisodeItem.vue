<template>
  <nuxt-link class="animate__animated animate__fadeInUp show-episode-item common-card"
             :class="{card:card,list:!card,[`delay-${delay}`]:true}"
             :to="`/show/${info.showId}/season/${info.seasonNo}/${info.episodeName.replace(new RegExp(' ','g'),'-')}`">
    <div class="cover-box">
      <image-plus :src="info.episodeImageMedium"/>
    </div>
    <div class="info-box">
      <div class="other-box">
        {{ $dayjs(info.episodeAirsTime).format('YYYY/MM/DD') }} S{{ info.seasonNo }} E{{ info.episodeNo }}
        <span>{{ info.tvmazeRatingAverage }}</span>
      </div>
      <div class="name-box pub-ellipsis-1">{{ $store.getters.NAME_BY_LANG(info.episodeName, info.episodeNameZh) }}</div>
      <div class="summary-box pub-ellipsis-2"
           v-html="$store.getters.TEXT_BY_LANG(info.episodeSummary, info.episodeSummaryZh)"></div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    delay: {type: Number, default: 0},
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
