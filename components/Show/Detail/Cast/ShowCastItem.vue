<template>
  <div class="show-cast-item common-card">
    <div class="cover-box">
      <image-plus :src="info.characterImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="info.characterName">{{ info.characterName }}</div>
      <div class="other-box pub-ellipsis-1" :title="info.peopleName">演员：{{ info.peopleName }}</div>
    </div>
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
.show-cast-item {
  .cover-box {
    width: 100%;
    height: 190px;
  }

  .info-box {
    .name-box {
      margin-top: 4px;
    }
  }
}
</style>
