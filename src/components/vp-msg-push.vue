<template>
  <el-dropdown :trigger="trigger" :menu-align="align" class="vp-msg-push-badge">
    <el-badge :value="data.length" class="vp-badge">
      <i class="fa fa-bell"></i>
    </el-badge>
    <el-dropdown-menu slot="dropdown" class="vp-msg-push">
      <el-dropdown-item>You have {{ data.length }} message!</el-dropdown-item>
      <el-dropdown-item divided v-for="item in data" :key="item.id">
        <img :src="item.image" height="40" alt="">
        <div class="subject">
              <span class="title">
                <span class="from">{{ item.from }}</span>
                <span class="time">{{ item.time }}</span>
              </span>
          <p class="message">{{ item.message }}</p>
        </div>
      </el-dropdown-item>
      <el-dropdown-item divided>view more message</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    name: 'VpMsgPush',
    props: {
      align: {
        type: String,
        default: 'start'
      },
      trigger: {
        type: String,
        default: 'click'
      },
      data: Array
    }
  }
</script>
