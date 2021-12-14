<template>
  <nuxt-link class="animate__animated animate__fadeInUp show-season-item common-card"
             :to="`/show/${info.showId}/season/${info.seasonNo}`">
    <div class="cover-box">
      <image-plus :src="info.seasonImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="$store.getters.NAME_BY_LANG(info.seasonName, info.seasonNameZh)">
        S{{ info.seasonNo }} {{ $store.getters.NAME_BY_LANG(info.seasonName, info.seasonNameZh) }}
      </div>
      <div class="other-box pub-ellipsis-1">
        <span class="el-icon-date">
          {{ info.seasonPremiere ? $dayjs(info.seasonPremiere).format('YYYY-MM-DD') : '未开播' }}
        </span>
      </div>
      <div class="summary-box pub-ellipsis-2"
           v-html="$store.getters.TEXT_BY_LANG(info.seasonSummary,info.seasonSummaryZh)"></div>
    </div>
  </nuxt-link>
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

.show-season-item {
  &.card {
    .cover-box {
      width: 100%;
      height: 200px;
    }
  }

  &.list {
    .cover-box {
      width: 70px;
      height: 90px;
    }
  }
}
</style>
