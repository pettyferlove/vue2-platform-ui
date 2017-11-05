<template>
  <div class="charts vp-content">
    <el-row :gutter="16">
      <el-col :span="14">
        <vp-chart-js-bar-line></vp-chart-js-bar-line>
      </el-col>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
  import VpChartJsBarLine from '../components/chart/chartjs/vp-chartjs-bar-line'
  export default {
    name: 'ChartJs',
    components: {
      VpChartJsBarLine
    }
  }
</script>

