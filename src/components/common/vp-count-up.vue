<template>
  <p><span v-cloak :id="idName">{{ startVal }}</span><span>{{ unit }}</span></p>
</template>

<style>

</style>

<script>
  import CountUp from 'countup'

  export default {
    name: 'VpCountUp',
    data () {
      return {
        unit: ''
      }
    },
    props: {
      startVal: {
        type: Number,
        default: 0
      },
      endVal: {
        type: Number,
        required: true
      },
      idName: {
        type: String,
        required: true
      },
      decimals: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 2
      },
      delay: {
        type: Number,
        default: 500
      },
      options: {
        type: Object,
        default: () => {
          return {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.'
          }
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          let res = numberTransform(this.endVal)
          let endNumber = res.val
          this.unit = res.unit
          let demo = {}
          this.demo = demo = new CountUp(this.idName, this.startVal, endNumber, this.decimals, this.duration, this.options)
          if (!demo.error) {
            demo.start()
          }
        }, this.delay)
      })
    }
  }

  function numberTransform (val) {
    let endVal = 0
    let endUnit = ''
    if (val < 1000) {
      endVal = val
    } else if (val >= 1000 && val < 1000000) {
      endVal = parseInt(val / 1000)
      endUnit = 'K+'
    } else if (val >= 1000000 && val < 10000000000) {
      endVal = parseInt(val / 1000000)
      endUnit = 'M+'
    } else {
      endVal = parseInt(val / 1000000000)
      endUnit = 'B+'
    }
    return {
      val: endVal,
      unit: endUnit
    }
  }
</script>

