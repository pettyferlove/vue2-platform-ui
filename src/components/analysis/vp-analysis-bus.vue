<template>
  <el-card :body-style="{ padding: '0px' }" class="analysis-card-bus">
    <vp-panel title="年度报告">
      <el-row :gutter="16">
        <el-col :lg="16" :md="24">
          <div :id="this.id" style="" class="bar-analysis-chart"></div>
        </el-col>
        <el-col :lg="8" :md="24" class="progress">
            <p class="text-center">
              <strong>目标完成</strong>
            </p>
            <div class="progress-group">
              <span class="progress-text">项目增加</span>
              <span class="progress-number"><b>160</b>/200</span>
              <el-progress :show-text="false" :stroke-width="10" :percentage="0"/>
            </div>
            <!-- /.progress-group -->
            <div class="progress-group">
              <span class="progress-text">采购完成</span>
              <span class="progress-number"><b>310</b>/400</span>
              <el-progress :show-text="false" status="success" :stroke-width="10" :percentage="70"/>
            </div>
            <!-- /.progress-group -->
            <div class="progress-group">
              <span class="progress-text">保险缴纳</span>
              <span class="progress-number"><b>480</b>/800</span>
              <el-progress :show-text="false" :stroke-width="10" :percentage="100"/>
            </div>
            <!-- /.progress-group -->
            <div class="progress-group">
              <span class="progress-text">信息查询</span>
              <span class="progress-number"><b>250</b>/500</span>
              <el-progress :show-text="false" status="exception" :stroke-width="10" :percentage="50"/>
            </div>
            <!-- /.progress-group -->
        </el-col>
      </el-row>
      <el-row :gutter="18" class="description">
        <el-col :lg="6" :md="24">
          <div class="description-block description-border-right">
            <span class="description-percentage" style="color: #00a65a !important;"><i class="fa fa-caret-up"></i> 17%</span>
            <h5 class="description-header">￥35,210.43</h5>
            <span class="description-text">总营业额</span>
          </div>
        </el-col>
        <el-col :lg="6" :md="24">
          <div class="description-block description-border-right">
            <span class="description-percentage" style="color: #f39c12 !important;"><i class="fa fa-caret-left"></i> 0%</span>
            <h5 class="description-header">￥10,390.90</h5>
            <span class="description-text">总成本</span>
          </div>
        </el-col>
        <el-col :lg="6" :md="24">
          <div class="description-block description-border-right">
            <span class="description-percentage" style="color: #00a65a !important;"><i class="fa fa-caret-up"></i> 20%</span>
            <h5 class="description-header">￥24,813.53</h5>
            <span class="description-text">毛利润</span>
          </div>
        </el-col>
        <el-col :lg="6" :md="24">
          <div class="description-block">
            <span class="description-percentage" style="color: #dd4b39 !important;"><i class="fa fa-caret-down"></i> 18%</span>
            <h5 class="description-header">1200</h5>
            <span class="description-text">目标完成数</span>
          </div>
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
          {year: '2017', month: '一月', value: 502},
          {year: '2017', month: '二月', value: 635},
          {year: '2017', month: '三月', value: 809},
          {year: '2017', month: '四月', value: 5268},
          {year: '2017', month: '五月', value: 4400},
          {year: '2017', month: '六月', value: 3634},
          {year: '2017', month: '七月', value: 947},
          {year: '2017', month: '八月', value: 947},
          {year: '2017', month: '九月', value: 947},
          {year: '2017', month: '十月', value: 947},
          {year: '2017', month: '十一月', value: 947},
          {year: '2017', month: '十二月', value: 947},
          {year: '2016', month: '一月', value: 106},
          {year: '2016', month: '二月', value: 107},
          {year: '2016', month: '三月', value: 111},
          {year: '2016', month: '四月', value: 1766},
          {year: '2016', month: '五月', value: 221},
          {year: '2016', month: '六月', value: 767},
          {year: '2016', month: '七月', value: 767},
          {year: '2016', month: '八月', value: 767},
          {year: '2016', month: '九月', value: 767},
          {year: '2016', month: '十月', value: 767},
          {year: '2016', month: '十一月', value: 133},
          {year: '2016', month: '十二月', value: 133}
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
        month: {
          range: [ 0, 1 ]
        }
      })
      chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      chart.areaStack().position('month*value').color('year').shape('smooth')
      chart.lineStack().position('month*value').color('year').size(2).shape('smooth')
      chart.render()
    }
  }
</script>

<style scoped>

</style>
