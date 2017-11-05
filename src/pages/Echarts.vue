<template>
  <div class="charts vp-content">
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-e-charts-bar-line title="未来一周气温变化" :xAxisData="dataLine.xAxisData" :series="dataLine.series">
        </vp-e-charts-bar-line>
      </el-col>
      <el-col :span="12">
        <vp-e-charts-bar-line title="全年收入与支出" :xAxisData="dataBar.xAxisData" :series="dataBar.series">
        </vp-e-charts-bar-line>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-e-charts-pie title="开发语言分布" :data="dataPie">
        </vp-e-charts-pie>
      </el-col>
      <el-col :span="12">
        <vp-e-charts-radar title="大气污染物分布" :indicator="dataRadar.indicator" :data="dataRadar.data">
        </vp-e-charts-radar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpEChartsBarLine from '../components/chart/echarts/vp-echarts-bar-line'
  import VpEChartsPie from '../components/chart/echarts/vp-echarts-pie'
  import VpEChartsRadar from '../components/chart/echarts/vp-echarts-radar'

  export default {
    name: 'Charts',
    components: {
      VpEChartsBarLine,
      VpEChartsPie,
      VpEChartsRadar
    },
    data: function () {
      return {
        dataBar: {
          xAxisData: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          series: [
            {
              name: '收入',
              type: 'bar',
              data: [50, 200, 360, 100, 100, 200, 50, 200, 360, 100, 100, 200]
            },
            {
              name: '支出',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
            }
          ]
        },
        dataLine: {
          color: ['#41b883', '#1d8ce0'],
          xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          series: [
            {
              name: '最高气温',
              type: 'line',
              data: [11, 11, 15, 13, 12, 13, 10]
            },
            {
              name: '最低气温',
              type: 'line',
              data: [1, -2, 2, 5, 3, 2, 0]
            }
          ]
        },
        dataPie: [
          {
            name: 'Java',
            value: 14
          },
          {
            name: 'C',
            value: 7
          },
          {
            name: 'C++',
            value: 6
          },
          {
            name: 'Python',
            value: 5
          },
          {
            name: 'C#',
            value: 4
          },
          {
            name: 'JavaScript',
            value: 3
          }
        ],
        dataRadar: {
          indicator: ['AQI', 'PM2.5', 'PM10', 'CO', 'NO2', 'SO2'],
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '2017年'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '2016年'
            }
          ]
        }
      }
    }
  }
</script>
