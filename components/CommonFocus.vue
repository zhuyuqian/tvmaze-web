<template>
  <content-warp size="small" name="关注我呀😄" more-link="/contact" more-text="更多方式" v-if="false">
    <div class="common-focus">
      <el-popover placement="bottom">
        <div slot="reference" class="focus-item">
          <i class="iconfont icon-douyin"></i>
          <p class="name">抖音号</p>
          <p class="text">tvwhat</p>
        </div>
        <div class="focus-image">
          <image-plus src="https://s4.ax1x.com/2022/01/02/Toruzn.png"></image-plus>
        </div>
      </el-popover>
      <el-popover placement="bottom">
        <div slot="reference" class="focus-item">
          <i class="iconfont icon-wechat-video"></i>
          <p class="name">视频号</p>
          <p class="text">预告片、短片剪辑</p>
        </div>
        <div class="focus-image">
          <image-plus src="https://s4.ax1x.com/2022/01/01/T57qbQ.png"></image-plus>
        </div>
      </el-popover>
      <el-popover placement="bottom">
        <div slot="reference" class="focus-item">
          <i class="iconfont icon-wechat-qun"></i>
          <p class="name">微信交流群</p>
          <p class="text">一起追剧吧</p>
        </div>
        <div class="focus-image">
          <image-plus src="https://s4.ax1x.com/2022/01/01/T5bxXT.png"></image-plus>
        </div>
      </el-popover>

    </div>
  </content-warp>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.common-focus {
  display: flex;
  justify-content: space-around;

  .focus-item {
    text-align: center;
    cursor: pointer;

    .iconfont {
      font-size: 40px;
      @include fontColor('color-primary')
    }

    .name {
      font-size: 13px;
      @include fontColor('color-title')
    }

    .text {
      font-size: 12px;
      @include fontColor('color-text')
    }
  }
}

.focus-image {
  width: 200px;
  height: 200px;
}
</style>
