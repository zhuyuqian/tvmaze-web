<template>
  <div class="content-warp" :class="{[size]:true}">
    <div class="title-warp">
      <div class="name-box">
        {{ name }}
        <div class="desc" v-if="desc">({{ desc }})</div>
      </div>
      <span class="rt" v-if="moreLink||$slots.rt">
        <nuxt-link v-if="moreLink" class="more" :to="moreLink">
          {{ moreText || $t('More') }}<i class="iconfont icon-more"></i></nuxt-link>
        <slot v-if="$slots.rt" name="rt"></slot>
      </span>
    </div>
    <div class="content-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String, default: ''},
    desc: {type: [String, Number], default: ''},
    moreLink: {type: String, default: ''},
    moreText: {type: String, default: ''},
    size: {type: String, default: 'big'}
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.content-warp {
  margin-bottom: 20px;

  .title-warp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include backgroundColor('color-page-background');

    .name-box {
      .desc {
        display: inline-block;
        font-size: 14px;
        @include fontColor("color-text");
      }
    }

    .rt {
      display: flex;
      align-items: center;

      .more {
        font-size: 12px;
        display: flex;
        align-items: center;

        .iconfont {
          font-size: 12px;
        }
      }
    }
  }

  &.big {

    .title-warp {
      margin-bottom: 20px;

      .name-box {
        font-size: 24px;
        @include fontColor("color-title");
      }
    }
  }

  &.small {
    .title-warp {
      margin-bottom: 10px;

      .name-box {
        font-size: 14px;
        @include fontColor("color-text");
      }
    }
  }
}
</style>
