<template>
  <nuxt-link class="show-item common-card" :to="`/show/${info.showId}`" :class="{[shape]:true}">
    <div class="cover-box">
      <image-plus :src="info.showImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="`${info.showNameZh} ${info.showName}`">
        {{ info.showNameZh }} {{ info.showName }}
      </div>
      <div class="summary-box pub-ellipsis-1"
           v-html="$store.getters.TEXT_BY_LANG(info.showSummary,info.showSummaryZh)"></div>
      <div class="other-box">{{ $t(`show.language.${info.showLanguage}`) }}</div>
      <div class="other-box pub-ellipsis-1">
        <span>
          <template v-for="(genre,index) of info.showGenres">
          {{ $t(`show.genre.${genre.genreName}`) }} {{ index !== info.showGenres.length - 1 ? ' · ' : '' }}
        </template>
        </span>
        <span>
          {{ info.tvmazeRatingAverage }}
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
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
    display: flex;

    .cover-box {
      width: 80px;
      height: 110px;
    }

    .info-box {
      flex: 1;
      overflow: hidden;
      margin-left: 20px;

      .summary-box {
        display: -webkit-box;
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
}
</style>
