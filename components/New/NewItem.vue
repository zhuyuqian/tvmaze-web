<template>
  <a class="animate__animated animate__fadeInUp common-card list" :class="{[`delay-${delay}`]:true}"
     :target="info.type==='INSTATION'?'':'_blank'" :title="info.title"
     :href="info.type==='INSTATION'?`/new/${info.id}`:info.originalLink">
    <div class="cover-box" v-if="cover && info.cover">
      <image-plus :src="info.cover"/>
    </div>
    <div class="info-box">
      <div class="other-box">
        <span>{{ $dayjs(info.publishTime).format('YYYY-MM-DD') }}</span>
        <span>{{ info.categoryName }}</span>
      </div>
      <div class="name-box pub-ellipsis-1">{{ info.title }}</div>
      <div class="summary-box pub-ellipsis-1">{{ info.publishUser }} · {{ info.abstract }}</div>
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
    width: 150px;
    height: 100px;
  }
}
</style>
