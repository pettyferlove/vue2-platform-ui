<template>
  <div class="vp-list">
    <div class="vp-list-content">
      <vp-item></vp-item>
      <vp-item></vp-item>
      <vp-item></vp-item>
      <vp-item></vp-item>
      <vp-item></vp-item>
    </div>
    <div class="vp-list-footer">
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
  import VpItem from './item/vp-item.vue'

  export default {
    components: {VpItem},
    name: 'VpList'
  }
</script>

