<!--首页-->
<template>
  <div class="page-box">
    <content-warp :name="$t('Will Return')" more-link="/show">
      <el-row :gutter="15">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" v-for="(show,index) of willReturnShowList" :key="show.showId">
          <show-item :info="show" class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
        </el-col>
      </el-row>
    </content-warp>
    <content-warp :name="$t('Hot')" more-link="/show">
      <el-row :gutter="15">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" v-for="(show,index) of hotShowList" :key="show.showId">
          <show-item :info="show" class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
        </el-col>
      </el-row>
    </content-warp>
  </div>
</template>

<script>


export default {
  data() {
    return {
      scheduleList: [],
      willReturnShowList: [], // 即将回归
      hotShowList: [], // 热门
      actives: [0]
    }
  },
  computed: {
    showScheduleList() {
      return this.scheduleList.filter(schedule => {
        let day = this.$dayjs().format('YYYY-MM-DD');
        return this.$dayjs().isBefore(this.$dayjs(day + ' ' + schedule.hours))
      })
    }
  },
  async asyncData({app}) {
    let [
      {data: {data: willReturnShowList}},
      {data: {data: hotShowList}},
    ] = await Promise.all([
      app.$axios.get('/show/listByWillReturn'),
      app.$axios.get('/show/listByHot')
    ])
    return {
      willReturnShowList,
      hotShowList
    }
  }
}
</script>

<style lang="scss" scoped>
.page-box {

}
</style>
