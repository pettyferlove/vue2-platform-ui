<template>
  <div class="charts vp-content">
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-e-charts-bar-line title="Bar Chart" :xAxisData="dataBar1.xAxisData" :series="dataBar1.series">
        </vp-e-charts-bar-line>
      </el-col>
      <el-col :span="12">
        <vp-e-charts-bar-line  title="Bar Chart" :xAxisData="dataBar2.xAxisData" :series="dataBar2.series">
        </vp-e-charts-bar-line>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-e-charts-bar-line title="Line Chart" :xAxisData="dataLine1.xAxisData" :series="dataLine1.series">
        </vp-e-charts-bar-line>
      </el-col>
      <el-col :span="12">
        <vp-e-charts-bar-line title="Line Chart" :xAxisData="dataLine2.xAxisData" :series="dataLine2.series">
        </vp-e-charts-bar-line>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-e-charts-pie title="Pie Chart" :data="dataPie">
        </vp-e-charts-pie>
      </el-col>
      <el-col :span="12">
        <vp-e-charts-radar title="Radar Chart" :indicator="dataRadar.indicator" :data="dataRadar.data">
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
        dataBar1: {
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [50, 200, 360, 100, 100, 200]
            }
          ]
        },
        dataBar2: {
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [50, 200, 360, 100, 100, 200]
            },
            {
              name: '增长量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        },
        dataLine1: {
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'line',
              data: [50, 290, 360, 100, 100, 200]
            }
          ]
        },
        dataLine2: {
          color: ['#41b883', '#1d8ce0'],
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'line',
              data: [50, 130, 360, 100, 100, 200]
            },
            {
              name: '增长量',
              type: 'line',
              data: [5, 50, 36, 10, 10, 20]
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
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }
          ]
        }
      }
    }
  }
</script>
