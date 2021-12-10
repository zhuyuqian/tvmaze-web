<template>
  <nuxt-link class="card-item common-card" :to="`/network/${info.networkId}`" :title="info.networkName">
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
