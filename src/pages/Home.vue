<template>
  <div class="home">
    <el-row class="header" type="flex" align="middle">
      <div class="logo">
        <img src="../assets/logo.png" height="30" alt="">
        <span>VUE</span>PettyDev
      </div>
    </el-row>
    <el-row class="main">
      <el-row type="flex">
        <el-menu default-active="1" class="sidebar" theme="dark" collapse="true">
          <!--<el-submenu index="1">
            <template slot="title">
              <i class="fa fa-dashboard"></i>
              <span slot="title">仪表盘</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>-->
          <el-menu-item index="1">
            <i class="fa fa-dashboard"></i>
            <span slot="title">仪表盘</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="fa fa-cogs"></i>
            <span slot="title">小组件</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="fa fa-database"></i>
            <span slot="title">面板</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="fa fa-pencil"></i>
            <span slot="title">编辑器</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="fa fa-photo"></i>
            <span slot="title">图片列表</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="fa fa-bar-chart"></i>
            <span slot="title">图表</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="fa fa-anchor"></i>
            <span slot="title">UI元素</span>
          </el-menu-item>

          <el-submenu index="8">
            <template slot="title">
              <i class="fa fa-database"></i>
              <span slot="title">数据表格</span>
            </template>
            <el-menu-item index="8-1">
              <i class="fa fa-hdd-o"></i>
              <span slot="title">基础表格</span>
            </el-menu-item>
            <el-menu-item index="8-2">
              <i class="fa fa-bars"></i>
              <span slot="title">可编辑表格</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="9">
            <template slot="title">
              <i class="fa fa-file"></i>
              <span slot="title">页面</span>
            </template>
            <el-menu-item index="9-1">
              <i class="fa fa-mouse-pointer"></i>
              <span slot="title">登录页</span>
            </el-menu-item>
            <el-menu-item index="9-2">
              <i class="fa fa-cogs"></i>
              <span slot="title">锁屏</span>
            </el-menu-item>
            <el-menu-item index="9-3">
              <i class="fa fa-minus"></i>
              <span slot="title">加载中</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-row>
    </el-row>
  </div>
</template>

<style scoped>
  .main-footer{
    margin-bottom: 5px;
  }
</style>

<script>
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: {ElRow},
    name: 'home'
  }
</script>
