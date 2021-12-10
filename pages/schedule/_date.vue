<template>
  <content-warp name="时间表">
    <schedule-date slot="rt" v-model="pageInfo.date" @change="searchInfoChange"/>
    <el-row :gutter="15">
      <el-col :span="2" class="stick-top">
        <content-warp size="small" name="定位">
          <schedule-time-list :list="pageInfo.list" :active="currentHours" @jump="jump"/>
        </content-warp>
      </el-col>
      <el-col :span="22">
        <content-warp :ref="item.hours" v-for="item of pageInfo.list" :name="item.hours" :key="item.hours" size="small">
          <el-row :gutter="15">
            <el-col :span="6" v-for="(show,index) of item.showList" :key="show.showId">
              <schedule-item :info="show" class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
            </el-col>
          </el-row>
        </content-warp>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>

export default {
  data() {
    return {
      currentHours: null,
      pageInfo: {}
    }
  },
  methods: {
    jump(hours) {
      let scrollTop = this.$refs[hours][0].$el.offsetTop + 130;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth"
      })
    },
    searchInfoChange(name, value) {
      this.$router.push({path: `/schedule/${value}`})
    },
    computedTopHeight() {
      let screenTop = document.documentElement.scrollTop || document.body.scrollTop;
      for (let i = 0; i < this.pageInfo.list.length; i++) {
        let curr = this.pageInfo.list[i];
        let next = this.pageInfo.list[i + 1];
        if (!next) {
          this.currentHours = curr.hours;
        } else {
          if (screenTop < this.$refs[next.hours][0].$el.offsetTop && screenTop >= this.$refs[curr.hours][0].$el.offsetTop) {
            this.currentHours = curr.hours;
            break
          }
        }
      }
    },
    initScrollEvent() {
      this.computedTopHeight();
      let handle = () => {
        this.computedTopHeight();
      }
      window.addEventListener('scroll', handle);
      this.$on('hook:beforeDestroy', () => {
        window.removeEventListener('scroll', handle);
      })
    },
  },
  mounted() {
    this.initScrollEvent();
  },
  async asyncData({app, params}) {
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/schedule/list', {params: params}),
    ])
    return {
      pageInfo,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
