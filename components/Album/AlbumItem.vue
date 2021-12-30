<template>
  <nuxt-link class="animate__animated animate__fadeInUp common-card" :to="`/album/${info.albumId}`"
             :class="{card:card,list:!card,[`delay-${delay}`]:true}" :title="info.albumName">
    <div class="cover-box">
      <image-plus :src="info.albumCover"/>
    </div>
    <div class="info-box">
      <div class="name-box">{{ info.albumName }}</div>
      <div class="desc-box pub-ellipsis-1">{{ info.albumRecommend }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    card: {type: Boolean, default: true},
    delay: {type: Number, default: 0},
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
.card {
  .cover-box {
    width: 100%;
    height: 220px;
  }
}

.list {
  .cover-box {
    width: 70px;
    height: 90px;
  }
}
</style>
