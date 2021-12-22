<template>
  <!--移动-->
  <div class="show-episode-page" v-if="$store.getters.IS_MOBILE">
    <content-warp size="small" name="当前季" v-if="seasonInfo && seasonList.length>1">
      <season-item :info="seasonInfo"/>
    </content-warp>
    <content-warp v-if="seasonInfo && episodeInfo"
                  :name="`S${seasonInfo.seasonNo} E${episodeInfo.episodeNo||''} ${seasonInfo.seasonName} ${episodeInfo.episodeName}`">
      <content-warp name="本集简介" size="small">
        <div class="episode-summary" v-html="episodeInfo.episodeSummary"></div>
      </content-warp>
      <content-warp v-if="pre" name="上一集" size="small">
        <episode-item :info="pre"/>
      </content-warp>
      <content-warp v-if="next" name="下一集" size="small">
        <episode-item :info="next"/>
      </content-warp>
    </content-warp>
    <data-empty v-else></data-empty>
  </div>
  <!--PC-->
  <el-row class="show-episode-page" :gutter="15" v-else>
    <el-col :xs="15" :sm="15" :md="16" :lg="18" :xl="18">
      <content-warp v-if="seasonInfo && episodeInfo"
                    :name="`S${seasonInfo.seasonNo} E${episodeInfo.episodeNo||''} ${seasonInfo.seasonName} ${episodeInfo.episodeName}`">
        <el-row :gutter="15">
          <el-col :span="24">
            <content-warp name="本集简介" size="small">
              <div class="episode-summary" v-html="episodeInfo.episodeSummary"></div>
            </content-warp>
          </el-col>
          <el-col :span="12" v-if="pre">
            <content-warp name="上一集" size="small">
              <episode-item :info="pre"/>
            </content-warp>
          </el-col>
          <el-col :span="12" v-if="next">
            <content-warp name="下一集" size="small">
              <episode-item :info="next"/>
            </content-warp>
          </el-col>
        </el-row>
      </content-warp>
      <data-empty v-else></data-empty>
    </el-col>
    <el-col class="stick-top" :xs="9" :sm="9" :md="8" :lg="6" :xl="6">
      <content-warp size="small" name="当前季" v-if="seasonInfo && seasonList.length>1">
        <season-item :info="seasonInfo"/>
      </content-warp>
    </el-col>
  </el-row>
</template>

<script>
import seasonPage from "@/mixins/seasonPage";

export default {
  mixins: [seasonPage],
  computed: {
    episodeIndex() {
      if (!this.episodeInfo || !this.episodeList.length) return null;
      for (let i = 0; i < this.episodeList.length; i++) {
        if (this.episodeList[i].episodeId === this.episodeInfo.episodeId) {
          return i;
        }
      }
      return null
    },
    next() {
      if (this.episodeIndex === null || this.episodeIndex === 0) return;
      return this.episodeList[this.episodeIndex - 1]
    },
    pre() {
      if (this.episodeIndex === null || this.episodeIndex === this.episodeList.length - 1) return;
      return this.episodeList[this.episodeIndex + 1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.show-episode-page {
  .episode-summary {
    font-size: 14px;
    line-height: 24px;
    @include fontColor('color-title');

    ::v-deep p {
      text-indent: 26px;
      line-height: 28px;
    }
  }
}
</style>
