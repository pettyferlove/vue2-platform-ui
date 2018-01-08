<template>
  <div class="editor vp-content">

    <el-row>
      <el-col>
        <vp-panel title="预览">
          <div v-html="content"></div>
        </vp-panel>
      </el-col>
      <el-col>
        <vp-editor @getContent="showContent"/>
      </el-col>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
  import VpEditor from '../components/editor/vp-quill-editor.vue'
  import VpPanel from '../components/common/vp-panel.vue'
  export default {
    components: {VpEditor, VpPanel},
    name: 'Editor',
    data () {
      return {
        content: null
      }
    },
    methods: {
      showContent: function (data) {
        this.content = data
      }
    }
  }
</script>

