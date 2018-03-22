<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-panel">
      <div>
        <textarea id="simplemde"></textarea>
      </div>
    </el-row>
  </el-card>
</template>

<style>
  .CodeMirror, .CodeMirror-scroll {
    min-height: 600px !important;
  }
  .CodeMirror{
    height: 400px;
  }
</style>

<script>
  export default {
    name: 'vp-simplemde',
    mounted () {
      this.$nextTick(() => {
        this.simplemde = new SimpleMDE({
          element: document.getElementById('simplemde'),
          toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
        })
      })
    }
  }
</script>

