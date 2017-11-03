<template>
  <el-row class="vp-login">
    <el-col class="login-form">
      <div class="login-header">
        <img src="../../assets/img/logo.png" height="80" alt="">
        <p><span>VUE</span>PettyDev</p>
      </div>
      <h3>登陆系统</h3>
      <div class="login-form">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
        <router-link to="/"><el-button type="primary">登陆</el-button></router-link>
      </div>
      <div class="login-footer">
        <el-checkbox v-model="remenber">记住我</el-checkbox>
        <span class="forget"><a href="#">忘记密码</a></span>
      </div>
    </el-col>
  </el-row>
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
