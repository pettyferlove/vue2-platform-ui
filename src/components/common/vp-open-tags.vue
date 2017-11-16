<template>
  <div>
    <el-tag color="white" closable type="info"><span class="ivu-tag-dot-inner"></span>仪表盘</el-tag>
    <el-tag color="white" closable type="info"><span class="ivu-tag-dot-inner"></span>组件</el-tag>
    <el-tag color="white" closable type="default"><span class="ivu-tag-dot-inner"  style="background: #409EFF"></span>面板</el-tag>
    <el-tag color="white" closable type="info"><span class="ivu-tag-dot-inner"></span>编辑器</el-tag>
    <el-tag color="white" closable type="info"><span class="ivu-tag-dot-inner"></span>图片列表</el-tag>
  </div>
</template>

<style>
  .ivu-tag-dot-inner {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    background: #e9eaec;
    position: relative;
    top: 1px;
  }
</style>

<script>
  export default {
    name: 'VpOpenTags'
  }
</script>

