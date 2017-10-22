<template>
  <div class="lock-screen">
    <vp-lock-screen>
    </vp-lock-screen>
  </div>
</template>
<script>
  import VpLockScreen from '../components/common/vp-lock-screen.vue'
  export default {
    name: 'LockScreen',
    components: {
      VpLockScreen
    }
  }
</script>
