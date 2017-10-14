<template>
  <div class="dashboard vp-content">
    <el-row :gutter="15">
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#41b883" icon="fa fa-user" title="New Users" count="996"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#1d8ce0" icon="fa fa-eye" title="Page Views" count="109009"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#ffa000" icon="fa fa-pencil" title="Comments" count="1010"></vp-state-over-view>
      </el-col>
      <el-col :lg="6" :md="12">
      <vp-state-over-view color="#f60000" icon="fa fa-download" title="Downloads" count="9960"></vp-state-over-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpStateOverView from '../components/vp-state-overview.vue'

  export default {
    name: 'Dashboard',
    components: {
      VpStateOverView
    },
    data () {
      return {
        dataUserPreview: {
          brief: {
            photo: require('@/assets/img/user-petty.jpg'),
            name: 'Angla Cool',
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
