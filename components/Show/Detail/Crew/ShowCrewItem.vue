<template>
  <div class="show-cast-item common-card">
    <div class="cover-box">
      <image-plus :src="info.peopleImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="info.peopleName">{{ info.peopleName }}</div>
      <div class="other-box " :title="info.crewType">职责：{{ $t(`people.crew.${info.crewType}`) }}</div>
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
