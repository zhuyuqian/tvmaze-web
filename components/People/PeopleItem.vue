<template>
  <nuxt-link :to="`/${jump}/${jumpId}`" class="people-box common-card">
    <div class="cover-box">
      <image-plus :src="cover"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1" :title="title">{{ title }}</div>
      <div class="desc-box pub-ellipsis-1" :title="desc">{{ desc }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    jump: {type: String, default: 'people'},
    jumpId: {type: Number, required: true},
    cover: {type: String, default: ''},
    title: {type: String, default: ''},
    desc: {type: String, default: ''},
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
