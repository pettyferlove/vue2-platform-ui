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
        <vp-count-up :isUnit="false" idName="als-area" :endVal="8540" class="count" style="color:#000000"></vp-count-up>
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
    name: 'VpMiniAnalysisArea',
    data () {
      return {
        areaData: [
          {'year': '1986', 'ACME': 162},
          {'year': '1987', 'ACME': 134},
          {'year': '1988', 'ACME': 116},
          {'year': '1989', 'ACME': 122},
          {'year': '1990', 'ACME': 178},
          {'year': '1991', 'ACME': 144},
          {'year': '1992', 'ACME': 125},
          {'year': '1993', 'ACME': 176},
          {'year': '1994', 'ACME': 156},
          {'year': '1995', 'ACME': 195},
          {'year': '1996', 'ACME': 215},
          {'year': '1997', 'ACME': 176},
          {'year': '1998', 'ACME': 167},
          {'year': '1999', 'ACME': 142},
          {'year': '2000', 'ACME': 117},
          {'year': '2001', 'ACME': 113},
          {'year': '2002', 'ACME': 132}
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
      chart.area().position('year*ACME').color('type').shape('smooth')
      chart.render()
    }
  }
</script>

