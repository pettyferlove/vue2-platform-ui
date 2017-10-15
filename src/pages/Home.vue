<template>
  <div class="home">
    <el-row class="header" type="flex" align="middle">
      <div class="logo">
        <img src="../assets/logo.png" height="30" alt="">
        <span>VUE</span>PettyDev
      </div>
      <vp-msg-push style="margin-left:20px" :data="msgPushData" trigger="click"></vp-msg-push>
        <span style="margin-left: 20px" @click="toggleClick">
          <i class="fa fa-bars"></i>
        </span>
      <vp-user-panel></vp-user-panel>
    </el-row>
    <el-row class="main">
      <aside :class="[classes]">
        <el-menu default-active="1" theme="dark" :collapse="collapsed" unique-opened>
          <el-menu-item index="1" @click="$router.push('/')">
            <i class="fa fa-dashboard"></i>
            <span slot="title">仪表盘</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push('widget')">
            <i class="fa fa-cogs"></i>
            <span slot="title">小组件</span>
          </el-menu-item>
          <el-menu-item index="3" @click="$router.push('panels')">
            <i class="fa fa-database"></i>
            <span slot="title">面板</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="fa fa-pencil"></i>
            <span slot="title">编辑器</span>
          </el-menu-item>
          <el-menu-item index="5" @click="$router.push('imageList')">
            <i class="fa fa-photo"></i>
            <span slot="title">图片列表</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="fa fa-bar-chart"></i>
            <span slot="title">图表</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="fa fa-anchor"></i>
            <span slot="title">UI元素</span>
          </el-menu-item>

          <el-submenu index="8">
            <template slot="title">
              <i class="fa fa-database"></i>
              <span slot="title">数据表格</span>
            </template>
            <el-menu-item index="8-1">
              <i class="fa fa-hdd-o"></i>
              <span slot="title">基础表格</span>
            </el-menu-item>
            <el-menu-item index="8-2">
              <i class="fa fa-bars"></i>
              <span slot="title">可编辑表格</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="9">
            <template slot="title">
              <i class="fa fa-file"></i>
              <span slot="title">页面</span>
            </template>
            <el-menu-item index="9-1">
              <i class="fa fa-mouse-pointer"></i>
              <span slot="title">登录页</span>
            </el-menu-item>
            <el-menu-item index="9-2">
              <i class="fa fa-cogs"></i>
              <span slot="title">锁屏</span>
            </el-menu-item>
            <el-menu-item index="9-3">
              <i class="fa fa-minus"></i>
              <span slot="title">加载中</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </aside>
      <section class="main-content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <footer class="main-footer">
          <strong>Copyright &copy; 2016-2017 Pettyfer.</strong> All rights
          reserved.
          <div>
            <b><a href="https://github.com/pettyferlove/vue2-platform-ui.git" target="_blank"><i class="fa fa-github"></i></a></b>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <b>Version</b> 1.0.0
          </div>
        </footer>
      </section>
    </el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import VpMsgPush from '../components/vp-msg-push.vue'
  import VpUserPanel from '../components/vp-user-panel.vue'
  /* eslint-disable no-useless-computed-key */
  export default {
    components: {
      VpUserPanel,
      VpMsgPush,
      ElRow},
    name: 'home',
    methods: {
      toggleClick () {
        const isCollapsed = this.collapsed
        this.collapsed = !isCollapsed
      }
    },
    data () {
      return {
        collapsed: false,
        msgPushData: [
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'I like your website very much!'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'I like your website very much!'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'I like your website very much!'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'I like your website very much!'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'I like your website very much!'
          }
        ]
      }
    },
    computed: {
      classes () {
        return {
          ['sidebar']: true
        }
      }
    }
  }
</script>
