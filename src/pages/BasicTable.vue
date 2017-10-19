<template>
  <div class="basic-table vp-margin vp-content">
    <vp-table title="Basic Table" :data="dataTable"></vp-table>
  </div>
</template>

<script>
  import VpTable from '../components/table/vp-table'
  export default {
    name: 'BasicTable',
    components: {
      VpTable
    },
    data () {
      return {
        dataTable: [
          {
            id: '65416843154',
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            id: '65416843654',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416843194',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65416843150',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '65416843150',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416843114',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65416843114',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '25416843154',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65456843154',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          },
          {
            id: '65416843114',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            id: '65416343154',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            id: '65419843154',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
