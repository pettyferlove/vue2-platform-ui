<template>
  <div class="charts vp-content">
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-chart-js-bar-line/>
      </el-col>
      <el-col :span="12">
        <vp-chart-js-radar/>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-chart-js-polar/>
      </el-col>
      <el-col :span="12">
        <vp-chart-js-pie/>
      </el-col>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
  import VpChartJsBarLine from '../components/chart/chartjs/vp-chartjs-bar-line'
  import VpChartJsRadar from '../components/chart/chartjs/vp-chartjs-radar'
  import VpChartJsPolar from '../components/chart/chartjs/vp-chartjs-polar'
  import VpChartJsPie from '../components/chart/chartjs/vp-chartjs-pie'
  export default {
    name: 'ChartJs',
    components: {
      VpChartJsPie,
      VpChartJsBarLine,
      VpChartJsRadar,
      VpChartJsPolar
    }
  }
</script>

