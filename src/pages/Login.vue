<template>
  <div class="login">
    <vp-bg-canvas></vp-bg-canvas>
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
