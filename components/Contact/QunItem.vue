<template>
  <a class="animate__animated animate__fadeInLeft common-card" :href="href" :target="target" @click="clickHandle">
    <i class="qun-icon" :class="icon"></i>
    <p class="name">{{ info.qunName }}</p>
    <p class="status" :class="{full:info.qunIsFull}">{{ info.qunIsFull ? '已满员' : '未满员' }}</p>
  </a>
</template>

<script>
export default {
  props: {
    delay: {type: Number, default: 0},
    info: {type: Object, required: true}
  },
  computed: {
    target() {
      if (this.info.qunIsFull || this.info.qunPlatform === 'WECHAT') return null;
      return '_blank';
    },
    href() {
      if (this.info.qunPlatform === 'QQ' && !this.info.qunIsFull && this.info.qunHref) return this.info.qunHref;
      return 'javascript:void 0';
    },
    icon() {
      if (this.info.qunPlatform === 'QQ') return 'iconfont icon-qq-qun';
      if (this.info.qunPlatform === 'WECHAT') return 'iconfont icon-wechat-qun';
    }
  },
  methods: {
    clickHandle() {
      if (this.info.qunPlatform === 'WECHAT' && !this.info.qunIsFull) {
        const h = this.$createElement;
        this.$msgbox({
          title: '加入',
          message: h('img', {
            style: {width: '100%'},
            attrs: {src: this.info.qunQrCover}
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.qun-icon {
  font-size: 60px;
}

.name {
  margin-top: 40px;
  font-size: 16px;
  @include fontColor('color-title');
}

.status {
  margin-top: 10px;
  font-size: 13px;
  @include fontColor('color-text');

  &.full {
    @include fontColor('color-disabled');
  }
}
</style>
