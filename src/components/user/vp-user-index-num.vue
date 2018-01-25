<template>
  <vp-panel title="个人指数" class="vp-user-index">
    <vp-mini-radar/>
    <el-row>
      <el-col :span="8">
        <div class="legend">
          <p>
            <span class="dot" style="background-color: rgb(24, 144, 255);"></span>
            <span>个人</span>
          </p>
          <h6>34</h6></div>
      </el-col>
      <el-col :span="8">
        <div class="legend">
          <p>
            <span class="dot" style="background-color: rgb(250, 204, 20);"></span>
            <span>团队</span>
          </p>
          <h6>34</h6></div>
      </el-col>
      <el-col :span="8">
        <div class="legend">
          <p>
            <span class="dot" style="background-color: rgb(47, 194, 91);"></span>
            <span>部门</span>
          </p>
          <h6>34</h6></div>
      </el-col>
    </el-row>
  </vp-panel>
</template>

<style>

</style>

<script>
  import VpPanel from '../common/vp-panel.vue'
  import VpMiniRadar from '../chart/g2/vp-mini-radar.vue'

  export default {
    components: {
      VpMiniRadar,
      VpPanel
    },
    name: 'vp-user-index-num'
  }
</script>

