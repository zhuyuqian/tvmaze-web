<template>
  <nuxt-link :to="`/show/${info.showId}`" class="animate__animated animate__fadeInUp common-card list"
             :class="{[`delay-${delay}`]:true}">
    <div class="cover-box">
      <image-plus :src="info.showImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.showName }}</div>
      <div class="desc-box pub-ellipsis-1" v-for="episode of info.episodeList" :key="episode.episodeId">
        S{{ episode.seasonNo }}E{{ episode.episodeNo }}：{{ episode.episodeName }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    delay: {type: Number, default: 0},
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.cover-box {
  width: 70px;
  height: 100px;
}

.info-box {
  margin-left: 10px;
}
</style>
