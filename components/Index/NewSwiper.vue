<template>
  <div class="new-swiper" v-if="list.length">
    <div class="new-box" ref="swiper">
      <div class="swiper-wrapper">
        <nuxt-link class="swiper-slide" v-for="newInfo of list" :key="newInfo.newId" :to="`/new/${newInfo.newId}`">
          <div class="new-info">
            <h2 class="pub-ellipsis-1">{{ newInfo.newTitle }}</h2>
            <p>{{ newInfo.newAbstract }}</p>
          </div>
          <img class="background-image" :src="newInfo.newCover" alt=""/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {type: Array, default: () => []}
  },
  methods: {
    initSwiper() {
      if (!this.list.length) return;
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

.new-swiper {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 20px;
  @include backgroundColor('color-card-background');
  @include border('border-base');

  .new-box {
    font-size: 0;
    overflow: hidden;

    .swiper-wrapper {
      .swiper-slide {
        position: relative;

        .background-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .new-info {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          top: 210px;
          transition: 0.2s all;
          @include backgroundColor('color-deep-background');

          h2 {
            transition: 0.2s all;
            padding: 10px;
            text-align: center;
            font-size: 16px;
            @include fontColor('color-title');
          }

          p {
            padding: 0 10px;
            font-size: 13px;
            line-height: 26px;
            text-align: center;
            @include fontColor('color-text');
          }
        }

        &:hover {
          .new-info {
            top: 0;

            h2 {
              margin-top: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
