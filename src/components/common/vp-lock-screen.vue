<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-lock-screen vp-panel">
      <div class="company">
        <img src="../../assets/img/logo.png" height="18" alt="">
        <span>Vue</span>Platform
      </div>
      <div class="user">
        <img src="../../assets/img/user-petty.jpg" height="100" alt="">
        <p class="name">Alex Pettyfer</p>
      </div>
      <el-input size="small" v-model="password" placeholder="请输入密码" type="password" :style="{ width: 300 + 'px' }"/>
      <el-button size="small" type="primary">登陆</el-button>
    </div>
  </el-card>
</template>
<script>
  export default {
    name: 'VpLockScreen',
    data: function () {
      return {
        password: ''
      }
    }
  }
</script>
