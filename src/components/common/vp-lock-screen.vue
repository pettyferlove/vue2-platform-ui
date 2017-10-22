<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-lock-screen vp-panel">
      <div class="company">
        <img src="../../assets/img/logo.png" height="18" alt="">
        <span>VUE</span>MANAGER
      </div>
      <div class="user">
        <img src="../../assets/img/user-petty.jpg" height="100" alt="">
        <p class="name">JesseLuo</p>
      </div>
      <el-input v-model="password" placeholder="Please enter code" type="password" :style="{ width: 300 + 'px' }"></el-input>
      <el-button type="primary">Enter</el-button>
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
