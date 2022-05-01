<template>
  <div class="float-menu-warp">
    <a class="iconfont icon-dashboard animate__animated animate__heartBeat animate__infinite" target="_blank"
       href="/dashboard"></a>
    <el-popover placement="left" width="200" trigger="click" :visible-arrow="false">
      <template #reference>
        <i class="iconfont icon-wechat-qun"></i>
      </template>
      <img class="contact-image" src="@/assets/image/author-wechat.png">
    </el-popover>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.float-menu-warp {
  position: fixed;
  right: 20px;
  bottom: 15vh;

  .iconfont {
    color: var(--color-font-title);
    border: var(--border-base);
    border-color: var(--color-font-text);
    margin-bottom: 20px;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
}

.contact-image {
  width: 150px
}
</style>
