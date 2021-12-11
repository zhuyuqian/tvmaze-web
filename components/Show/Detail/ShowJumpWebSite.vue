<template>
  <div class="jump-web-site">
    <el-tooltip content="如需查看更多信息点击右侧下箭头" placement="bottom" :disabled="!showExternals">
      <a v-if="info.showOfficialSite" :href="info.showOfficialSite" class="official-web"
         :class="{'has-more':showExternals}" target="_blank">{{ $t('show.detail.WebSite') }}</a>
    </el-tooltip>
    <el-popover placement="bottom" trigger="click" class="other-web">
      <span class="el-icon-arrow-down" slot="reference"></span>
      <a class="other-web-item" v-if="showExternals.tvmaze" :href="`https://tvmaze.com/shows/${showExternals.tvmaze}`"
         target="_blank">TVmaze.com</a>
      <a class="other-web-item" v-if="showExternals.imdb" :href="`https://www.imdb.com/title/${showExternals.imdb}`"
         target="_blank">IMDb.com</a>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {info: {type: Object, required: true}},
  computed: {
    showExternals() {
      return JSON.parse(this.info.showExternals || null);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.jump-web-site {
  margin-top: 20px;
  display: flex;
  align-items: center;

  .official-web {
    padding: 12px 20px;
    border-radius: 100px;
    font-size: 14px;
    color: #fff;
    transition: 0.3s background-color;
    @include backgroundColor('color-primary-light');

    &:hover {
      @include backgroundColor('color-primary');
    }

    &.has-more {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .other-web {
    .el-icon-arrow-down {
      padding: 13px 15px 13px 10px;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      @include backgroundColor('color-primary');
    }
  }
}

.other-web-item {
  display: block;
  font-size: 14px;
  text-align: center;
  margin: 4px 0;
}
</style>
