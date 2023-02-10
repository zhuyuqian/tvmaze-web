<template>
  <a class="animate__animated animate__fadeInUp common-card list" :class="{[`delay-${delay}`]:true}"
     target="_blank" :title="info.name" :href="info.link">
    <div class="cover-box" v-if="cover && info.icon">
      <image-plus :src="info.icon" fit="contain"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">{{ info.name }}</div>
      <div class="summary-box pub-ellipsis-1">{{ info.abstract }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    delay: {type: Number, default: 0}, // 延迟
    info: {type: Object, required: true}, // 信息
    cover: {type: Boolean, default: true} // 是否展示封面
  }
}
</script>

<style lang="scss" scoped>
.list {
  .cover-box {
    width: 30px;
    height: 30px;
  }
}
</style>
