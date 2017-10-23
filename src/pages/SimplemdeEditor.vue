<template>
  <div class="editor vp-content">
    <el-row>
      <el-col>
        <vp-simplemde></vp-simplemde>
      </el-col>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
  import VpSimplemde from '../components/editor/vp-simplemde.vue'
  export default {
    name: 'SimplemdeEditor',
    components: {VpSimplemde}
  }
</script>

