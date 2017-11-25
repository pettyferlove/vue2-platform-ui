<template>
  <vp-panel title="待办事项" class="vp-user-item">
    <vp-to-do-list></vp-to-do-list>
  </vp-panel>
</template>

<style>

</style>

<script>
  import VpPanel from '../common/vp-panel.vue'
  import VpToDoList from '../list/vp-to-do-list.vue'

  export default {
    components: {
      VpToDoList,
      VpPanel},
    name: 'VpUserItem'
  }
</script>

