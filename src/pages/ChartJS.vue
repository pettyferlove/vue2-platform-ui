<template>
  <div class="charts vp-content">
    <el-row :gutter="16">
      <el-col :span="12">
        <vp-chart-js-bar-line></vp-chart-js-bar-line>
      </el-col>
      <el-col :span="12">
        <vp-chart-js-radar></vp-chart-js-radar>
      </el-col>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
  import VpChartJsBarLine from '../components/chart/chartjs/vp-chartjs-bar-line'
  import VpChartJsRadar from '../components/chart/chartjs/vp-chartjs-radar'
  export default {
    name: 'ChartJs',
    components: {
      VpChartJsBarLine,
      VpChartJsRadar
    }
  }
</script>

