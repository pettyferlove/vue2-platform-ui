<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-chartjs-bar vp-panel">
      <canvas id="myChart" style="height: 400px"></canvas>
    </div>
  </el-card>
</template>

<style>

</style>

<script>
  /* eslint-disable no-unused-vars */

  import Chart from 'chart.js'
  export default {
    name: 'VpChartJsBarLine',
    data () {
      return {
        barData: {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          },
          options: {

          }
        }
      }
    },
    mounted () {
      var ctx = document.getElementById('myChart').getContext('2d')
      var demo = new Chart(ctx, this.barData)
    }
  }
</script>

