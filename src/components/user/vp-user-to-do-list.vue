<template>
  <vp-panel title="待处理事项" class="vp-user-to-do-list">
    <div slot="other">
      <el-pagination
        background
        :page-size="5"
        layout="prev, pager, next"
        :total="20" @current-change="pageChange">
      </el-pagination>
    </div>
    <!--<petty-scroll>
      <div style="height: 300px">
        <div style="height: 1000px;">

        </div>
      </div>
    </petty-scroll>-->
    <vp-todo-list :todo="todoList"/>
  </vp-panel>
</template>

<style>

</style>

<script>
  import VpPanel from '../common/vp-panel.vue'
  import PettyScroll from '../../../node_modules/petty-scroll/src/petty-scroll/main.vue'
  import VpTodoList from '../list/vp-todo-list.vue'

  export default {
    components: {
      VpTodoList,
      PettyScroll,
      VpPanel},
    name: 'vp-user-to-do-list',
    data () {
      return {
        todoList: [
          // state待办事项当前处理状态 true已办 false为办
          {id: 1, name: '过程数据清洗', date: '2017-11-23 09:12:34', state: true},
          {id: 2, name: '项目数据清洗', date: '2017-12-01 05:11:34', state: false},
          {id: 3, name: '业务系统子账号系统', date: '2017-8-01 14:12:38', state: false},
          {id: 4, name: '内部权限效验系统改造', date: '2017-11-01 12:12:34', state: false},
          {id: 5, name: '微服务基础架构完善', date: '2017-11-08 18:08:34', state: false}
        ],
        // 需要显示的数据
        showData: []
      }
    },
    methods: {
      pageChange: function (page) {
        console.log(page)
        return null
      }
    }
  }
</script>

