<template>
  <el-dropdown trigger="click" class="vp-user-panel" menu-align="end">
    <el-button>
      <img :src="adminInfo.image" height="30" alt=""><span>{{adminInfo.name}}</span>
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
    export default {
      name: 'VpUserPanel',
      props: {
        adminInfo: {
          type: Object,
          default: function () {
            return {
              image: require('@/assets/img/user-petty.jpg'),
              name: 'Pettyfer'
            }
          }
        }
      }
    }
</script>

