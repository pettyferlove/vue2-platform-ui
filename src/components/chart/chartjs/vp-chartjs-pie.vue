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
    name: 'vp-chart-js-pie',
    data () {
      return {
        barData: {
          type: 'pie',
          data: {
            labels: ['Electronics', 'Digital Goods'],
            datasets: [
              {
                label: 'Electronics',
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          },
          options: {}
        }
      }
    },
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + '_' + new Date().getTime()
      }
    },
    mounted () {
      var ctx = document.getElementById(this.id).getContext('2d')
      var demo = new Chart(ctx, this.barData)
    }
  }
</script>

