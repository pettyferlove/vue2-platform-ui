<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-state-overview" type="flex">
      <el-col :span="10" class="symbol" :style="{ backgroundColor: color }">
        <i :class="icon"></i>
      </el-col>
      <el-col :span="14" class="value">
        <vp-count-up :idName="idName" :endVal="count" class="count" :style="{ color: color }"></vp-count-up>
        <p class="title">{{ title }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import VpCountUp from '../common/vp-count-up.vue'

  export default {
    components: {VpCountUp},
    name: 'StateOverView',
    props: {
      idName: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    }
  }
</script>
