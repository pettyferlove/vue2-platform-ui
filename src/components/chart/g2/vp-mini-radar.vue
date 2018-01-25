<template>
  <div :id="this.id" style="" class="chart-content"></div>
</template>

<style>

</style>

<script>
  import G2 from '@antv/g2'
  import { DataView } from '@antv/data-set'

  export default {
    name: 'vp-mini-radar',
    data () {
      return {
        chartData: [
          {item: '引用', a: 70, b: 30},
          {item: '热度', a: 60, b: 70},
          {item: '口碑', a: 50, b: 60},
          {item: '产量', a: 40, b: 50},
          {item: '贡献', a: 60, b: 70}

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
      const dv = new DataView().source(this.chartData)
      dv.transform({
        type: 'fold',
        fields: ['a', 'b'], // 展开字段集
        key: 'user', // key字段
        value: 'score'
      })
      const chart = new G2.Chart({
        container: this.id,
        forceFit: true,
        height: 375,
        padding: [0, 0, 0, 0]
      })
      chart.source(dv, {
        score: {
          min: 0,
          max: 80
        }
      })
      chart.coord('polar', {
        radius: 0.8
      })
      chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      })
      chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          }
        }
      })
      chart.legend('user', {
        marker: 'circle',
        offset: 30
      })
      chart.line().position('item*score').color('user').size(2)
      chart.point().position('item*score').color('user').shape('circle').size(4).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
      })
      chart.area().position('item*score').color('user')
      chart.render()
    }
  }
</script>

