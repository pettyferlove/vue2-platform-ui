<template>
  <el-card :body-style="{ padding: '0px' }" class="analysis-card-bus">
    <vp-panel title="年度业务数量">
      <el-row :gutter="16">
        <el-col :lg="16" :md="24">
          <el-row :gutter="24">
            <div :id="this.id" style="height: 300px;width: 100%" class="chart-content"></div>
          </el-row>
          <el-row>
            111
          </el-row>
        </el-col>
        <el-col :lg="8" :md="24">
          Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get
          considered projection who favourable. Necessary up knowledge it tolerably.
          Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity
          instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as
          meant widow equal an share least.
        </el-col>
      </el-row>
    </vp-panel>
  </el-card>
</template>

<script>
  import VpPanel from '../common/vp-panel'
  import G2 from '@antv/g2'

  export default {
    components: {VpPanel},
    name: 'VpAnalysisBus',
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + '_' + new Date().getTime()
      },
      height: function () {
        return document.getElementById(this.id).offsetHeight
      }
    },
    data () {
      return {
        chartData: [
          {country: 'Asia', year: '1750', value: 502},
          {country: 'Asia', year: '1800', value: 635},
          {country: 'Asia', year: '1850', value: 809},
          {country: 'Asia', year: '1900', value: 5268},
          {country: 'Asia', year: '1950', value: 4400},
          {country: 'Asia', year: '1999', value: 3634},
          {country: 'Asia', year: '2050', value: 947},
          {country: 'Africa', year: '1750', value: 106},
          {country: 'Africa', year: '1800', value: 107},
          {country: 'Africa', year: '1850', value: 111},
          {country: 'Africa', year: '1900', value: 1766},
          {country: 'Africa', year: '1950', value: 221},
          {country: 'Africa', year: '1999', value: 767},
          {country: 'Africa', year: '2050', value: 133},
          {country: 'Europe', year: '1750', value: 163},
          {country: 'Europe', year: '1800', value: 203},
          {country: 'Europe', year: '1850', value: 276},
          {country: 'Europe', year: '1900', value: 628},
          {country: 'Europe', year: '1950', value: 547},
          {country: 'Europe', year: '1999', value: 729},
          {country: 'Europe', year: '2050', value: 408},
          {country: 'Oceania', year: '1750', value: 200},
          {country: 'Oceania', year: '1800', value: 200},
          {country: 'Oceania', year: '1850', value: 200},
          {country: 'Oceania', year: '1900', value: 460},
          {country: 'Oceania', year: '1950', value: 230},
          {country: 'Oceania', year: '1999', value: 300},
          {country: 'Oceania', year: '2050', value: 300}
        ]
      }
    },
    mounted () {
      const chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: this.height,
        padding: [15, 20, 80, 50]
      })
      chart.source(this.chartData, {
        year: {
          type: 'linear',
          tickInterval: 50
        }
      })
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      chart.areaStack().position('year*value').color('country').shape('smooth')
      chart.lineStack().position('year*value').color('country').size(2).shape('smooth')
      chart.render()
    }
  }
</script>

<style scoped>

</style>
