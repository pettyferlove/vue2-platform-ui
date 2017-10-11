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
        <el-col :span="3">
          <div class="sidebar">
          <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
          </el-menu>
          </div>
        </el-col>
        <el-col :span="21">

        </el-col>
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
