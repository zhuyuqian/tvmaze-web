<template>
  <div class="show-page-nav stick-top">
    <span v-for="(menu,key) of menus" :key="key" :class="{active:key===current}" @click="jump(key)">
      {{ $t(menu) }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: {
        main: "Main",
        season: 'Season',
        cast: "Cast",
        crew: "Crew",
        image: "Image"
      },
      current: 'main',

    }
  },
  methods: {
    jump(menu) {
      window.scrollTo({
        top: menu === "main" ? 0 : this.$parent.$refs[menu].$el.offsetTop - 100,
        behavior: "smooth"
      })
    },
    computedScroll() {
      let season = this.$parent.$refs['season'].$el.offsetTop - 100;
      let crew = this.$parent.$refs['crew'].$el.offsetTop - 100;
      let cast = this.$parent.$refs['cast'].$el.offsetTop - 100;
      let image = this.$parent.$refs['image'].$el.offsetTop - 100;
      let nameArr = ['main', 'season', 'cast', 'crew', 'image'];
      let scrollArr = [0, season, cast, crew, image];
      let screenTop = document.documentElement.scrollTop || document.body.scrollTop;
      for (let i = 0; i < scrollArr.length; i++) {
        let curr = scrollArr[i];
        let next = scrollArr[i + 1];
        if (!next) {
          this.current = nameArr[i];
        } else {
          if (screenTop < next && screenTop >= curr) {
            this.current = nameArr[i];
            break
          }
        }
      }
    },
    initEvent() {
      let handle = () => {
        this.computedScroll();
      }
      window.addEventListener('scroll', handle);
      this.$on('hook:beforeDestroy', () => {
        window.removeEventListener('scroll', handle)
      })

    }
  },
  mounted() {
    this.initEvent();
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-page-nav {
  padding: 20px;
  text-align: center;
  z-index: 3;
  top: 0;
  @include backgroundColor('color-page-background');

  span {
    font-size: 14px;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    @include fontColor('color-title');

    &:hover {
      @include fontColor('color-primary-light');
    }

    &.active {
      @include fontColor('color-primary');
    }
  }
}
</style>
