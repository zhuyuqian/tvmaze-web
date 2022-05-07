<!--更新日志-->
<template>
  <nuxt-layout>
    <div class="page" :class="{mobile:IS_MOBILE}">
      <h1 class="page-title">{{ LOGO_TEXT }} 优化记录</h1>
      <p class="page-desc">了解 {{ LOGO_TEXT }} 在改进用户体验的过程中做了哪些努力</p>
      <el-steps direction="vertical" class="logs-warp">
        <el-step v-for="log of logList.data" :title="log.logTitle" :key="log.logId" icon="alarmClock">
          <template #description>
            <div class="log-box">
              <p class="desc-box">{{ log.logDesc }}</p>
              <p class="time-box">{{ $dayjs(log.logTime).format('YYYY-MM-DD') }}</p>
              <div class="log-html" v-html="log.logHtml"></div>
            </div>
          </template>
        </el-step>
      </el-steps>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import {useStore} from "../stores";

const {$dayjs} = useUtil();
const {IS_MOBILE} = useStore();
const {LOGO_TEXT} = useDictionary();
changeHead('优化记录');

const {data: logList} = await useFetch('/api/log/list');
</script>

<style lang="scss" scoped>
.page {
  padding: 50px 0;

  .page-title {
    text-align: center;
    color: var(--color-font-title);
  }

  .page-desc {
    margin-top: 20px;
    text-align: center;
    color: var(--color-font-text);
  }

  :deep(.logs-warp) {
    width: 40%;
    margin: 0 auto;
    padding: 50px 0;

    .el-step__head {
      .el-step__line {
        border: var(--border-base);
      }

      .el-step__icon {
        color: var(--color-font-text);
        background: var(--color-background-page);
      }
    }

    .el-step__main {
      padding-left: 20px;

      .el-step__title {
        color: var(--color-font-title);
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
        color: var(--color-font-text);
      }

      .desc-box {
        margin-top: 6px;
        font-size: 14px;
        color: var(--color-font-text);
      }

      .log-html {
        margin-top: 10px;

        ul {
          margin-top: 4px;
          margin-left: 20px;
          font-size: 14px;

          li {
            line-height: 28px;
            color: var(--color-font-title);
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
          border: var(--border-base);
          background: var(--color-background-card);
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

    :deep(.logs-warp) {
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
