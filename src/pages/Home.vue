<template>
  <div class="home vp-content">
    <el-row :gutter="16">
      <el-col :lg="24" :md="12">
        <vp-user-welcome></vp-user-welcome>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="16" :md="12">
        <vp-user-welcome></vp-user-welcome>
      </el-col>
      <el-col :lg="8" :md="12">
        <vp-user-index-num></vp-user-index-num>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpUserWelcome from '../components/user/vp-user-welcome.vue'
  import VpUserIndexNum from '../components/user/vp-user-index-num.vue'

  export default {
    components: {
      VpUserIndexNum,
      VpUserWelcome},
    name: 'Home'
  }
</script>

<style lang="less">

</style>
