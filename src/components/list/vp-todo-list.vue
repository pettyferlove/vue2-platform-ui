<template>
  <span>
    <ul class="vp-todo-list">

    <li style="" class="">
      <!-- drag handle -->
      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
      <!-- checkbox -->
      <input type="checkbox" value="">
      <!-- todo text -->
      <span class="text">Design a nice theme</span>
      <!-- Emphasis label -->
      <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
      <!-- General tools such as edit or delete-->
      <div class="tools">
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash-o"></i>
      </div>
    </li>

    <li style="" class="">
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
      <input type="checkbox" value="">
      <span class="text">Make the theme responsive</span>
      <small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>
      <div class="tools">
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash-o"></i>
      </div>
    </li>
    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
      <input type="checkbox" value="">
      <span class="text">Let theme shine like a star</span>
      <small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>
      <div class="tools">
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash-o"></i>
      </div>
    </li>
    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
      <input type="checkbox" value="">
      <span class="text">Let theme shine like a star</span>
      <small class="label label-success"><i class="fa fa-clock-o"></i> 3 days</small>
      <div class="tools">
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash-o"></i>
      </div>
    </li>
    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
      <input type="checkbox" value="">
      <span class="text">Check your messages and notifications</span>
      <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 week</small>
      <div class="tools">
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash-o"></i>
      </div>
    </li>
    <li>
                      <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
      <input type="checkbox" value="">
      <span class="text">Let theme shine like a star</span>
      <small class="label label-default"><i class="fa fa-clock-o"></i> 1 month</small>
      <div class="tools">
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash-o"></i>
      </div>
    </li>
  </ul>

    <div class="vp-todo-list-footer">
      <el-button size="small" type="default"><i class="fa fa-plus"></i>添加</el-button>
    </div>
  </span>
</template>

<style>

</style>

<script>
  export default {
    name: 'VpTodoList'
  }
</script>

