<template>
  <nuxt-link class="animate__animated animate__fadeInUp common-card"
             :class="{[shape]:true,[`delay-${delay}`]:true}"
             :target="target" :to="`/show/${info.showId}`"
             :title="info.showName">
    <span class="status-box">{{ $t(`show.status.${info.showStatus}`) }}</span>
    <div class="cover-box">
      <image-plus :src="info.showImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.showName }}</div>
      <div class="summary-box pub-ellipsis-2" v-html="info.showSummary"></div>
      <div class="other-box pub-ellipsis-1">
        <span>
          <template v-for="(genre,index) of info.showGenres">
          {{ $t(`show.genre.${genre.genreName}`) }} {{ index !== info.showGenres.length - 1 ? ' · ' : '' }}
        </template>
        </span>
        <span>{{ info.tvmazeRatingAverage }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    target: {type: String, default: ''},
    delay: {type: Number, default: 0},
    shape: {type: String, default: 'card'},
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.card {
  .cover-box {
    width: 100%;
    height: 220px;
  }

  .info-box {
    .summary-box {
      display: none;
    }

    .other-box {
      height: 17px;
    }
  }
}

.list {
  .cover-box {
    width: 80px;
    height: 110px;
  }
}
</style>
