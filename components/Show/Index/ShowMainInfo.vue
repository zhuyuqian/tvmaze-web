<template>
  <div class="show-main-info" :class="{mobile:$store.getters.IS_MOBILE}">
    <div class="banner-warp" v-if="showImageList.length">
      <div class="banner-box" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="image of showImageList" :key="image.imageId">
            <img class="background-image" :src="image.imageOriginal"/>
          </div>
        </div>
      </div>
    </div>
    <div class="show-summary" v-html="info.showSummary"></div>
    <div class="jump-web-site">
      <a class="item" v-for="website of info.webSites" :key="website.link" :href="website.link" target="_blank">
        <img class="site-image" :src="website.logo"/>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    info: {type: Object, required: true},
    imageList: {type: Array, default: () => []}
  },
  computed: {
    showExternals() {
      return JSON.parse(this.info.showExternals || null);
    },
    showImageList() {
      return this.imageList.filter(item => item.imageType === 'background')
    }
  },
  methods: {
    initSwiper() {
      if (!this.showImageList.length) return;
      new Swiper(this.$refs['swiper'], {autoplay: true, disableOnInteraction: false, loop: true})
    },
  },
  mounted() {
    this.initSwiper()
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-main-info {
  width: 80%;
  margin: 30px auto;
  overflow: hidden;

  .banner-warp {
    float: left;
    margin: 0 20px 4px 0;
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
        height: 250px;
        object-fit: cover;
      }
    }
  }

  .show-summary {
    font-size: 14px;
    line-height: 28px;
    @include fontColor('color-text');

    ::v-deep p {
      text-indent: 28px;
    }
  }

  .jump-web-site {
    margin-top: 10px;
    text-align: center;

    .item {
      display: inline-block;
      margin-right: 5px;

      .site-image {
        width: 35px;
        height: 35px;
        padding: 4px;
        object-fit: contain;
        filter: grayscale(100%);
        cursor: pointer;
        border-radius: 50%;
        @include border('border-base');
        transition: all 0.2s;

        &:hover {
          @include borderColor('color-primary');
          filter: grayscale(0);
        }
      }
    }


  }

  &.mobile {
    width: 100%;
    margin-top: 0;

    .banner-warp {
      float: none;
      width: 100%;
    }

    .show-summary {
      float: none;
      margin-top: 10px;
    }

    .jump-web-site {
      text-align: center;
    }
  }
}

</style>
