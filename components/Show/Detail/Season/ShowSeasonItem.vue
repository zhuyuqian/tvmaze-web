<template>
  <div class="show-season-item common-card" :class="{[shape]:true,active:isActive}" @click="$emit('open-episode',info)">
    <div class="cover-box">
      <image-plus :src="info.seasonImageMedium"/>
    </div>
    <div class="info-box">
      <div class="name-box pub-ellipsis-1">S{{ info.seasonNo }}</div>
      <div class="other-box pub-ellipsis-1">
        <span class="el-icon-date">{{ $dayjs(info.seasonPremiere).format('YYYY-MM-DD') }}</span></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    isActive: {type: Boolean, default: false},
    shape: {type: String, default: 'card'},
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-season-item {
  .info-box {
    .name-box {
      margin-top: 6px;
      line-height: 24px;
    }
  }


  &.card {
    .cover-box {
      width: 100%;
      height: 200px;
    }

    .info-box {
      .name-box {
        font-size: 15px;
      }
    }
  }

  &.list {
    display: flex;

    .cover-box {
      width: 60px;
      height: 80px;
    }

    .info-box {
      flex: 1;
      overflow: hidden;
      margin-left: 20px;

      .name-box {
        font-size: 16px;
      }
    }
  }
}
</style>
