<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row type="flex" align="middle" class="vp-circle vp-panel">
      <el-col :span="12">
        <el-progress type="circle" :percentage="percent">
          <span style="font-size:24px">{{ percent }}%</span>
        </el-progress>
      </el-col>
      <el-col :span="12">
        <div class="desc">
          <h2 class="title">{{ title }}</h2>
          <p>{{ usedName }}：{{ usedValue }}</p>
          <p>{{ restName }}：{{ restValue }}</p>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    name: 'vp-circle',
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      usedName: {
        type: String,
        default: 'Used'
      },
      usedValue: {
        type: Number,
        default: 80
      },
      restName: {
        type: String,
        default: 'Rest'
      },
      restValue: {
        type: Number,
        default: 20
      }
    },
    computed: {
      percent: function () {
        return parseInt(this.usedValue / (this.usedValue + this.restValue) * 100)
      }
    }
  }
</script>
