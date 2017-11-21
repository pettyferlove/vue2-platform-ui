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
        ¥ <vp-count-up idName="als-text" :endVal="126560" class="count" style="color:#000000"></vp-count-up>
      </div>
      <div class="analysis-card-container-als-text" style="height: 46px;">
        <div class="analysis-card-container-als-text-content">
          <div class="yony" title="" style="margin-right: 16px;">
            <span>周同比<span class="ratio">12%</span></span>
            <span class="arrow-red"><i class="el-icon-caret-top"></i></span>
          </div>
          <div class="yony" title="">
            <span>日环比<span class="ratio">11%</span></span>
            <span class="arrow-green"><i class="el-icon-caret-bottom"></i></span>
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
    name: 'VpMiniAnalysisText'
  }
</script>

