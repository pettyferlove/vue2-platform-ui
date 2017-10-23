<template>
  <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
</template>

<style>

</style>

<script>
  export default {
    name: 'Editor'
  }
</script>

