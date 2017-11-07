<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-chartjs-bar vp-panel">
      <canvas :id="this.id" style="height: 400px"></canvas>
    </div>
  </el-card>
</template>

<style>

</style>

<script>
  /* eslint-disable no-unused-vars */
  import Chart from 'chart.js'

  export default {
    name: 'VpChartJsPolar',
    data () {
      return {
        radarData: {
          type: 'polarArea',
          data: {
            datasets: [{
              data: [10, 20, 30]
            }],
            labels: [
              'Red',
              'Yellow',
              'Blue'
            ]
          },
          options: {}
        }
      }
    },
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + new Date().getTime()
      }
    },
    mounted () {
      var ctx = document.getElementById(this.id).getContext('2d')
      var demo = new Chart(ctx, this.radarData)
    }
  }
</script>

