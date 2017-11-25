<template>
  <div class="vp-to-do-list">
    <div class="vp-to-do-list-content">
      <vp-to-do-item></vp-to-do-item>
      <vp-to-do-item></vp-to-do-item>
      <vp-to-do-item></vp-to-do-item>
      <vp-to-do-item></vp-to-do-item>
      <vp-to-do-item></vp-to-do-item>
    </div>
    <div class="vp-to-do-list-footer">
      <el-pagination
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
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

