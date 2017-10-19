<template>
  <div class="dashboard vp-content">
    <el-row :gutter="15">
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#41b883" icon="fa fa-user" title="新增用户" count="996"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#1d8ce0" icon="fa fa-eye" title="访问量" count="109009"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#ffa000" icon="fa fa-pencil" title="意见" count="1010"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#f60000" icon="fa fa-download" title="下载量" count="9960"></vp-state-over-view>
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
        <vp-weather class="vp-margin" :data="dataWeather">
        </vp-weather>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpStateOverView from '../components/vp-state-overview.vue'
  import VpUserPreview from '../components/user/vp-user-preview.vue'
  import VpProgress from '../components/vp-progress.vue'
  import VpTimeline from '../components/vp-timeline.vue'
  import VpTabs from '../components/vp-tabs.vue'
  import VpTabsItem from '../components/vp-tabs-item.vue'
  import VpWeather from '../components/vp-weather.vue'

  export default {
    name: 'Dashboard',
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
              key: 'Sex',
              value: 'M'
            },
            {
              icon: 'fa fa-heart',
              key: 'Activity',
              value: '9.8'
            },
            {
              icon: 'fa fa-calendar',
              key: 'Register',
              value: '2017-8-9 8:00'
            },
            {
              icon: 'fa fa-calendar',
              key: 'Latest Login',
              value: '2017-9-9 9:10'
            }
          ]
        },
        dataProgress: [
          {
            name: 'Jesse Luo',
            tags: ['cool', 'funy'],
            value: 90
          },
          {
            name: 'Angla Cool',
            tags: ['nice', 'sexy', 'literature'],
            value: 30
          },
          {
            name: 'lele Wang',
            tags: ['mould', 'shy'],
            value: 80
          },
          {
            name: 'Jesse Ca',
            tags: ['funny', 'hardworking', 'learnd'],
            value: 20
          },
          {
            name: 'Jesse Lee',
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
