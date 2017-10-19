<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-carousel v-model="value" dots="none" class="vp-message-carousel" :autoplay="autoplay">
      <el-carousel-item v-for="item in data" :key="item.id">
        <div class="item vp-panel">
          <div class="carousel-main">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
          <div class="from">
            <img :src="item.photo" alt="">
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>
<script>
  export default {
    name: 'VpMesageCarousel',
    props: {
      data: {
        type: Array,
        default: function () {
          return [
            {
              title: 'Tilte',
              content: 'VpMesageCarousel Content',
              photo: require('@/assets/img/user-petty.jpg'),
              name: 'Jesse Luo'
            }
          ]
        }
      },
      autoplay: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
      return {
        value: 0
      }
    }
  }
</script>
