<template>
  <div class="page-box">
    <h1>TvMaze.cn 追剧日记 为追剧而生</h1>
    <p>剧集资讯、更新信息、播放时间表、追剧时间线、片单推荐</p>
    <div class="main-box">
      <p>如果你是追剧爱好者</p>
      <p>如果你不知道最近有什么好看的剧</p>
      <p>欢迎加入这里！</p>
      <br/>
      <p>在这里</p>
      <p>你可以找到各式各样的剧集信息</p>
      <br/>
      <p>有你爱的~</p>
      <p>有类似你爱的~</p>
      <br/>
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
      margin-bottom: 15px;

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
