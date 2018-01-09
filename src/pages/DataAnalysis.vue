<template>
  <div class="dashboard vp-content">

    <el-row :gutter="15">
      <el-col :lg="6" :md="12">
        <vp-mini-analysis-text/>
      </el-col>
      <el-col :lg="6" :md="12">
        <vp-mini-analysis-line/>
      </el-col>
      <el-col :lg="6" :md="12">
        <vp-mini-analysis-area/>
      </el-col>
      <el-col :lg="6" :md="12">
        <vp-mini-analysis-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpMiniAnalysisText from '../components/analysis/vp-mini-analysis-text.vue'
  import VpMiniAnalysisLine from '../components/analysis/vp-mini-analysis-line.vue'
  import VpMiniAnalysisArea from '../components/analysis/vp-mini-analysis-area.vue'
  import VpMiniAnalysisBar from '../components/analysis/vp-mini-analysis-bar.vue'

  export default {
    name: 'DataAnalysis',
    components: {
      VpMiniAnalysisBar,
      VpMiniAnalysisArea,
      VpMiniAnalysisLine,
      VpMiniAnalysisText
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">

</style>
