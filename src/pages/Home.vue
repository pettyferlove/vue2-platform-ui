<template>
  <div id="home" class="home">
    <aside :class="[classes]">
      <el-menu
        :default-active="$route.path"
        :collapse="collapsed"
        unique-opened
        :router="true">
        <div class="menu-header">
          <div class="logo" :style="{width: collapsed?'64px':'210px'}">
            <div class="logo-group">
              <img src="../assets/logo.png" height="30" alt="">
              <span v-show="!collapsed">
              <span class="logo-title-light">VUE</span>PettyDev
            </span>
            </div>
          </div>
        </div>
        <el-menu-item index="/">
          <i class="fa fa-dashboard"></i>
          <span slot="title">仪表盘</span>
        </el-menu-item>
        <el-menu-item index="/widget">
          <i class="fa fa-cogs"></i>
          <span slot="title">小组件</span>
        </el-menu-item>
        <el-menu-item index="/panels">
          <i class="fa fa-database"></i>
          <span slot="title">面板</span>
        </el-menu-item>
        <el-submenu index="editor">
          <template slot="title">
            <i class="fa fa-pencil"></i>
            <span slot="title">编辑器</span>
          </template>
          <el-menu-item index="/quillEditor">
            <i class="fa fa-pencil"></i>
            <span slot="title">Quill-Editor</span>
          </el-menu-item>
          <el-menu-item index="/simplemdeEditor">
            <i class="fa fa-pencil"></i>
            <span slot="title">Simplemde</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/imageList">
          <i class="fa fa-photo"></i>
          <span slot="title">图片列表</span>
        </el-menu-item>
        <el-menu-item index="/charts">
          <i class="fa fa-bar-chart"></i>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-submenu index="ui">
          <template slot="title">
            <i class="fa fa-anchor"></i>
            <span slot="title">UI元素</span>
          </template>
          <el-menu-item index="/icons">
            <i class="fa fa-font"></i>
            <span slot="title">字体图标</span>
          </el-menu-item>
          <el-menu-item index="/icons">
            <i class="fa fa-font"></i>
            <span slot="title">字体图标</span>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title">
            <i class="fa fa-database"></i>
            <span slot="title">数据表格</span>
          </template>
          <el-menu-item index="/basicTable">
            <i class="fa fa-hdd-o"></i>
            <span slot="title">基础表格</span>
          </el-menu-item>
          <el-menu-item index="/editableTable">
            <i class="fa fa-bars"></i>
            <span slot="title">可编辑表格</span>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="9">
          <template slot="title">
            <i class="fa fa-file"></i>
            <span slot="title">页面</span>
          </template>
          <el-menu-item index="/login">
            <i class="fa fa-mouse-pointer"></i>
            <span slot="title">登录页</span>
          </el-menu-item>
          <el-menu-item index="/lockScreen">
            <i class="fa fa-cogs"></i>
            <span slot="title">锁屏</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </aside>
    <el-row class="content-wrapper" :style="{paddingLeft: collapsed?'64px':'210px'}">
      <el-row class="header" type="flex" align="middle">
        <span style="margin-left: 20px" @click="toggleEvent">
          <i :class="toggleButton"></i>
        </span>
        <div class="avator-con">
          <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
            <i class="btn fa fa-expand" @click="handleFullScreen"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
            <i class="btn fa fa-lock"></i>
          </el-tooltip>
          <vp-msg-push class="message-push" :data="msgPushData" trigger="click"></vp-msg-push>
          <vp-user-panel class="user-avator" :adminInfo="adminInfo"></vp-user-panel>
        </div>
      </el-row>
      <petty-scroll>
        <div class="main-content" id="main-content">
          <div style="overflow: hidden">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </petty-scroll>
    </el-row>
  </div>
</template>

<script>
  import VpMsgPush from '../components/message/vp-message-push.vue'
  import VpUserPanel from '../components/user/vp-user-panel.vue'
  import { mapGetters, mapMutations } from 'vuex'
  /* eslint-disable no-useless-computed-key */
  export default {
    components: {
      VpUserPanel,
      VpMsgPush
    },
    name: 'home',
    methods: {
      ...mapMutations({
        'toggleEvent': 'toggleMenu'
      }),
      handleFullScreen () {
        let screen = document.getElementById('home')
        if (this.isFullScreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        } else {
          if (screen.requestFullscreen) {
            screen.requestFullscreen()
          } else if (screen.webkitRequestFullScreen) {
            screen.webkitRequestFullScreen()
          } else if (screen.mozRequestFullScreen) {
            screen.mozRequestFullScreen()
          } else if (screen.msRequestFullscreen) {
            screen.msRequestFullscreen()
          }
        }
      }
    },
    data () {
      return {
        isFullScreen: false,
        adminInfo: {
          image: require('@/assets/img/user-petty.jpg'),
          name: 'Pettyfer'
        },
        msgPushData: [
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'Vuex状态管理器添加'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'Element UI更新至最新版本'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: 'PettyScrollbar添加'
          },
          {
            image: require('@/assets/img/user-petty.jpg'),
            from: 'Pettyfer',
            time: '2017-1-8',
            message: '增加页面加载滚动条'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        collapsed: 'toggleMenu'
      }),
      classes () {
        return {
          ['sidebar']: true
        }
      },
      toggleButton () {
        return [
          'fa',
          'fa-bars',
          'toggle-button',
          this.collapsed ? '' : 'toggle-button--collapse'
        ]
      }
    },
    mounted () {
      // 监听全屏事件更改状态值
      document.addEventListener('fullscreenchange', () => {
        this.isFullScreen = !this.isFullScreen
      })
      document.addEventListener('mozfullscreenchange', () => {
        this.isFullScreen = !this.isFullScreen
      })
      document.addEventListener('webkitfullscreenchange', () => {
        this.isFullScreen = !this.isFullScreen
      })
      document.addEventListener('msfullscreenchange', () => {
        this.isFullScreen = !this.isFullScreen
      })
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
        offset: 60
      })
    }
  }
</script>
