<template>
  <div class="charts vp-content">
    <el-row>
      <el-col>
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
    name: 'ChartJS',
    components: {
      VpChartJsBarLine
    }
  }
</script>

