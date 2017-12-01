<template>
  <div class="home vp-content">
    <el-row :gutter="16">
      <el-col :lg="24" :md="12">
        <vp-user-welcome></vp-user-welcome>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="9" :md="12">
        <vp-user-to-do-list></vp-user-to-do-list>
      </el-col>

      <el-col :lg="15" :md="12">

      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="16" :md="12">
        <vp-user-dynamic></vp-user-dynamic>
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
  import VpUserDynamic from '../components/user/vp-user-dynamic.vue'
  import VpUserToDoList from '../components/user/vp-user-to-do-list.vue'

  export default {
    components: {
      VpUserToDoList,
      VpUserDynamic,
      VpUserIndexNum,
      VpUserWelcome
    },
    name: 'Home',
    data () {
      return {
        dataWeather: {
          location: 'Beijing',
          weather: 'cloudy',
          temprature: '30°',
          humidity: '56%',
          percip: '1.50in',
          winds: '10mph'
        }
      }
    }
  }
</script>

<style lang="less">

</style>
