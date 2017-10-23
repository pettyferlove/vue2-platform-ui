<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-state-group vp-panel">
    <quill-editor style="height: 500px" v-model="content"
                  ref="myQuillEditor">
    </quill-editor>
    </el-row>
  </el-card>
</template>

<style>

</style>

<script>
  export default {
    name: 'VpEditor'
  }
</script>

