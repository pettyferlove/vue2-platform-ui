<template>
  <el-card :body-style="{ padding: '0px' }" class="analysis-card">
    <div class="analysis-card-container">
      <div class="analysis-card-container-title"><span>总销售额</span>
        <span class="analysis-card-container-title-tip">
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <i class="fa fa-info-circle"></i>
          </el-tooltip>
        </span>
      </div>
      <div class="analysis-card-container-body">
        <vp-count-up :isUnit="false" idName="als-bar" :endVal="1320" class="count" style="color:#000000"></vp-count-up>
      </div>
      <div class="analysis-card-container-als-area" style="height: 46px;">
        <div class="analysis-card-container-als-area-content">
          <div class="mini-chart" style="height: 46px">
            <div :id="this.id" style="" class="chart-content"></div>
          </div>
        </div>
      </div>
      <div class="analysis-card-container-footer">
        <div class="analysis-card-container-footer-content"><span>日均销售额</span><span>￥12,423</span></div>
      </div>
    </div>
  </el-card>
</template>

<style>

</style>

<script>
  import VpCountUp from '../common/vp-count-up.vue'

  export default {
    components: {VpCountUp},
    name: 'VpMiniAnalysisBar',
    computed: {
      // 随机数+时间戳防止ID重复
      id: function () {
        return parseInt(Math.random() * 1000000) + '_' + new Date().getTime()
      }
    }
  }
</script>

