<template>
  <span>
    <draggable class="vp-todo-list" v-model="todo">
      <transition-group type="transition" name="flip-list">
        <li v-for="item in todo" :key="item.id">
          <span class="handle ui-sortable-handle">
            <i class="fa fa-ellipsis-v"></i>
            <i class="fa fa-ellipsis-v"></i>
          </span>
          <el-checkbox  v-model="item.state" :checked="item.state"/>
          <span class="text">{{item.name}}</span>
          <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
          <div class="tools">
            <i class="fa fa-edit"></i>
            <i class="fa fa-trash-o"></i>
          </div>
        </li>
      </transition-group>
    </draggable>
    <div class="vp-todo-list-footer">
      <el-button size="small" type="default"><i class="fa fa-plus"></i>添加</el-button>
    </div>
  </span>
</template>

<style>

</style>

<script>
  import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    props: {
      todo: {
        required: true,
        type: Array,
        default: []
      }
    },
    name: 'VpTodoList'
  }
</script>

