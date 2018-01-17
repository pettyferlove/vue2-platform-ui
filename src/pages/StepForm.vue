<template>
  <div class="vp-content">
    <vp-panel title="分布表单">
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字">

        </el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字">

        </el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字">

        </el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字">

        </el-step>
      </el-steps>
    </vp-panel>
  </div>
</template>

<style>

</style>

<script>
  import VpPanel from '../components/common/vp-panel'

  export default {
    components: {VpPanel},
    name: 'StepForm'
  }
</script>

