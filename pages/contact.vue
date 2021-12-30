<template>
  <div class="page-box" :class="{mobile:$store.getters.IS_MOBILE}">
    <h1 class="page-title">{{ $dic.logoText }} 联系</h1>
    <p class="page-desc">因为热爱，我们才能相遇</p>
    <el-row class="contact-box" :gutter="15">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(qun,index) of qunList" :key="qun.qunId">
        <qun-item :info="qun" :delay="index"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import QunItem from "@/components/Contact/QunItem";

export default {
  components: {QunItem},
  head() {
    return {
      title: `联系 - ${this.$dic.logoText}`
    }
  },
  data() {
    return {
      qunList: []
    }
  },
  async asyncData({app}) {
    let {data: {data: qunList}} = await app.$axios.get('/qun/list');
    return {qunList}
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

  .contact-box {
    margin-top: 50px;
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

    .contact-box {
      margin-top: 30px;
    }
  }
}
</style>
