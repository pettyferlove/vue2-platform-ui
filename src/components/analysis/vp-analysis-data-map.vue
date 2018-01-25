<template>
  <el-card :body-style="{ padding: '0px' }" class="analysis-data-map">
    <vp-panel>
      <el-tabs v-model="activeName">
        <el-tab-pane label="销售额" name="first">销售额</el-tab-pane>
        <el-tab-pane label="访问量" name="second">访问量</el-tab-pane>
      </el-tabs>
    </vp-panel>
  </el-card>
</template>

<script>
  import VpPanel from '../common/vp-panel'

  export default {
    components: {VpPanel},
    name: 'vp-analysis-data-map',
    data () {
      return {
        activeName: 'first'
      }
    }
  }
</script>

<style scoped>

</style>
