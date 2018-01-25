<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-panel vp-timeline">
      <el-row type="flex" justify="center" class="panel-heading">
        {{ title }}
      </el-row>
      <ul class="panel-body">
        <li v-for="(item, index) in data">
          <el-row v-if="index%2 == 0" type="flex" justify="space-around">
            <div class="left">
              <div class="panel-body">
                <h4>{{ item.date }}</h4>
              </div>
            </div>
            <div class="split">
              <span class="dot-left"></span>
            </div>
            <div class="right">
              <div class="content panel-body">
                <h3>{{ item.time }}</h3>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </el-row>

          <el-row v-else type="flex" justify="space-around">
            <div class="left">
              <div class="content panel-body">
                <h3>{{ item.time }}</h3>
                <p>{{ item.content }}</p>
              </div>
            </div>
            <div class="split">
              <span class="dot-right"></span>
            </div>
            <div class="right">
              <div class="panel-body">
                <h4>{{ item.date }}</h4>
              </div>
            </div>
          </el-row>
        </li>
      </ul>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'vp-timeline',
    props: {
      title: {
        type: String,
        default: '时间轴'
      },
      data: {
        type: Array,
        default: function () {
          return [
            {
              date: '2017年6月26日',
              time: '11:58 am',
              content: '完成VpManager时间轴组件'
            }
          ]
        }
      }
    }
  }
</script>
