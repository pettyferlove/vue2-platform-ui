<template>
  <vp-panel title="个人指数">
    <vp-mini-radar></vp-mini-radar>
  </vp-panel>
</template>

<style>

</style>

<script>
  import VpPanel from '../common/vp-panel.vue'
  import VpMiniRadar from '../chart/g2/vp-mini-radar.vue'

  export default {
    components: {
      VpMiniRadar,
      VpPanel},
    name: 'VpUserIndexNum'
  }
</script>

