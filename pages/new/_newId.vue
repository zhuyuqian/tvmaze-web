<template>
  <div class="new-page" :class="{mobile:$store.getters.IS_MOBILE}">
    <div class="name-warp">
      <h1>{{ newInfo.newTitle }}</h1>
      <p>{{ newInfo.newAbstract }}</p>
    </div>
    <el-row :gutter="15" v-if="!$store.getters.IS_MOBILE">
      <el-col :xs="15" :sm="15" :md="17" :lg="18" :xl="18">
        <div class="new-content-warp">
          <div class="info-box">
            <span>{{ newInfo.newPublishUser }} 发布于 {{ $dayjs(newInfo.newPublishTime).format('YYYY-MM-DD') }}</span>
            <a v-if="newInfo.newOriginalLink" :href="newInfo.newOriginalLink" target="_blank">查看原文</a>
          </div>
          <new-content :html="newInfo.newHtml" :show-list="newInfo.showList"/>
        </div>
      </el-col>
      <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="6" class="stick-top">
        <content-warp name="相关节目" size="small">
          <show-item v-for="show of newInfo.showList" shape="list" :key="show.showId" :info="show"/>
        </content-warp>
      </el-col>
    </el-row>
    <div v-else class="new-content-warp">
      <div class="info-box">
        <span>{{ newInfo.newPublishUser }} 发布于 {{ $dayjs(newInfo.newPublishTime).format('YYYY-MM-DD') }}</span>
        <a v-if="newInfo.newOriginalLink" :href="newInfo.newOriginalLink" target="_blank">查看原文</a>
      </div>
      <new-content :html="newInfo.newHtml" :show-list="newInfo.showList"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newInfo: {}
    }
  },
  async asyncData({app, params}) {
    let {newId} = params;
    let [
      {data: {data: newInfo}},
    ] = await Promise.all([
      app.$axios.get('/new/info', {params: {newId}}),
    ])
    return {
      newInfo,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.new-page {
  .name-warp {
    width: 80%;
    margin: 20px auto 0;
    @include fontColor('color-title');

    h1 {
      font-size: 46px;
      @include fontColor('color-title');

      &:hover {
        animation: text-animate 0.5s linear infinite;
      }
    }

    p {
      margin: 10px auto 0;
      font-size: 14px;
      @include fontColor('color-text');
    }
  }

  .new-content-warp {
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 30px;
    line-height: 30px;
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    @include fontColor('color-text');
    @include backgroundColor('color-card-background');
    @include border('border-base');

    .info-box {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-bottom: 30px;
      @include fontColor('color-text');
    }

    ::v-deep .new-p {
      text-indent: 20px;
      margin: 10px 0 15px;
      font-size: 16px;
    }

    ::v-deep .new-show {
      width: 200px;
      margin: 0 auto;
    }
  }

  &.mobile {
    .name-warp {
      margin: 0;
      width: 100%;

      h1 {
        font-size: 30px;
      }
    }

    .new-content-warp {
      margin-top: 15px;
      padding: 10px;
      background: none;

      .info-box {
        margin-bottom: 15px;
      }

      ::v-deep .new-p {
        text-indent: 20px;
        font-size: 14px;
      }

      ::v-deep .new-show {
        width: 100%;
      }
    }
  }
}
</style>
