<template>
  <li v-show="show">
    <slot/>
  </li>
</template>

<script>
  export default {
    name: 'VpTabsItem',
    props: ['name', 'label'],
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      updateShow: function () {
        if (this.$parent.activeName === this.name) {
          this.show = true
        } else {
          this.show = false
        }
      }
    },
    updated: function () {
      this.updateShow()
    },
    mounted: function () {
      this.updateShow()
    }
  }
</script>
