<template>
  <nuxt-link class="animate__animated animate__fadeInUp common-card"
             :class="{card:card,list:!card,[`delay-${delay}`]:true}"
             :to="`/show/${info.showId}/season/${info.seasonNo}`">
    <div class="cover-box">
      <image-plus :src="info.seasonImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="info.seasonName">
        S{{ info.seasonNo }} {{ info.seasonName }}
      </div>
      <div class="other-box pub-ellipsis-1">
        <span class="el-icon-date">
          {{ info.seasonPremiere ? $dayjs(info.seasonPremiere).format('YYYY-MM-DD') : '未开播' }}
        </span>
      </div>
      <div class="summary-box pub-ellipsis-2" v-html="info.seasonSummary"></div>
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
.card {
  .cover-box {
    width: 100%;
    height: 200px;
  }
}

.list {
  .cover-box {
    width: 70px;
    height: 90px;
  }
}
</style>
