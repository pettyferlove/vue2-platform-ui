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
    <template v-for="menu in menuData">
      <el-menu-item v-if="menu.children.length<=1" :index="menu.path+menu.children[0].path">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
      <el-submenu v-if="menu.children.length>1" :index="menu.name">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </template>
        <template v-for="children in menu.children">
          <el-menu-item :index="menu.path+children.path">
            <i :class="children.icon"></i>
            <span slot="title">{{children.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<style>

</style>

<script>
  export default {
    name: 'vp-sidebar-menu',
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

