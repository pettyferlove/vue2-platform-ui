<template>
  <vp-panel title="待处理事项" class="vp-user-to-do-list">
    <div slot="other">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="20">
      </el-pagination>
    </div>
    <!--<petty-scroll>
      <div style="height: 300px">
        <div style="height: 1000px;">

        </div>
      </div>
    </petty-scroll>-->
    <vp-todo-list :todo="todoList"></vp-todo-list>
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
    name: 'VpUserToDoList',
    data () {
      return {
        todoList: [
          // state待办事项当前处理状态 true已办 false为办
          {name: 'Design a nice theme', date: '2017-11-23 09:12:34', state: false},
          {name: 'Make the theme responsive', date: '2017-12-01 05:11:34', state: false},
          {name: 'Let theme shine like a star', date: '2017-8-01 14:12:38', state: false},
          {name: 'Check your messages and notifications', date: '2017-11-01 12:12:34', state: false},
          {name: 'Let theme shine like a star', date: '2017-11-08 18:08:34', state: false}
        ]
      }
    }
  }
</script>

