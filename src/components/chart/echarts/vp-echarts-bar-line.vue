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
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')

  export default {
    name: 'VpEChartsBarLine',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: '柱形图'
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrt依次选择颜色渲染
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
      // 横坐标数据
      xAxisData: {
        type: Array,
        required: true,
        default: function () {
          return ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        }
      },
      // 纵坐标数据
      series: {
        type: Array,
        required: true,
        default: function () {
          return [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    data () {
      return {
        // 刻度颜色
        axisColor: {
          type: String,
          default: '#797979'
        },
        // 分割线颜色
        splitLineColor: {
          type: String,
          default: '#dcdcdc'
        },
        chart: null
      }
    },
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + new Date().getTime()
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
        this.chart.setOption({
          title: {text: this.title},
          legend: {
            icon: 'circle',
            data: this.legendData,
            bottom: 0
          },
          grid: {
            left: 30,
            right: 15
          },
          color: this.color,
          tooltip: {},
          xAxis: {
            data: this.xAxisData,
            axisLine: {
              lineStyle: {
                color: this.axisColor
              }
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: this.axisColor
              }
            },
            splitLine: {
              lineStyle: {
                color: '#dcdcdc'
              }
            }
          },
          series: this.series
        })
      },
      resizeChart () {
        this.chart.resize()
      }
    },
    watch: {
      xAxisData () {
        this.renderChart()
      },
      series () {
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
