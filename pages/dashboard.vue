<template>
  <div class="dashboard-warp">
    <div ref="screen" class="dashboard-box">
      <!--标题-->
      <div class="card-box title">
        <span class="shadow-text">
          {{ configInfo.TVMAZE_DASHBOARD_TITLE }}
        </span>
      </div>
      <!--统计数据-统计图-->
      <div class="card-box chart-box status-chart">
        <p class="title">状态</p>
        <div class="chart" ref="status-chart"></div>
      </div>
      <!--上线时间-统计图-->
      <div class="card-box chart-box year-chart">
        <p class="title">首播</p>
        <div class="chart" ref="year-chart"></div>
      </div>
      <!--分类数据-统计图-->
      <div class="card-box chart-box type-chart">
        <p class="title">分类</p>
        <div class="chart" ref="type-chart"></div>
      </div>
      <!--发行-统计图-->
      <div class="card-box chart-box network-chart">
        <p class="title">发行</p>
        <div class="chart" ref="network-chart"></div>
      </div>
      <!--流媒体-统计图-->
      <div class="card-box chart-box webchannel-chart">
        <p class="title">流媒体</p>
        <div class="chart" ref="webchannel-chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  layout: 'dashboard',
  components: {countTo},
  data() {
    return {
      showInfo: {},
      configInfo: {}
    }
  },
  methods: {
    initChart() {
      if (!this.statusChart) {
        this.statusChart = echarts.init(this.$refs['status-chart'], 'chalk');
      }
      this.statusChart.setOption({
        legend: {orient: 'vertical', left: 'left', bottom: 0, textStyle: {color: '#999'}},
        series: [
          {
            type: 'pie',
            radius: ['50%', '90%'],
            avoidLabelOverlap: false,
            itemStyle: {borderRadius: 6},
            label: {show: false, position: 'center'},
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                textBorderColor: '#fff',
                textBorderWidth: 4,
                lineHeight: 40,
                formatter: '{b}\n{c}({d}%)'
              }
            },
            labelLine: {show: false},
            data: this.showInfo.statusList.map(item => ({...item, name: this.$t(`show.status.${item.name}`)}))
          }
        ]
      })

      if (!this.yearChart) {
        this.yearChart = echarts.init(this.$refs['year-chart'], 'chalk');
      }
      this.yearChart.setOption({
        grid: {left: 10, right: 10, top: 10, bottom: 30, containLabel: true},
        tooltip: {trigger: 'item'},
        xAxis: {
          type: 'category',
          data: this.showInfo.premieredList.map(item => item.name)
        },
        yAxis: {type: 'value', splitLine: {show: false}},
        series: [{
          data: this.showInfo.premieredList.map(item => item.value),
          type: 'line',
          label: {show: true}
        }],
        dataZoom: [{
          type: 'slider',
          left: 10,
          right: 10,
          height: 10,
          bottom: 10,
          maxValueSpan: 15,
          minValueSpan: 15,
          brushSelect: false,
          zoomLock: true
        }]
      })

      if (!this.typeChart) {
        this.typeChart = echarts.init(this.$refs['type-chart'], 'chalk');
      }
      this.typeChart.setOption({
        legend: {orient: 'vertical', left: 'right', bottom: 0, textStyle: {color: '#999'},},
        series: [
          {
            type: 'pie',
            radius: '90%',
            itemStyle: {borderRadius: 6},
            label: {show: false, position: 'center'},
            emphasis: {
              label: {
                show: true,
                fontSize: 24,
                textBorderColor: '#fff',
                textBorderWidth: 4,
                lineHeight: 40,
                formatter: '{b}\n{c}({d}%)'
              }
            },
            labelLine: {show: false},
            data: this.showInfo.typeList.map(item => ({...item, name: this.$t(`show.type.${item.name}`)}))
          }
        ]
      })

      if (!this.networkChart) {
        this.networkChart = echarts.init(this.$refs['network-chart'], 'chalk');
      }
      this.networkChart.setOption({
        grid: {left: 10, right: 10, top: 10, bottom: 25, containLabel: true},
        xAxis: {
          type: 'category',
          data: this.showInfo.networkList.map(item => item.name),
          axisLabel: {rotate: 10, interval: 0}
        },
        yAxis: {type: 'value', splitLine: {show: false}},
        series: [{
          type: 'bar',
          data: this.showInfo.networkList.map(item => item.value),
          label: {show: true}
        }],
        dataZoom: [{
          type: 'slider',
          left: 10,
          right: 10,
          height: 10,
          bottom: 10,
          maxValueSpan: 30,
          minValueSpan: 30,
          brushSelect: false,
          zoomLock: true
        }]
      })

      if (!this.webchannelChart) {
        this.webchannelChart = echarts.init(this.$refs['webchannel-chart'], 'chalk');
      }
      this.webchannelChart.setOption({
        grid: {left: 10, right: 10, top: 10, bottom: 25, containLabel: true},
        xAxis: {
          type: 'category',
          data: this.showInfo.webChannelList.map(item => item.name),
          axisLabel: {rotate: 10, interval: 0}
        },
        yAxis: {type: 'value', splitLine: {show: false}},
        series: [{
          type: 'bar',
          data: this.showInfo.webChannelList.map(item => item.value),
          label: {show: true}
        }],
        dataZoom: [{
          type: 'slider',
          left: 10,
          right: 10,
          height: 10,
          bottom: 10,
          maxValueSpan: 30,
          minValueSpan: 30,
          brushSelect: false,
          zoomLock: true
        }]
      })
    },
    initScreen() {
      this.screen = new this.$ScreenDisplay({
        el: this.$refs['screen'],
        designWidth: 1920,
        designHeight: 1080
      })
      this.$on('hook:beforeDestroy', () => {
        this.screen.destroy();
      })
    },
  },
  mounted() {
    this.initScreen();
    this.initChart();
  },
  async asyncData({app}) {
    let [
      {data: {data: showInfo}},
      {data: {data: configInfo}}
    ] = await Promise.all([
      app.$axios.get('/dashboard/show'),
      app.$axios.get('/common/config', {params: {code: 'TVMAZE_DASHBOARD_TITLE,TVMAZE_START_TIME'}}),
    ])
    return {
      head: app.head,
      showInfo,
      configInfo
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.dashboard-warp {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .dashboard-box {
    position: relative;

    .card-box {
      position: absolute;
      box-sizing: border-box;
      @include border('border-base');

      &.chart-box {
        display: flex;
        flex-direction: column;

        .title {
          padding: 10px;
          font-size: 14px;
          @include fontColor('color-title')
        }

        .chart {
          flex: 1;
        }
      }

      &.title {
        top: 0;
        left: 50%;
        margin-left: -400px;
        width: 800px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 60px;
      }

      &.status-chart {
        left: 0;
        top: 0;
        width: 560px;
        height: 380px;
      }

      &.year-chart {
        left: 560px;
        top: 80px;
        width: 800px;
        height: 300px;
      }

      &.type-chart {
        right: 0;
        top: 0;
        width: 560px;
        height: 380px;
      }

      &.network-chart {
        top: 380px;
        left: 0;
        right: 0;
        height: 380px;
      }

      &.webchannel-chart {
        top: 760px;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }

  .shadow-text {
    font-weight: bold; /* 文字粗点，这样效果更明显 */
    color: transparent; /* 设置文字填充颜色为透明，这样可以把背景显示出来 */
    -webkit-text-fill-color: transparent; /* 使用一个非标准的方法覆盖文字填充颜色，以防color被其他代码覆盖 */
    background-image: linear-gradient(135deg, #fff 0%, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000 100%); /* 使用 #fff 和 #000 画出条纹效果，并倾斜135度 */
    background-size: 6px 6px; /* 背景图大小，控制斑马纹的粗细 */
    background-repeat: repeat; /* 不断重复渲染背景图 */
    -webkit-background-clip: text; /* 将背景渲染到文本中（兼容性写法） */
    @include themeify {
      text-shadow: 6px -6px themed('color-primary'), 4px -4px #fff; /* 设置顶层黑色投影和中层白色投影 */
    }
  }
}
</style>
