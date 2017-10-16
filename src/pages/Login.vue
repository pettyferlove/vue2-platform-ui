<template>
  <div class="login">
    <vp-bg-canvas></vp-bg-canvas>
      <vp-login>
      </vp-login>
  </div>
</template>
<script>
  import VpLogin from '../components/vp-login'
  import VpBgCanvas from '../components/vp-bg-canvas'
  export default {
    name: 'Login',
    components: {
      VpLogin,
      VpBgCanvas
    }
  }
</script>
