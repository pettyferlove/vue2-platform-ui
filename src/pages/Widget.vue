<template>
  <div class="widget vp-content">
    <el-row style="margin-bottom: 10px">
      <vp-state-group :data="dataStateGroup">
      </vp-state-group>
    </el-row>
    <el-row :gutter="16">
      <el-col :lg="12">
        <vp-circle class="demo-circle" title="Oil capacity (L)" usedName="Consumed" :usedValue="70" restName="Rest" :restValue="20">
        </vp-circle>
      </el-col>
      <el-col :lg="12">
        <vp-circle class="demo-circle" title="Oil capacity (L)" usedName="Consumed" :usedValue="70" restName="Rest" :restValue="0">
        </vp-circle>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :lg="12">
        <vp-mesage-carousel :data="dataMessageCarouse1">
        </vp-mesage-carousel>
      </el-col>
      <el-col :lg="12">
        <vp-mesage-carousel :data="dataMessageCarouse1" :autoplay="false">
        </vp-mesage-carousel>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :lg="6" :md="12" v-for="item in dataCards1" :key="item.id">
        <vp-card :title="item.title" :img="item.img" :desc="item.desc" :detailUrl="item.detailUrl"/>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :lg="12" v-for="item in dataCards2" :key="item.id">
        <vp-card type="horizantal" :title="item.title" :img="item.img" :desc="item.desc" :detailUrl="item.detailUrl"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpStateGroup from '../components/state/vp-state-group.vue'
  import VpCircle from '../components/progress/vp-circle.vue'
  import VpMesageCarousel from '../components/message/vp-message-carousel.vue'
  import VpCard from '../components/common/vp-card.vue'

  export default {
    name: 'Widget',
    components: {
      VpCard,
      VpMesageCarousel,
      VpCircle,
      VpStateGroup
    },
    data: function () {
      return {
        dataCards1: [
          {
            id: '1234567981',
            title: 'Title',
            img: require('@/assets/img/img-1.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '1234567982',
            title: 'Title',
            img: require('@/assets/img/img-2.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '1234567983',
            title: 'Title',
            img: require('@/assets/img/img-3.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '1234567984',
            title: 'Title',
            img: require('@/assets/img/img-4.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          }
        ],
        dataCards2: [
          {
            id: '6541231',
            title: 'Title',
            img: require('@/assets/img/img-l-1.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          },
          {
            id: '6541232',
            title: 'Title',
            img: require('@/assets/img/img-l-2.jpg'),
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            detailUrl: '#'
          }
        ],
        dataStateGroup: [
          {
            title: 'Page Views',
            icon: 'fa fa-eye',
            value: '666',
            color: '#41b883'
          },
          {
            title: 'New Users',
            icon: 'fa fa-user',
            value: '666',
            color: '#428bca'
          },
          {
            title: 'Comments',
            icon: 'fa fa-pencil',
            value: '666',
            color: '#f60000'
          },
          {
            title: 'Downloads',
            icon: 'fa fa-download',
            value: '666',
            color: '#ffa000'
          },
          {
            title: 'Images',
            icon: 'fa fa-photo',
            value: '666',
            color: '#656565'
          }
        ],
        dataMessageCarouse1: [
          {
            title: 'Hello Everyone',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
            photo: require('@/assets/img/user-petty.jpg'),
            name: 'Millian Li'
          },
          {
            title: 'Thank you very much',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus',
            photo: require('@/assets/img/user-petty.jpg'),
            name: 'Micle jay'
          }
        ]
      }
    }
  }
</script>
