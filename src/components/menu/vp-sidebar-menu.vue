<template>
  <el-menu
    :default-active="$route.path"
    :collapse="isCollapse"
    unique-opened
    :router="true">
    <div class="menu-header">
      <div class="logo" :style="{width: isCollapse?'64px':'210px'}">
        <div class="logo-group">
          <img src="../../assets/logo.png" height="30" alt="">
          <span v-show="!isCollapse">
              <span class="logo-title-light">VUE</span>PettyDev
            </span>
        </div>
      </div>
    </div>
    <el-menu-item index="/widget">
      <i class="fa fa-cogs"></i>
      <span slot="title">组件</span>
    </el-menu-item>
    <el-menu-item index="/panels">
      <i class="fa fa-database"></i>
      <span slot="title">面板</span>
    </el-menu-item>
    <el-submenu index="editor">
      <template slot="title">
        <i class="fa fa-pencil"></i>
        <span slot="title">编辑器</span>
      </template>
      <el-menu-item index="/quill">
        <i class="fa fa-pencil"></i>
        <span slot="title">Quill-Editor</span>
      </el-menu-item>
      <el-menu-item index="/simplemde">
        <i class="fa fa-pencil"></i>
        <span slot="title">Simplemde</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/imageList">
      <i class="fa fa-photo"></i>
      <span slot="title">图片列表</span>
    </el-menu-item>
    <el-submenu index="chart">
      <template slot="title">
        <i class="fa fa-bar-chart"></i>
        <span slot="title">图表</span>
      </template>
      <el-menu-item index="/echarts">
        <i class="fa fa-line-chart"></i>
        <span slot="title">ECharts</span>
      </el-menu-item>
      <el-menu-item index="/chartjs">
        <i class="fa fa-pie-chart"></i>
        <span slot="title">ChartJS</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="ui">
      <template slot="title">
        <i class="fa fa-anchor"></i>
        <span slot="title">UI元素</span>
      </template>
      <el-menu-item index="/icons">
        <i class="fa fa-font"></i>
        <span slot="title">字体图标</span>
      </el-menu-item>
      <el-menu-item index="/icons">
        <i class="fa fa-font"></i>
        <span slot="title">字体图标</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="table">
      <template slot="title">
        <i class="fa fa-database"></i>
        <span slot="title">数据表格</span>
      </template>
      <el-menu-item index="/basicTable">
        <i class="fa fa-hdd-o"></i>
        <span slot="title">基础表格</span>
      </el-menu-item>
      <el-menu-item index="/editableTable">
        <i class="fa fa-bars"></i>
        <span slot="title">可编辑表格</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="9">
      <template slot="title">
        <i class="fa fa-file"></i>
        <span slot="title">页面</span>
      </template>
      <el-menu-item index="/login">
        <i class="fa fa-mouse-pointer"></i>
        <span slot="title">登录页</span>
      </el-menu-item>
      <el-menu-item index="/lockScreen">
        <i class="fa fa-cogs"></i>
        <span slot="title">锁屏</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<style>

</style>

<script>
  export default {
    name: 'VpSidebarMenu',
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      },
      menuData: {
        type: Array,
        required: true
      }
    }
  }
</script>

