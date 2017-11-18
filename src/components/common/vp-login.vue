<template>
  <el-row class="vp-login">
    <el-col class="login-form">
      <div class="login-header">
        <img src="../../assets/img/logo.png" height="80" alt="">
        <p><span>VUE</span>PettyDev</p>
      </div>
      <h3>登陆系统</h3>
      <div class="login-form">
        <el-input size="medium" v-model="username" placeholder="请输入用户名"></el-input>
        <el-input size="medium" v-model="password" type="password" placeholder="请输入密码"></el-input>
        <el-button size="medium" @click="loginSubmit" type="primary" :loading="loading" :disabled="loading">登陆
        </el-button>
      </div>
      <div class="login-footer">
        <el-checkbox v-model="remenber">记住我</el-checkbox>
        <span class="forget"><a href="#">忘记密码</a></span>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import Cookis from 'js-cookie'

  export default {
    name: 'VpLogin',
    data: function () {
      return {
        username: '',
        password: '',
        remenber: false,
        loading: false
      }
    },
    methods: {
      loginSubmit () {
        let that = this
        that.loading = true
        setTimeout(function () {
          Cookis.set('user_token', 'pettyfer')
          that.$router.push({
            name: 'home_index'
          })
          that.loading = false
        }, 1000)
      }
    }
  }
</script>
