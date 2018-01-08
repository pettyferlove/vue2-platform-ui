<template>
  <el-card :body-style="{ padding: '0px' }" class="analysis-card">
    <div class="analysis-card-container">
      <div class="analysis-card-container-title"><span>总销售额</span>
        <span class="analysis-card-container-title-tip">
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <i class="fa fa-info-circle"></i>
          </el-tooltip>
        </span>
      </div>
      <div class="analysis-card-container-body">
        <vp-count-up :isUnit="false" idName="als-line" :endVal="6560" class="count" style="color:#000000"/>
      </div>
      <div class="analysis-card-container-als-area" style="height: 46px;">
        <div class="analysis-card-container-als-area-content">
          <div class="mini-chart" style="height: 46px">
            <div :id="this.id" style="" class="chart-content"></div>
          </div>
        </div>
      </div>
      <div class="analysis-card-container-footer">
        <div class="analysis-card-container-footer-content"><span>日均销售额</span><span>￥12,423</span></div>
      </div>
    </div>
  </el-card>
</template>

<style>

</style>

<script>
  import VpCountUp from '../common/vp-count-up.vue'
  import G2 from '@antv/g2'

  export default {
    components: {VpCountUp},
    name: 'VpMiniAnalysisLine',
    data () {
      return {
        areaData: [
          {year: '1 月', sales: 38},
          {year: '2 月', sales: 52},
          {year: '3 月', sales: 61},
          {year: '4 月', sales: 145},
          {year: '5 月', sales: 48},
          {year: '6 月', sales: 38},
          {year: '7 月', sales: 38},
          {year: '8 月', sales: 32},
          {year: '9 月', sales: 28},
          {year: '10 月', sales: 38},
          {year: '11 月', sales: 48},
          {year: '12 月', sales: 18}
        ]
      }
    },
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + '_' + new Date().getTime()
      }
    },
    mounted () {
      var chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        animate: true,
        height: 100,
        padding: [36, -10, 30, -10]
      })
      chart.axis(false)
      chart.source(this.areaData)
      chart.line().position('year*sales').color('#13c2c2').shape('smooth')
      chart.render()
    }
  }
</script>

