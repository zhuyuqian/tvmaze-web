<template>
  <div class="tvmaze-page">
    <div v-if="!$store.getters.IS_MOBILE" class="pc-tooltip">
      <h1>哇，窗口太小啦</h1>
      <p>请调整浏览器窗口大小或者请使用手机查看！</p>
    </div>
    <div :class="{'pc-model':!$store.getters.IS_MOBILE}">
      <header-control-warp/>
      <header-menu-warp/>
      <div class="container">
        <nuxt/>
      </div>
      <float-menu/>
      <footer-menu-warp/>
    </div>
  </div>
</template>
<script>
import FloatMenu from "@/components/_Layout/FloatMenu";
import HeaderControlWarp from "@/components/_Layout/HeaderControlWarp";
import HeaderMenuWarp from "@/components/_Layout/HeaderMenuWarp";
import FooterMenuWarp from "@/components/_Layout/FooterMenuWarp";

export default {
  components: {FloatMenu, HeaderControlWarp, HeaderMenuWarp, FooterMenuWarp},
  methods: {
    async consoleSelf() {
      let {data: {data}} = await this.$axios.get('/user/self');
      console.log("-----------"),
        console.log("唉呀你好呀，来自 %c" + data.address.address + " %c的朋友！", "color: #50a1ff; font-family: monoscope; font-weight: bold", ""),
        console.log("\n%c网站简单说明：\n", "font-weight: bold"),
        console.log("\n后端：ThinkJs (基于NodeJs) + MySQL\n"),
        console.log("\n前端：Nuxt.js (基于 VUE.js) + 16个 ElementUI 组件 + 手撸\n"),
        console.log("\n界面：自己瞎搞的\n"),
        console.log("\n核心：整合美剧播出资讯、片单推荐、演员、主创、高清海报快速检索\n"),
        console.log("\n建立时间：2021年12月至今\n"),
        console.groupEnd(),
        console.log("\n%c怎么联系我？\n", "font-weight: bold"),
        console.log("发邮件呀： %ctvmaze-cn@qq.com%c", "color: #65c86e; font-weight: bold", ''),
        console.groupEnd()
    }
  },
  mounted() {
    this.consoleSelf();
  }
}
</script>
<style lang="scss" scoped>
.tvmaze-page {
  .container {
    padding-top: 25px;
  }
}
</style>
