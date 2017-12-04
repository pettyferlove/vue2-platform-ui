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
    <vp-todo-list></vp-todo-list>
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
    name: 'VpUserToDoList'
  }
</script>

