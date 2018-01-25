<template>
  <transition name="fade">
    <div class="vp-loading-bar" :style="outerStyles" v-show="show">
      <div :class="innerClasses" :style="innerStyles"></div>
    </div>
  </transition>
</template>

<style>

</style>

<script>
  export default {
    name: 'vp-loading-bar',
    props: {
      color: {
        type: String,
        default: '#1d8ce0'
      },
      errorColor: {
        type: String,
        default: '#ed3f14'
      },
      barHeight: {
        type: Number,
        default: 2
      }
    },
    data () {
      return {
        status: true,
        percentWidth: 0,
        show: true
      }
    },
    computed: {
      // Bar外层Style
      outerStyles () {
        return {
          height: `${this.barHeight}px`
        }
      },
      // Bar内层Class
      innerClasses () {
        return [
          'vp-loading-bar-inner'
        ]
      },
      // Bar内层Style
      innerStyles () {
        let style = {
          width: `${this.percentWidth}%`,
          height: `${this.barHeight}px`
        }
        if (this.status) {
          style.backgroundColor = this.color
        } else {
          style.backgroundColor = this.errorColor
        }
        return style
      }
    }
  }
</script>

