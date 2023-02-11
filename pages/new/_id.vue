<template>
  <div class="new-page mobile" v-if="$store.getters.IS_MOBILE">
    <div class="name-warp">
      <h1>{{ newInfo.title }}</h1>
      <p>{{ newInfo.categoryName }} · {{ newInfo.abstract }}</p>
    </div>
    <div class="new-content-warp">
      <div class="info-box">
        <span>{{ newInfo.publishUser }} 发布于 {{ $dayjs(newInfo.publishTime).format('YYYY-MM-DD') }}</span>
        <a v-if="newInfo.originalLink" :href="newInfo.originalLink" target="_blank">查看原文</a>
      </div>
      <new-content :html="newInfo.html" :show-list="newInfo.showList"/>
    </div>
    <content-warp name="同类动态" size="small" v-if="relatedNewList.length">
      <new-item v-for="item of relatedNewList" :key="item.id" :info="item" :cover="false"/>
    </content-warp>
  </div>
  <div class="new-page" v-else>
    <div class="name-warp">
      <h1>{{ newInfo.title }}</h1>
      <p>{{ newInfo.categoryName }} · {{ newInfo.abstract }}</p>
    </div>
    <el-row :gutter="15">
      <el-col :xs="15" :sm="15" :md="17" :lg="18" :xl="18">
        <div class="new-content-warp">
          <div class="info-box">
            <span>{{ newInfo.publishUser }} 发布于 {{ $dayjs(newInfo.publishTime).format('YYYY-MM-DD') }}</span>
            <a v-if="newInfo.originalLink" :href="newInfo.originalLink" target="_blank">查看原文</a>
          </div>
          <new-content :html="newInfo.html" :show-list="newInfo.showList"/>
        </div>
      </el-col>
      <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="6" class="stick-top">
        <common-focus/>
        <content-warp name="相关节目" size="small" v-if="newInfo.showList">
          <show-item v-for="show of newInfo.showList" shape="list" :key="show.showId" :info="show"/>
        </content-warp>
        <content-warp name="同类动态" size="small" v-if="relatedNewList.length">
          <new-item v-for="item of relatedNewList" :key="item.id" :info="item" :cover="false"/>
        </content-warp>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newInfo: {}, // 资讯详情
      relatedNewList: [] // 相关动态
    }
  },
  head() {
    return {
      title: `${this.newInfo.title} - ${this.newInfo.categoryName} - ${this.$dic.logoText}`,
      meta: [{hid: 'description', name: 'description', content: this.newInfo.abstract}]
    }
  },
  async asyncData({app, params}) {
    let {id} = params;
    let [
      {data: {data: newInfo}},
      {data: {data: relatedNewList}}
    ] = await Promise.all([
      app.$axios.get('/new/info', {params: {id}}),
      app.$axios.get('/new/related', {params: {id}})
    ])
    return {
      newInfo,
      relatedNewList
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
      line-height: 28px;
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
    }
  }
}
</style>
