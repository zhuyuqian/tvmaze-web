<template>
  <nuxt-link :to="`/show/${info.showId}`" class="schedule-item common-card">
    <div class="cover-box">
      <image-plus :src="info.showImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.showName }}</div>
      <div v-for="episode of info.episodeList" :key="episode.episodeId" class="episode-name pub-ellipsis-1">
        S{{ episode.seasonNo }}E{{ episode.episodeNo }}：{{ episode.episodeName }}
      </div>
    </div>
  </nuxt-link>
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

.schedule-item {
  display: flex;

  .cover-box {
    width: 70px;
    height: 100px;
  }

  .info-box {
    flex: 1;
    overflow: hidden;
    margin-left: 10px;

    .name-box {
      display: block;
      font-size: 14px;
      margin-bottom: 4px;
    }

    .episode-name {
      display: block;
      font-size: 12px;
      @include fontColor('color-text');
    }
  }
}
</style>
