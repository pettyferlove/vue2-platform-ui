<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-panel" :style="{ backgroundColor: bgColor }" :class="{ bgStyle: bgColor }">
      <div v-if="title" class="panel-heading" :style="{ backgroundColor: hdColor }" :class="{ bgStyle: hdColor }">
        {{ title }}
      </div>
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  </el-card>
</template>
<script>
  export default {
    name: 'VpPanel',
    props: {
      title: {
        type: String,
        default: ''
      },
      bgColor: {
        type: String,
        default: ''
      },
      hdColor: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="less" scoped>
  .bgStyle{
    color: rgba(255,255,255,0.8);
    .panel-heading{
      border-bottom: 1px solid rgba(255,255,255,0.3);
    }
  }
  .hdStyle{
    color: rgba(255,255,255,0.8);
  }
</style>
