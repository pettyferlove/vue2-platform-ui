<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-panel">
      <quill-editor v-model="content" ref="myQuillEditor" :options="quillOptions" @change="returnContent">
      </quill-editor>
    </el-row>
  </el-card>
</template>

<style>
  .ql-container{
    height: 500px;
  }

  .ql-toolbar.ql-snow{
    border: none;
    background-color: #fafbfc;
    border-bottom: 1px solid #eeeff1;
  }

  .ql-container.ql-snow{
    border: none;
  }
</style>

<script>
  export default {
    name: 'vp-editor',
    data () {
      return {
        content: null,
        quillOptions: {
          placeholder: ' '
        }
      }
    },
    methods: {
      returnContent: function () {
        this.$emit('getContent', this.content)
      }
    }
  }
</script>

