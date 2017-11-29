<template>
  <div id="main" class="main">
    <aside :class="[classes]">
      <vp-sidebar-menu :menuData="menuList" :isCollapse="collapsed"></vp-sidebar-menu>
    </aside>
    <el-row class="main-wrapper" :style="{paddingLeft: collapsed?'64px':'210px'}">
      <el-row class="main-wrapper-header" type="flex" align="middle">
        <span @click="toggleEvent">
          <i :class="toggleButton"></i>
        </span>
        <vp-breadcrumb-nav></vp-breadcrumb-nav>
        <div class="avator-con">
          <vp-common-search></vp-common-search>
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
      <!--TODO: 屏蔽OpenTags 可选择开启，开启需在common-style 将open-tags-height调整至合适值即可-->
      <!--<el-row class="main-wrapper-tags">
        <vp-open-tags></vp-open-tags>
      </el-row>-->
      <petty-scroll>
        <div class="main-wrapper-main" id="main-content">
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
  import VpSidebarMenu from '../components/menu/vp-sidebar-menu.vue'
  import VpBreadcrumbNav from '../components/common/vp-breadcrumb-nav.vue'
  import VpOpenTags from '../components/common/vp-open-tags.vue'
  import { mapGetters, mapMutations } from 'vuex'
  import VpCommonSearch from '../components/common/vp-common-search.vue'

  /* eslint-disable no-useless-computed-key */
  export default {
    components: {
      VpCommonSearch,
      VpOpenTags,
      VpBreadcrumbNav,
      VpSidebarMenu,
      VpUserPanel,
      VpMsgPush
    },
    name: 'Main',
    methods: {
      ...mapMutations({
        'toggleEvent': 'toggleMenu',
        'setToggleMenu': 'setToggleMenu'
      }),
      handleFullScreen () {
        let screen = document.getElementById('main')
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
    created () {
      this.$store.commit('updateMenuList')
    },
    watch: {
      // 检测Router改变并映射到面包屑组件
      '$route' (to) {
        this.$store.commit('updateOpenPageList', to.path)
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
        collapsed: 'getToggleMenu',
        menuList: 'getMenuList'
      }),
      classes () {
        return {
          ['main-sidebar']: true
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
      let that = this
      // 初始化面包屑
      this.$store.commit('updateOpenPageList', this.$route.path)
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
      let screen = document.getElementById('main')
      window.addEventListener('resize', function () {
        if (screen.offsetWidth < 765) {
          that.setToggleMenu(true)
        } else if (screen.offsetWidth > 1376) {
          that.setToggleMenu(false)
        }
      })
    }
  }
</script>
