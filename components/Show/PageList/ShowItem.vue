<template>
  <nuxt-link class="animate__animated animate__fadeInUp show-item common-card"
             :to="`/show/${info.showId}`" :class="{[shape]:true,[`delay-${delay}`]:true}">
    <div class="cover-box">
      <image-plus :src="info.showImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="$store.getters.NAME_BY_LANG(info.showName, info.showNameZh)">
        {{ $store.getters.NAME_BY_LANG(info.showName, info.showNameZh) }}
      </div>
      <div class="summary-box pub-ellipsis-2"
           v-html="$store.getters.TEXT_BY_LANG(info.showSummary,info.showSummaryZh)"></div>
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
    delay: {type: Number, default: 0},
    shape: {type: String, default: 'card'},
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-item {

  &.card {
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

  &.list {
    .cover-box {
      width: 80px;
      height: 110px;
    }
  }
}
</style>
