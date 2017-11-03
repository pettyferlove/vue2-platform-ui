<template>
  <div class="login">
    <div class="login-main vertical-align">
      <div class="login-content vertical-align">
        <div class="page-brand vertical-align-middle">
          <span class="login-title">PlatformUI</span>
          <h2>基于Vue2+ElementUI 开发的组件库</h2>
          <h4><i class="fa fa-github"><a href="https://github.com/pettyferlove/vue2-platform-ui" style="color: white"> Github</a></i></h4>
        </div>
      </div>
    </div>
    <vp-login>
    </vp-login>
  </div>
</template>
<script>
  import VpLogin from '../components/common/vp-login'
  import VpBgCanvas from '../components/canvas/vp-bg-canvas'
  export default {
    name: 'Login',
    components: {
      VpLogin,
      VpBgCanvas
    }
  }
</script>
