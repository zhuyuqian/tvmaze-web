<template>
  <div class="show-page" :class="{mobile:$store.getters.IS_MOBILE}">
    <div class="show-name-warp">
      <!--剧名-->
      <h1 class="show-name">
        <nuxt-link :title="$store.getters.NAME_BY_LANG(showInfo.showName, showInfo.showNameZh)"
                   :to="`/show/${showInfo.showId}`">
          {{ $store.getters.NAME_BY_LANG(showInfo.showName, showInfo.showNameZh) }}
        </nuxt-link>
      </h1>
      <!--题材-->
      <div class="show-genres">
        <template v-for="(genre,index) of showInfo.showGenres">
          {{ $t(`show.genre.${genre.genreName}`) }} {{ index !== showInfo.showGenres.length - 1 ? ' · ' : '' }}
        </template>
      </div>
    </div>
    <!--子路由-->
    <nuxt-child :show-info="showInfo"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showInfo: {}
    }
  },
  head() {
    return {
      title: `${this.$store.getters.NAME_BY_LANG(this.showInfo.showName, this.showInfo.showNameZh)} - ${this.$dic.logoText}`
    }
  },
  async asyncData({app, params}) {
    let {showId} = params;
    let [
      {data: {data: showInfo}},
    ] = await Promise.all([
      app.$axios.get('/show/info', {params: {showId}}),
    ])
    return {
      showInfo
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.show-page {
  .show-name-warp {
    margin-top: 30px;
    margin-bottom: 40px;

    .show-name {
      width: 80%;
      margin: 0 auto;
      font-size: 46px;
      font-weight: bold;

      a {
        @include fontColor('color-title');

        &:hover {
          animation: text-animate 0.5s linear infinite;
        }
      }
    }

    .show-genres {
      width: 80%;
      margin: 10px auto 0;
      font-size: 12px;
      @include fontColor('color-title')
    }
  }

  &.mobile {
    .show-name-warp {
      margin-top: 0;
      margin-bottom: 20px;

      .show-name {
        font-size: 30px;
        width: 100%;
      }

      .show-genres {
        width: 100%;
      }
    }
  }
}
</style>
