<template>
  <div class="show-season-page" v-if="$store.getters.IS_MOBILE">
    <content-warp v-if="seasonInfo" :name="`S${seasonInfo.seasonNo} ${seasonInfo.seasonName}`">
      <template v-if="seasonInfo.seasonPremiere">
        <span slot="rt" class="el-icon-date">开播：{{ $dayjs(seasonInfo.seasonPremiere).format('YYYY-MM-DD') }}</span>
        <span slot="rt" class="el-icon-date">季终：{{ $dayjs(seasonInfo.seasonEnd).format('YYYY-MM-DD') }}</span>
      </template>
      <content-warp name="单季简介" size="small" v-if="seasonInfo.seasonSummary">
        <div class="season-summary" v-html="seasonInfo.seasonSummary"></div>
      </content-warp>
      <content-warp name="剧集列表" size="small">
        <episode-item v-for="(episode,index) of episodeList" :key="episode.episodeId" :delay="index" :info="episode"/>
      </content-warp>
    </content-warp>
    <data-empty v-else></data-empty>
    <content-warp size="small" :name="`共${seasonList.length}季`">
      <season-item v-for="season of seasonList" :key="season.seasonId" :info="season"
                   :class="{'active':seasonInfo&&seasonInfo.seasonNo===season.seasonNo}"/>
    </content-warp>
  </div>
  <!--PC-->
  <el-row v-else class="show-season-page" :gutter="15">
    <el-col :xs="15" :sm="15" :md="16" :lg="18" :xl="18">
      <content-warp v-if="seasonInfo" :name="`S${seasonInfo.seasonNo} ${seasonInfo.seasonName}`">
        <template v-if="seasonInfo.seasonPremiere">
          <span slot="rt" class="el-icon-date">开播：{{ $dayjs(seasonInfo.seasonPremiere).format('YYYY-MM-DD') }}</span>
          <span slot="rt" class="el-icon-date">季终：{{ $dayjs(seasonInfo.seasonEnd).format('YYYY-MM-DD') }}</span>
        </template>
        <content-warp name="单季简介" size="small" v-if="seasonInfo.seasonSummary">
          <div class="season-summary" v-html="seasonInfo.seasonSummary"></div>
        </content-warp>
        <content-warp name="剧集列表" size="small">
          <episode-item v-for="(episode,index) of episodeList" :key="episode.episodeId" :delay="index" :info="episode"/>
        </content-warp>
      </content-warp>
      <data-empty v-else></data-empty>
    </el-col>
    <el-col class="stick-top" :xs="9" :sm="9" :md="8" :lg="6" :xl="6">
      <content-warp size="small" name="当前季" v-if="seasonInfo && seasonList.length>1">
        <season-item :info="seasonInfo"/>
      </content-warp>
      <content-warp size="small" :name="`共${seasonList.length}季`">
        <season-item v-for="season of seasonList" :key="season.seasonId" :info="season"
                     :class="{'active':seasonInfo&&seasonInfo.seasonNo===season.seasonNo}"/>
      </content-warp>
    </el-col>
  </el-row>
</template>

<script>
import seasonPage from "@/mixins/seasonPage";

export default {
  head() {
    if (!this.seasonInfo) {
      return {
        title: `${this.showInfo.showName} - 全部剧集 - ${this.$dic.logoText}`
      }
    } else {
      return {
        title: `${this.showInfo.showName} - S${this.seasonInfo.seasonNo} ${this.seasonInfo.seasonName} - ${this.$dic.logoText}`
      }
    }
  },
  mixins: [seasonPage],
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.show-season-page {
  .el-icon-date {
    font-size: 12px;
    margin-left: 15px;
    @include fontColor('color-text');

    &:before {
      margin-right: 4px;
    }
  }

  .season-summary {
    font-size: 13px;
    line-height: 24px;
    @include fontColor('color-title');

    ::v-deep p {
      text-indent: 26px;
      line-height: 28px;
    }
  }
}
</style>
