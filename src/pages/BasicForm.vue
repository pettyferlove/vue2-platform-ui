<template>
  <div class="vp-content">
    <vp-panel title="基础表单">
      <el-form  style="padding: 30px 20% 30px 20%;" ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input size="small" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select size="small" v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker size="small" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker size="small" type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group size="small" v-model="form.type">
            <el-checkbox label="联谊活动" name="type"></el-checkbox>
            <el-checkbox label="部门活动" name="type"></el-checkbox>
            <el-checkbox label="户外活动" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="目标公开">
          <el-radio-group size="small" v-model="form.resource">
            <el-radio label="公开"></el-radio>
            <el-radio label="不公开"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input size="small" type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </vp-panel>
  </div>
</template>

<style>

</style>

<script>
  import VpPanel from '../components/common/vp-panel'

  export default {
    components: {VpPanel},
    name: 'BasicForm',
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

