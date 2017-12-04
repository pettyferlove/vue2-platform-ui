<template>
  <div ref="scrollBody" class="vp-open-tags" @mousewheel="mouseHandler">
    <div class="vp-open-tags-close">
      <el-dropdown size="small" placement="top" @command="handleCommand">
        <el-button size="mini" type="primary">
          关闭操作<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
          <el-dropdown-item command="closeAll">关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div ref="scrollTags" class="vp-open-tags-body" :style="{left: scrollLeft + 'px'}">
      <!--TODO: 默认关闭按钮事件冒泡会触发子组件与父组件的事件，屏蔽之，重写@click.stop-->
      <!--TODO: Bug已提交至官方主项目，等待更新即可解决-->
      <el-tag
        v-for="item in openPageList"
        :key="item.name"
        :closable="item.name!=='home_index'"
        class="vp-open-tags-body-tag"
        color="white"
        @click.native="switchPage(item)"
        @close="closeTag(item)"
        type="info">
        <span class="tag-dot-inner" :style="{background: (item.name===currentTagName?'#409EFF':'')}"></span>
        {{item.title}}
      </el-tag>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'VpOpenTags',
    data () {
      return {
        scrollLeft: 0,
        currentTagName: this.$route.name
      }
    },
    methods: {
      closeTag (item) {
        // 关闭的Tag正处于当前激活状态，此时将会将激活标签移动至左起第一个标签（标签List大于1）
        if (item.name === this.currentTagName) {
          let leftTag = ''
          if (this.openPageList.length > 1) {
            let _tempIndex = 1
            this.openPageList.forEach((_item, index) => {
              if (_item.name === item.name) {
                _tempIndex = index
              }
            })
            leftTag = this.openPageList[_tempIndex - 1].name
          } else {
            leftTag = this.openPageList[0].name
          }
          this.$router.push({
            name: leftTag
          })
        }
        this.$store.commit('closeTag', item.name)
      },
      handleCommand (command) {
        if (command === 'closeAll') {
          this.$store.commit('closeAllTags')
        } else {
          this.$store.commit('closeOtherTags', this)
        }
        this.scrollLeft = 0
      },
      switchPage (item) {
        this.$router.push(item)
      },
      mouseHandler (e) {
        let left = 0
        if (e.wheelDelta > 0) {
          left = Math.min(0, this.scrollLeft + e.wheelDelta)
        } else {
          if (this.$refs.scrollBody.offsetWidth - 110 < this.$refs.scrollTags.offsetWidth) {
            if (this.scrollLeft < -(this.$refs.scrollTags.offsetWidth - this.$refs.scrollBody.offsetWidth + 110)) {
              left = this.scrollLeft
            } else {
              left = Math.max(this.scrollLeft + e.wheelDelta, this.$refs.scrollBody.offsetWidth - this.$refs.scrollTags.offsetWidth - 110)
            }
          } else {
            this.scrollLeft = 0
          }
        }
        this.scrollLeft = left
      }
    },
    watch: {
      '$route' (to) {
        this.currentTagName = to.name
      }
    },
    computed: {
      ...mapGetters({
        openPageList: 'getOpenPageList'
      })
    }
  }
</script>

