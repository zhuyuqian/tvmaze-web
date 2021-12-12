<template>
  <div class="banner-warp" v-if="showList.length">
    <div class="banner-box" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image of showList" :key="image.imageId">
          <img class="background-image" :src="image.imageOriginal"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {type: Array, default: () => []}
  },
  computed: {
    showList() {
      return this.list.filter(item => {
        return item.imageType === 'background'
      })
    }
  },
  methods: {
    initSwiper() {
      if (!this.showList.length) return;
      new Swiper(this.$refs['swiper'], {
        autoplay: true,
        disableOnInteraction: false,
        loop: true
      })
    },
  },
  mounted() {
    this.initSwiper();
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.banner-warp {
  width: 50%;
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
  @include backgroundColor('color-card-background');
  @include border('border-base');

  .banner-box {
    overflow: hidden;
    font-size: 0;

    .background-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
}
</style>
