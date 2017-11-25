<template>
  <div class="vp-to-do-list">
    <vp-to-do-item></vp-to-do-item>
    <vp-to-do-item></vp-to-do-item>
    <vp-to-do-item></vp-to-do-item>
    <vp-to-do-item></vp-to-do-item>
    <vp-to-do-item></vp-to-do-item>
  </div>
</template>

<style>

</style>

<script>
  import VpToDoItem from './item/vp-to-do-item.vue'

  export default {
    components: {VpToDoItem},
    name: 'VpToDoList'
  }
</script>

