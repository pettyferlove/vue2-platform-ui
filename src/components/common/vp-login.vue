<template>
  <el-row class="vp-login">
    <el-col class="login-form">
      <div class="login-header">
        <img src="../../assets/img/logo.png" height="80" alt="">
        <p><span>VUE</span>PettyDev</p>
      </div>
      <h3>登陆系统</h3>
      <el-form status-icon ref="loginForm" :model="loginForm" :rules="loginRules" class="login-body">
        <el-form-item prop="username">
          <el-input size="medium" v-model="loginForm.username" type="text" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="medium" v-model="loginForm.password" type="password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button size="medium" @click="loginSubmit('loginForm')" type="primary" :loading="loading"
                   :disabled="loading">登陆
        </el-button>
      </el-form>
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
    name: 'vp-login',
    data () {
      var validateUsername = function (rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }
      var validatePassword = function (rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'pettyferlove@live.cn',
          password: ''
        },
        remenber: false,
        loading: false,
        loginRules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      loginSubmit (formName) {
        let that = this
        that.$refs[formName].validate((valid) => {
          if (valid) {
            that.$LoadingBar.start()
            that.loading = true
            setTimeout(function () {
              Cookis.set('user_token', 'pettyfer')
              that.$router.push({
                name: 'home_index'
              })
              that.loading = false
            }, 5000)
          }
        })
      }
    }
  }
</script>
