<template>
  <div class="home vp-content">
    <el-row :gutter="16">
      <el-col :lg="24" :md="12">
        <vp-user-welcome/>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="10" :md="12">
        <vp-user-to-do-list/>
      </el-col>

      <el-col :lg="14" :md="12">
        <vp-progress title="工作进度" :data="dataProgress"/>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="16" :md="12">
        <vp-user-dynamic/>
      </el-col>
      <el-col :lg="8" :md="12">
        <vp-user-index-num/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpUserWelcome from '../components/user/vp-user-welcome.vue'
  import VpUserIndexNum from '../components/user/vp-user-index-num.vue'
  import VpUserDynamic from '../components/user/vp-user-dynamic.vue'
  import VpUserToDoList from '../components/user/vp-user-to-do-list.vue'
  import VpProgress from '../components/progress/vp-progress'

  export default {
    components: {
      VpProgress,
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
        },
        dataProgress: [
          {
            name: '张三',
            tags: ['cool', 'funy'],
            value: 60
          },
          {
            name: '李四',
            tags: ['nice', 'sexy', 'literature'],
            value: 30
          },
          {
            name: '王玮',
            tags: ['mould', 'shy'],
            value: 80
          },
          {
            name: '叶伟',
            tags: ['funny', 'hardworking', 'learnd'],
            value: 20
          },
          {
            name: '叶修',
            tags: ['nice', 'mould'],
            value: 100
          }
        ]
      }
    }
  }
</script>

<style lang="less">

</style>
