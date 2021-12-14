<template>
  <nuxt-link class="animate__animated animate__fadeInUp card-item common-card"
             :to="`/webChannel/${info.webChannelId}`" :title="info.webChannelName">
    <div class="cover-box">
      <image-plus :src="info.webChannelCoverImgUrl"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.webChannelName }}</div>
    </div>
  </nuxt-link>
</template>

<script>
import ImagePlus from "@/components/ImagePlus";

export default {
  components: {ImagePlus},
  props: {
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.card-item {
  text-align: center;

  .cover-box {
    width: 120px;
    height: 80px;
    margin: 0 auto;
  }
}
</style>
