<template>
  <div class="page-box">
    <h1>{{ $dic.logoText }} - 为追剧而生</h1>
    <p>提供各类剧集资讯、更新信息、播放时间表、追剧时间线。</p>
    <div class="main-box">
      <p>如果你是追剧爱好者，如果你最近剧慌</p>
      <p>欢迎加入这里！</p>
      <br/>
      <p>在<span>{{ $dic.logoText }}</span></p>
      <p>你可以找到各式各样的剧集信息</p>
      <br/>
      <p>有你爱的~</p>
      <p>有类似你爱的~</p>
      <br/>
      <p>还有更多功能在开发中</p>
      <p>说不定还能找到更多一起追剧的小伙伴哦！</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.page-box {
  padding: 50px 0;
  text-align: center;
  @include fontColor('color-text');

  .main-box {
    width: 50%;
    margin: 30px auto 0;
    padding: 50px;
    border-radius: 10px;
    @include backgroundColor('color-card-background');

    p {
      font-size: 20px;
      margin-bottom: 26px;

      span {
        font-weight: bold;
        @include fontColor('color-primary');
      }

      &:last-child {
        margin-bottom: 0
      }
    }
  }
}
</style>
