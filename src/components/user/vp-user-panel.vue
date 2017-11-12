<template>
  <div class="vp-user-panel">
    <el-dropdown trigger="click" placement="bottom-end" @command="handleCommand">
      <span class="el-dropdown-link">
        {{adminInfo.name}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="vp-user-panel-menu">
        <el-dropdown-item command="setting"><i class="fa fa-cog"></i>用户设置</el-dropdown-item>
        <el-dropdown-item command="logout" divided><i class="fa fa-key"></i>退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <img :src="adminInfo.image" height="35" alt="">
    <!--<el-button>
      <img :src="adminInfo.image" height="30" alt=""><span>{{adminInfo.name}}</span>
    </el-button>-->
  </div>
</template>

<style>

</style>

<script>
  import Cookies from 'js-cookie'

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
    },
    methods: {
      handleCommand (command) {
        if (command === 'logout') {
          Cookies.remove('user_token')
          this.$router.push({
            name: 'login'
          })
        }
      }
    }
  }
</script>

