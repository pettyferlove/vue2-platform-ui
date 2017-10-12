<template>
  <el-dropdown trigger="click" class="vp-user-panel" menu-align="end">
    <el-button>
      <img src="../assets/img/user-petty.jpg" height="30" alt=""><span>Admin</span>
    </el-button>
    <el-dropdown-menu slot="dropdown" class="vp-user-panel-menu">
      <el-dropdown-item><i class="fa fa-cog"></i>用户设置</el-dropdown-item>
      <el-dropdown-item divided><router-link to="/login"><i class="fa fa-key"></i>退出系统</router-link></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<style>

</style>

<script>
    import ElIcon from '../../node_modules/element-ui/packages/icon/src/icon.vue'

    export default {
      components: {ElIcon},
      name: 'VpUserPanel'
    }
</script>

