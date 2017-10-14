<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-state-overview" type="flex">
      <el-col :span="10" class="symbol" :style="{ backgroundColor: color }">
      <i :class="icon"></i>
      </el-col>
      <el-col :span="14" class="value">
      <h1 class="count">{{ count }}</h1>
      <p>{{ title }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'StateOverView',
  props: ['color', 'icon', 'title', 'count']
}
</script>
