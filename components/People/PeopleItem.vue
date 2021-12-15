<template>
  <nuxt-link class="animate__animated animate__fadeInUp people-box common-card"
             :to="`/${jump}/${jumpId}`" :class="{card:card,list:!card,[`delay-${delay}`]:true}">
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
    delay: {type: Number, default: 0},
    card: {type: Boolean, default: false},
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
