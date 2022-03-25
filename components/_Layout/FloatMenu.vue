<template>
  <div class="float-menu-warp">
    <a class="iconfont icon-dashboard animate__animated animate__heartBeat animate__infinite" target="_blank" href="/dashboard"></a>
    <el-popover placement="left" width="200" trigger="click" :visible-arrow="false">
      <i class="iconfont icon-wechat-qun" slot="reference"></i>
      <img class="contact-image" src="@/assets/image/author-wechat.png">
    </el-popover>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.float-menu-warp {
  position: fixed;
  right: 20px;
  bottom: 15vh;

  .iconfont {
    @include fontColor('color-text');
    @include border('border-base');
    @include borderColor('color-text');

    margin-bottom: 20px;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      @include fontColor('color-primary');
      @include borderColor('color-primary');
    }
  }
}

.contact-image {
  width: 100%;
}
</style>
