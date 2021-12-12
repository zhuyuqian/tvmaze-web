<template>
  <div class="main-info">
    <h1 class="show-name">{{ $store.getters.NAME_BY_LANG(info.showName, info.showNameZh) }}</h1>
    <div class="show-genres">
      <template v-for="(genre,index) of info.showGenres">
        {{ $t(`show.genre.${genre.genreName}`) }} {{ index !== info.showGenres.length - 1 ? ' · ' : '' }}
      </template>
    </div>
    <div class="show-summary" v-html="$store.getters.TEXT_BY_LANG(info.showSummary, info.showSummaryZh)"></div>
    <show-jump-web-site :info="info"/>
  </div>
</template>

<script>

export default {
  props: {
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.main-info {
  flex: 1;
  padding: 50px;

  .show-name {
    font-size: 40px;
    margin: 0;
    @include fontColor('color-title')
  }

  .show-genres {
    margin-top: 4px;
    font-size: 12px;
    @include fontColor('color-title')
  }

  .show-summary {
    margin-top: 10px;
    font-size: 14px;
    line-height: 24px;
    @include fontColor('color-text')
  }
}

</style>
