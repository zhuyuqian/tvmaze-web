<template>
  <a class="animate__animated animate__fadeInUp common-card list" :class="{[`delay-${delay}`]:true}"
     :target="info.newType==='INSTATION'?'':'_blank'"
     :href="info.newType==='INSTATION'?`/new/${info.newId}`:info.newOriginalLink">
    <div class="cover-box" v-if="cover && info.newCover">
      <image-plus :src="info.newCover"/>
    </div>
    <div class="info-box">
      <div class="other-box">
        <span>{{ $dayjs(info.newPublishTime).format('YYYY-MM-DD') }}</span>
        <span>{{ info.newPublishUser }}</span>
      </div>
      <div class="name-box pub-ellipsis-1">{{ info.newTitle }}</div>
      <div class="summary-box pub-ellipsis-2">{{ info.categoryName }} · {{ info.newAbstract }}</div>
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
