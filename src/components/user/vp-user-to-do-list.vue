<template>
  <vp-panel title="待处理事项" class="vp-user-to-do-list">
    <petty-scroll>
      <div style="height: 300px">
        <div style="height: 1000px;">

        </div>
      </div>
    </petty-scroll>
  </vp-panel>
</template>

<style>

</style>

<script>
  import VpPanel from '../common/vp-panel.vue'
  import PettyScroll from '../../../node_modules/petty-scroll/src/petty-scroll/main.vue'

  export default {
    components: {
      PettyScroll,
      VpPanel},
    name: 'VpUserToDoList'
  }
</script>

