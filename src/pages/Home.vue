<template>
  <div class="dashboard vp-content">
    <el-row :gutter="15">
      <el-col :lg="6" :md="12">
      <vp-state-over-view idName="new-user" color="#41b883" icon="fa fa-user" title="新增用户" :count="996"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view idName="page-view" color="#1d8ce0" icon="fa fa-eye" title="访问量" :count="109009"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view idName="suggest" color="#ffa000" icon="fa fa-pencil" title="意见" :count="1010"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view idName="download-num" color="#f60000" icon="fa fa-download" title="下载量" :count="9960"></vp-state-over-view>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="6">
        <vp-user-preview :brief="dataUserPreview.brief" :property="dataUserPreview.property"></vp-user-preview>
      </el-col>
      <el-col :lg="18">
        <vp-progress title="工作进度" :data="dataProgress"></vp-progress>
      </el-col>
    </el-row>

    <el-row :gutter="16">
      <el-col :lg="16">
      <vp-timeline title="时间轴" :data="dataTimeline"></vp-timeline>
      </el-col>

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
    </el-row>
  </div>
</template>

<script>
  import VpStateOverView from '../components/state/vp-state-overview.vue'
  import VpUserPreview from '../components/user/vp-user-preview.vue'
  import VpProgress from '../components/progress/vp-progress.vue'
  import VpTimeline from '../components/timeline/vp-timeline.vue'
  import VpTabs from '../components/tabs/vp-tabs.vue'
  import VpTabsItem from '../components/tabs/vp-tabs-item.vue'
  import VpWeather from '../components/weather/vp-weather.vue'

  export default {
    name: 'Home',
    components: {
      VpWeather,
      VpTabsItem,
      VpTabs,
      VpTimeline,
      VpUserPreview,
      VpProgress,
      VpStateOverView
    },
    data () {
      return {
        dataUserPreview: {
          brief: {
            photo: require('@/assets/img/user-petty.jpg'),
            name: 'Pettyfer Alex',
            role: 'Administrator'
          },
          property: [
            {
              icon: 'fa fa-user',
              key: '性别',
              value: '男'
            },
            {
              icon: 'fa fa-heart',
              key: '关注',
              value: '9.8'
            },
            {
              icon: 'fa fa-envelope',
              key: '邮箱',
              value: 'pettyferlove@live.cn'
            },
            {
              icon: 'fa fa-calendar',
              key: '注册时间',
              value: '2017-8-9 8:00'
            },
            {
              icon: 'fa fa-calendar',
              key: '最后一次登陆',
              value: '2017-9-9 9:10'
            }
          ]
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
        ],
        dataTimeline: [
          {
            date: '2017-7-15',
            time: '8:35 am',
            content: 'Lorem ipsum dolor sit amet consiquest dio'
          },
          {
            date: '2017-7-15',
            time: '8:35 am',
            content: 'Lorem ipsum dolor sit amet consiquest dio'
          },
          {
            date: '2017-7-15',
            time: '8:35 am',
            content: 'Lorem ipsum dolor sit amet consiquest dio'
          },
          {
            date: '2017-7-15',
            time: '8:35 am',
            content: 'Lorem ipsum dolor sit amet consiquest dio'
          },
          {
            date: '2017-7-15',
            time: '8:35 am',
            content: 'Lorem ipsum dolor sit amet consiquest dio'
          }
        ],
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
