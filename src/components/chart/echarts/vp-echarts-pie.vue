<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-echarts-bar vp-panel">
      <div class="panel-body" :id="this.id" :style="{ height: height + 'px'}">
      </div>
    </div>
  </el-card>
</template>
<script>
  import chartTheme from '@/my-theme/chartTheme.js'

  export default {
    name: 'vp-e-charts-pie',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: '饼状图'
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrts依次选择颜色渲染
      color: {
        type: Array,
        default: function () {
          return chartTheme.color
        }
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: '#fff'
      },
      // 纵坐标数据
      data: {
        type: Array,
        required: true
      }
    },
    data: function () {
      return {
        // 刻度颜色
        axisColor: '#797979',
        // 分割线颜色
        splitLineColor: '#dcdcdc',
        chart: null
      }
    },
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + '_' + new Date().getTime()
      },
      legendData: function () {
        let legendData = []
        this.series.forEach(function (elem) {
          legendData.push(elem.name)
        })
        return legendData
      }
    },
    methods: {
      renderChart () {
        if (this.chart) {
          this.chart.dispose()
        }
        // 初始化echart
        this.chart = echarts.init(document.getElementById(this.id))
        // 自定义eChart样式 官方配置指南(http://echarts.baidu.com/option.html#yAxis.splitLine.lineStyle.color)
        this.chart.setOption({
          title: {text: this.title},
          grid: {
            left: 30,
            right: 15
          },
          color: this.color,
          tooltip: {},
          series: {
            type: 'pie',
            data: this.data
          }
        })
      },
      resizeChart () {
        this.chart.resize()
      }
    },
    watch: {
      data () {
        this.renderChart()
      }
    },
    mounted () {
      var that = this
      that.renderChart()
      window.addEventListener('resize', function () {
        that.resizeChart()
      })
    }
  }
</script>
