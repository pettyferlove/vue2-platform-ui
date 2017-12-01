<template>
  <vp-panel title="用户动态" class="vp-user-dynamic">
    <vp-to-do-list></vp-to-do-list>
  </vp-panel>
</template>

<style>

</style>

<script>
  import VpPanel from '../common/vp-panel.vue'
  import VpToDoList from '../list/vp-list.vue'

  export default {
    components: {
      VpToDoList,
      VpPanel},
    name: 'VpUserDynamic'
  }
</script>

