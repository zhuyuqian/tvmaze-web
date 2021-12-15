<template>
  <nuxt-link class="animate__animated animate__fadeInUp card-item common-card" :class="{[`delay-${delay}`]:true}"
             :to="`/network/${info.networkId}`" :title="info.networkName">
    <div class="cover-box">
      <image-plus :src="info.networkCoverImgUrl"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.networkName }}</div>
    </div>
  </nuxt-link>
</template>

<script>
import ImagePlus from "@/components/ImagePlus";

export default {
  components: {ImagePlus},
  props: {
    delay: {type: Number, default: 0},
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
