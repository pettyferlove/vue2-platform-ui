<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-login vp-panel">
      <el-col :span="10" class="login-form">
      <div class="login-header">
        <img src="../../assets/img/logo.png" height="80" alt="">
        <p><span>VUE</span>PettyDev</p>
      </div>
      <div class="login-form">
        <el-input v-model="username" placeholder="please enter username"></el-input>
        <el-input v-model="password" type="password" placeholder="Please enter password"></el-input>
        <router-link to="/"><el-button type="primary">Login</el-button></router-link>
      </div>
      <div class="login-footer">
        <el-checkbox v-model="remenber">Remenber</el-checkbox>
        <span class="forget"><a href="#">Forget Password</a></span>
      </div>
      </el-col>
      <el-col :span="14" class="login-ad">
      <span class="photo-author"></span>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    name: 'VpLogin',
    data: function () {
      return {
        username: '',
        password: '',
        remenber: false
      }
    }
  }
</script>
