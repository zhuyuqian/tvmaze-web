<template>
  <div class="jump-web-site">
    <a class="item" v-if="info.showOfficialSite" :href="info.showOfficialSite"
       target="_blank">官网</a>
    <a class="item" v-if="showExternals.tvmaze" :href="`https://tvmaze.com/shows/${showExternals.tvmaze}`"
       target="_blank">TVmaze.com</a>
    <a class="item" v-if="showExternals.imdb" :href="`https://www.imdb.com/title/${showExternals.imdb}`"
       target="_blank">IMDb.com</a>
  </div>
</template>

<script>
export default {
  props: {info: {type: Object, required: true}},
  computed: {
    showExternals() {
      return JSON.parse(this.info.showExternals || null);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.jump-web-site {
  margin-top: 10px;

  .item {
    display: inline-block;
    font-size: 12px;
    margin-right: 10px;
    @include fontColor('color-primary-light');

    &:hover {
      @include fontColor('color-primary');
    }
  }
}
</style>
