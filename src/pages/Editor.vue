<template>
  <div class="editor vp-content">
    <el-row>
      <el-col>
        <vp-editor></vp-editor>
      </el-col>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
  import VpEditor from '../components/editor/vp-editor.vue'
  export default {
    components: {VpEditor},
    name: 'Editor'
  }
</script>

