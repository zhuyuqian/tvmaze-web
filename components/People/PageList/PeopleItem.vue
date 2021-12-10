<template>
  <div class="people-box common-card">
    <div class="cover-box">
      <image-plus :src="info.peopleImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.peopleName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {type: Object, required: true},
  }
}
</script>

<style lang="scss" scoped>
.people-box {
  .cover-box {
    width: 100%;
    height: 200px;
  }
}
</style>
