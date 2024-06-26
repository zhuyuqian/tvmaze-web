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
        <p class="title">剧状态</p>
        <div class="chart" ref="status-chart"></div>
      </div>
      <!--分类数据-统计图-->
      <div class="card-box chart-box type-chart">
        <p class="title">剧分类</p>
        <div class="chart" ref="type-chart"></div>
      </div>
      <!--评分数据-统计图-->
      <div class="card-box chart-box rating-chart">
        <p class="title">剧评分区间</p>
        <div class="chart" ref="rating-chart"></div>
      </div>
      <!--上线时间-统计图-->
      <div class="card-box chart-box year-chart">
        <p class="title">每年新剧</p>
        <div class="chart" ref="year-chart"></div>
      </div>
      <!--流媒体-统计图-->
      <div class="card-box chart-box webchannel-chart">
        <p class="title">流媒体旗下</p>
        <div class="chart" ref="webchannel-chart"></div>
      </div>
      <!--频道-统计图-->
      <div class="card-box chart-box network-chart">
        <p class="title">频道旗下</p>
        <div class="chart" ref="network-chart"></div>
      </div>
      <!--数量-->
      <div class="card-box count-box">
        <a class="count-item" v-for="item of countConfig" :key="item.key" :href="item.path" target="_blank">
          <div class="count">
            <count-to :start-val="0" :end-val="showInfo[item.key]" :duration='1000'/>
          </div>
          <div class="name">{{ item.name }}</div>
        </a>
      </div>
      <!--每日更新-->
      <div class="card-box chart-box year-airs-chart">
        <p class="title">{{ $dayjs().format('YYYY') }}年度剧集上线频率</p>
        <div class="chart" ref="year-airs-chart"></div>
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
      countConfig: [
        {name: '剧总数', key: 'showTotal', path: '/show'},
        {name: '集总数', key: 'episodeTotal', path: '/'},
        {name: '流媒体总数', key: 'channelTotal', path: '/webChannel'},
        {name: '频道总数', key: 'networkTotal', path: '/network'},
        {name: '卡司总数', key: 'castTotal', path: '/people'},
        {name: '片单总数', key: 'albumTotal', path: '/album'},
        {name: '资讯总数', key: 'newTotal', path: '/new'},
      ],
      showInfo: {},
      configInfo: {}
    }
  },
  methods: {
    initChart() {
      // 当前状态
      if (!this.statusChart) {
        this.statusChart = echarts.init(this.$refs['status-chart'], 'chalk');
      }
      this.statusChart.setOption({
        legend: {orient: 'vertical', left: 'left', bottom: 0, textStyle: {color: '#999'}},
        series: [
          {
            type: 'pie',
            radius: ['50%', '90%'],
            center: ['65%', '50%'],
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

      // 每个类型的剧
      if (!this.typeChart) {
        this.typeChart = echarts.init(this.$refs['type-chart'], 'chalk');
      }
      this.typeChart.setOption({
        legend: {
          orient: 'vertical',
          left: 'right',
          bottom: 'center',
          height: '100%',
          textStyle: {color: '#999'},
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['40%', '50%'],
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

      // 每年推出新剧
      if (!this.yearChart) {
        this.yearChart = echarts.init(this.$refs['year-chart'], 'chalk');
      }
      this.yearChart.setOption({
        grid: {left: 10, right: 10, top: 10, bottom: 50},
        xAxis: {
          type: 'category',
          data: this.showInfo.premieredList.map(item => item.name)
        },
        yAxis: {type: 'value', show: false},
        series: [{
          data: this.showInfo.premieredList.map(item => item.value),
          type: 'line',
          label: {show: true, fontFamily: 'myNum', position: 'top', color: '#fff'},
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

      // 频道
      if (!this.networkChart) {
        this.networkChart = echarts.init(this.$refs['network-chart'], 'chalk');
      }
      this.networkChart.setOption({
        grid: {left: 20, right: 20, top: 20, bottom: 60},
        xAxis: {
          type: 'category',
          data: this.showInfo.networkList.map(item => item.name),
          axisLabel: {rotate: 20, interval: 0}
        },
        yAxis: {type: 'value', show: false},
        series: [{
          type: 'bar',
          data: this.showInfo.networkList.map(item => item.value),
          label: {show: true, fontFamily: 'myNum', position: 'top', color: '#fff'},
          barWidth: 25,
        }],
        dataZoom: [{
          type: 'slider',
          left: 10,
          right: 10,
          height: 10,
          bottom: 10,
          maxValueSpan: 10,
          minValueSpan: 10,
          brushSelect: false,
          zoomLock: true
        }]
      })

      // 流媒体
      if (!this.webchannelChart) {
        this.webchannelChart = echarts.init(this.$refs['webchannel-chart'], 'chalk');
      }
      this.webchannelChart.setOption({
        grid: {left: 20, right: 20, top: 10, bottom: 60},
        xAxis: {
          type: 'category',
          data: this.showInfo.webChannelList.map(item => item.name),
          axisLabel: {rotate: 20, interval: 0}
        },
        yAxis: {type: 'value', show: false},
        series: [{
          type: 'bar',
          data: this.showInfo.webChannelList.map(item => item.value),
          label: {show: true, fontFamily: 'myNum', position: 'top', color: '#fff'},
          barWidth: 25
        }],
        dataZoom: [{
          type: 'slider',
          left: 10,
          right: 10,
          height: 10,
          bottom: 10,
          maxValueSpan: 20,
          minValueSpan: 20,
          brushSelect: false,
          zoomLock: true
        }]
      })

      // 评分
      if (!this.ratingChart) {
        this.ratingChart = echarts.init(this.$refs['rating-chart'], 'chalk');
      }
      this.ratingChart.setOption({
        grid: {left: 25, right: 10, top: 10, bottom: 10},
        xAxis: {type: 'value', show: false},
        yAxis: {data: this.showInfo.ratingList.map(item => item.name)},
        series: [{
          type: 'bar',
          data: this.showInfo.ratingList.map(item => item.value),
          label: {show: true, fontFamily: 'myNum', position: 'right', color: '#fff'},
          barWidth: 25
        }],
      })

      // 剧集更新频率
      if (!this.yearAirsChart) {
        this.yearAirsChart = echarts.init(this.$refs['year-airs-chart'], 'chalk');
        this.yearAirsChart.on('click', ({value}) => {
          this.$tool.openLink(`/schedule/${value[0]}`)
        })
      }
      this.yearAirsChart.setOption({
        tooltip: {position: 'top', formatter: ({value}) => `${value[0]}：${value[1]}`},
        visualMap: {
          min: 0, max: 1000,
          type: 'piecewise', orient: 'horizontal',
          right: 20, top: 0,
          textStyle: {color: '#999'}
        },
        calendar: {
          top: 50, left: 50, right: 20, bottom: 20,
          range: this.$dayjs().format('YYYY'),
          splitLine: {lineStyle: {width: 1, color: '#666'}},
          itemStyle: {borderWidth: 0.5, color: '#232323', borderColor: '#666'},
          monthLabel: {color: '#999'},
          dayLabel: {color: '#999'},
          yearLabel: {show: false}
        },
        series: [{
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: this.showInfo.yearAirsList
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
$--color-primary: #dd6b66;

.dashboard-warp {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #232323;

  .dashboard-box {
    position: relative;

    .card-box {
      position: absolute;
      box-sizing: border-box;
      border: 1px dashed #4f4f4f;

      &.chart-box {
        display: flex;
        flex-direction: column;

        .title {
          padding: 10px;
          font-size: 14px;
          color: #999;
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
        width: 250px;
        height: 200px;
      }

      &.type-chart {
        left: 250px;
        top: 0;
        width: 310px;
        height: 320px;
      }

      &.rating-chart {
        left: 0;
        width: 250px;
        top: 200px;
        height: 370px;
      }

      &.year-chart {
        top: 320px;
        left: 250px;
        right: 0;
        height: 250px;
      }

      &.webchannel-chart {
        left: 560px;
        top: 80px;
        width: 800px;
        height: 240px;
      }

      &.network-chart {
        top: 0;
        right: 0;
        width: 560px;
        height: 320px;
      }

      &.year-airs-chart {
        left: 0;
        right: 0;
        bottom: 0;
        top: 670px;
      }

      &.count-box {
        left: 0;
        right: 0;
        top: 570px;
        height: 100px;
        display: flex;
        align-items: center;

        .count-item {
          flex: 1;
          text-align: center;

          .name {
            font-size: 14px;
            color: #999;
            transition: all 0.2s;
          }

          .count {
            font-family: myNum;
            font-size: 40px;
            font-weight: bold;
            color: $--color-primary;
            transition: all 0.2s;
          }

          &:hover {
            .name {
              font-size: 16px;
            }

            .count {
              font-size: 46px;
            }
          }
        }
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
    text-shadow: 6px -6px $--color-primary, 4px -4px #fff; /* 设置顶层黑色投影和中层白色投影 */
  }
}
</style>
