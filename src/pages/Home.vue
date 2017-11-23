<template>
  <div class="home vp-content">
    <el-row :gutter="16">
      <el-col :lg="24" :md="12">
        <vp-user-welcome></vp-user-welcome>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpUserWelcome from '../components/user/vp-user-welcome.vue'

  export default {
    components: {VpUserWelcome},
    name: 'Home'
  }
</script>

<style lang="less">

</style>
