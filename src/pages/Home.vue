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

    <el-row :gutter="16">
      <el-col :lg="8">
        <vp-weather class="vp-margin-bottom" :data="dataWeather">
        </vp-weather>
        <vp-tabs icon="fa fa-user" title="Briefs" content-height="200px">
          <vp-tabs-item label="Social" name="01">
            <div class="demo-news">
              <h2>" Lorem ipsum dolor sit amet, consectetur adipiscing. "</h2>
            </div>
          </vp-tabs-item>
          <vp-tabs-item label="Business" name="02">
            <div class="demo-news">
              <h2>" Phasellus massa urna, vehicula bibendum. "</h2>
            </div>
          </vp-tabs-item>
          <vp-tabs-item label="Entertainment" name="03">
            <div class="demo-news">
              <h2>" Duis vitae dictum erat. In ut lorem turpis. "</h2>
            </div>
          </vp-tabs-item>
          <vp-tabs-item label="Sport" name="04">
            <div class="demo-news">
              <h2>" Etiam sit amet urna feugiat, laoreet urna quis. "</h2>
            </div>
          </vp-tabs-item>
          <vp-tabs-item label="Health" name="05">
            <div class="demo-news">
              <h2>" Fusce nec eleifend ligula. "</h2>
            </div>
          </vp-tabs-item>
          <vp-tabs-item label="Education" name="06">
            <div class="demo-news">
              <h2>" Fusce commodo nunc justo, id mattis. "</h2>
            </div>
          </vp-tabs-item>
        </vp-tabs>
      </el-col>

      <el-col :lg="16">
        <vp-timeline title="工作计划" :data="dataTimeline"/>
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
  import VpTimeline from '../components/timeline/vp-timeline'
  import VpWeather from '../components/weather/vp-weather'
  import VpTabsItem from '../components/tabs/vp-tabs-item'
  import VpTabs from '../components/tabs/vp-tabs'

  export default {
    components: {
      VpTabs,
      VpTabsItem,
      VpWeather,
      VpTimeline,
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
        dataTimeline: [
          {
            date: '2017-7-15',
            time: '8:35 am',
            content: '起床上班'
          },
          {
            date: '2017-7-15',
            time: '9:35 am',
            content: '晨会'
          },
          {
            date: '2017-7-15',
            time: '10:35 am',
            content: '项目数据维护/更新'
          },
          {
            date: '2017-7-15',
            time: '12:00 am',
            content: '午餐'
          },
          {
            date: '2017-7-15',
            time: '15:40 pm',
            content: '项目测试/上线'
          }
        ],
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
