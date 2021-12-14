<template>
  <dialog-plus :visible.sync="show" width="70%" title="图片查看" top="5vh">
    <div class="image-warp">
      <p v-if="info" class="image-info">{{ info.naturalWidth }} * {{ info.naturalHeight }}</p>
      <img class="image-original" :src="src" @load="load" ref="image">
    </div>
  </dialog-plus>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      src: '',
      info: null
    }
  },
  watch: {
    show(newValue) {
      if (!newValue) {
        this.src = '';
        this.info = null;
      }
    }
  },
  methods: {
    open(src) {
      this.src = src;
      this.show = true;
    },
    load() {
      this.info = {
        naturalWidth: this.$refs['image'].naturalWidth,
        naturalHeight: this.$refs['image'].naturalHeight,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.image-warp {
  text-align: center;

  .image-info {
    font-size: 14px;
    margin-bottom: 15px;
    @include fontColor('color-text')
  }

  .image-original {
    width: 100%;

  }
}


</style>
