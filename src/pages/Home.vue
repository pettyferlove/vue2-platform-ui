<template>
  <div class="home">
    <aside :class="[classes]">
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
      <el-menu class="menu-content" :default-active="$route.path" theme="dark" :collapse="collapsed" unique-opened :router="true">
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
        <el-menu-item index="4">
          <i class="fa fa-pencil"></i>
          <span slot="title">编辑器</span>
        </el-menu-item>
        <el-menu-item index="/imageList">
          <i class="fa fa-photo"></i>
          <span slot="title">图片列表</span>
        </el-menu-item>
        <el-menu-item index="/charts">
          <i class="fa fa-bar-chart"></i>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-submenu index="7">
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
          <el-menu-item index="/login">
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
    <el-row class="main" :style="{paddingLeft: collapsed?'64px':'210px'}">
      <el-row class="header" type="flex" align="middle">
        <span style="margin-left: 20px" @click="toggleClick">
          <i :class="toggleButton"></i>
        </span>
        <div class="avator-con">
          <vp-msg-push class="message-push" :data="msgPushData" trigger="click"></vp-msg-push>
          <vp-user-panel class="user-avator" :adminInfo="adminInfo"></vp-user-panel>
        </div>
      </el-row>
      <section class="main-content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </el-row>
  </div>
</template>

<script>
  import VpMsgPush from '../components/message/vp-message-push.vue'
  import VpUserPanel from '../components/user/vp-user-panel.vue'
  /* eslint-disable no-useless-computed-key */
  export default {
    components: {
      VpUserPanel,
      VpMsgPush},
    name: 'home',
    methods: {
      toggleClick () {
        const isCollapsed = this.collapsed
        this.collapsed = !isCollapsed
      }
    },
    data () {
      return {
        collapsed: true,
        adminInfo: {
          image: require('@/assets/img/user-petty.jpg'),
          name: 'Pettyfer'
        },
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
      },
      toggleButton () {
        return [
          'fa',
          'fa-bars',
          'toggle-button',
          this.collapsed ? '' : 'toggle-button--collapse'
        ]
      }
    }
  }
</script>
