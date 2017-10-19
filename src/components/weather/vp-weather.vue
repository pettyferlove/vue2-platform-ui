<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-weather vp-panel">
      <el-row class="top" type="flex" justify="space-around" align="middle">
        <div>
          <i class="fa fa-cloud"></i>
          <p class="location">{{ data.location }}</p>
        </div>
        <div class="temprature">
          {{ data.temprature }}
        </div>
      </el-row>
      <el-row class="bottom" type="flex" justify="space-around">
        <el-row span="8">
        <span>Humidity</span>
        <p>{{ data.humidity }}</p>
        </el-row>
        <el-row span="8">
        <span>Percip</span>
        <p>{{ data.percip }}</p>
        </el-row>
        <el-row span="8">
        <span>Winds</span>
        <p>{{ data.winds }}</p>
        </el-row>
      </el-row>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'VpWeather',
    props: ['data']
  }
</script>
