<template>
  <div class="page-box" :class="{mobile:$store.getters.IS_MOBILE}">
    <h1 class="page-title">{{ $dic.logoText }} 优化记录</h1>
    <p class="page-desc">了解 {{ $dic.logoText }} 在改进用户体验的过程中做了哪些努力</p>
    <el-steps direction="vertical" class="logs-warp">
      <el-step v-for="log of logList" :title="log.logTitle" :key="log.logId" icon="el-icon-alarm-clock">
        <div slot="description" class="log-box">
          <p class="desc-box">{{ log.logDesc }}</p>
          <p class="time-box">{{ $dayjs(log.logTime).format('YYYY-MM-DD') }}</p>
          <div class="log-html" v-html="log.logHtml"></div>
        </div>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `优化记录 - ${this.$dic.logoText}`
    }
  },
  data() {
    return {
      logList: []
    }
  },
  async asyncData({app}) {
    let {data: {data: {data: logList}}} = await app.$axios.get('/log/list', {
      params: {type: 'WEB_CHANGE', page: 1, size: 10}
    });
    return {logList}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.page-box {
  padding: 50px 0;

  .page-title {
    text-align: center;
    @include fontColor('color-title');
  }

  .page-desc {
    margin-top: 20px;
    text-align: center;
    @include fontColor('color-text');
  }

  ::v-deep .logs-warp {
    width: 40%;
    margin: 0 auto;
    padding: 50px 0;

    .el-step__head {
      .el-step__line {
        @include backgroundColor('border-color');
      }

      .el-step__icon {
        @include fontColor('color-text');
        @include backgroundColor('color-deep-background');
        @include borderColor('border-color');
      }
    }

    .el-step__main {
      padding-left: 20px;

      .el-step__title {
        @include fontColor('color-title');
      }

      .el-step__description {
        padding-right: 0;
      }
    }

    .log-box {
      width: 100%;
      padding-bottom: 40px;

      .time-box {
        position: absolute;
        left: -100px;
        top: 2px;
        font-size: 16px;
        @include fontColor('color-text')
      }

      .desc-box {
        margin-top: 6px;
        font-size: 14px;
        @include fontColor('color-text');
      }

      .log-html {
        margin-top: 10px;

        ul {
          margin-top: 4px;
          margin-left: 20px;
          font-size: 14px;

          li {
            line-height: 28px;
            @include fontColor('color-title');
          }
        }

        p {
          overflow: hidden;
        }

        img {
          box-sizing: border-box;
          display: block;
          margin-top: 10px;
          padding: 4px;
          width: 100%;
          border-radius: 4px;
          @include backgroundColor('color-card-background');
          @include border('border-base');
        }
      }
    }
  }

  &.mobile {
    padding: 0;

    .page-title {
      font-size: 20px;
    }

    .page-desc {
      margin-top: 10px;
      font-size: 14px;
    }

    ::v-deep .logs-warp {
      width: 100%;
      padding: 30px 0;

      .log-box {
        padding-bottom: 20px;

        .time-box {
          position: static;
          margin-top: 2px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
