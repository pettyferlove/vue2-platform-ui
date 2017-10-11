<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="other"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
