<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-user-preview vp-panel">
      <div class="panel-heading" style="padding: 15px">
        <img :src="brief.photo" height="90" alt="photo">
        <span class="title">
        <span class="name">{{ brief.name }}</span>
        <p class="role">{{ brief.role }}</p>
      </span>
      </div>
      <ul class="content">
        <li v-for="item in property" :key="item.id">
        <span>
          <i :class="item.icon"></i>
        </span>
          <span>
          {{ item.key }}
        </span>
          <span>
          {{ item.value }}
        </span>
        </li>
      </ul>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    name: 'vp-user-preview',
    props: {
      brief: {
        type: Object,
        default: function () {
          return {
            photo: require('@/assets/img/user-petty.jpg'),
            name: 'Pettyfer Alex',
            role: '普通用户'
          }
        }
      },
      property: {
        type: Array,
        default: function () {
          return [
            {
              icon: 'fa fa-user',
              key: '性别',
              value: '女'
            }
          ]
        }
      }
    }
  }
</script>
