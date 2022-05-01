<template>
  <div class="tvmaze-page">
    <div :class="{'pc-model':!IS_MOBILE}">
      <common-header-control/>
      <common-header-nav/>
      <div class="container">
        <slot/>
      </div>
      <common-footer-warp/>
      <common-float-menu/>
    </div>
    <div v-if="!IS_MOBILE" class="pc-tooltip">
      <h1>哇，窗口太小啦</h1>
      <p>请调整浏览器窗口大小或者请使用手机查看！</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "../stores";

const {IS_MOBILE} = useStore();
</script>

<style lang="scss" scoped>
.tvmaze-page {
  .container {
    padding-top: 25px;
  }

  .pc-tooltip {
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    display: none;
    color: var(--color-font-text);

    h1 {
      margin: 0;
    }

    p {
      margin-top: 10px;
    }
  }
}
</style>
