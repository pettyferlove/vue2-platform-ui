<template>
  <div ref="scrollBody" class="vp-open-tags" @mousewheel="mouseHandler">
    <div class="vp-open-tags-close">
      <el-dropdown size="small" placement="top">
        <el-button size="mini" type="primary">
          关闭操作<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关闭其他</el-dropdown-item>
          <el-dropdown-item>关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div ref="scrollTags" class="vp-open-tags-body" :style="{left: scrollLeft + 'px'}">
      <el-tag
        v-for="item in openTagsList"
        :key="item.name"
        class="vp-open-tags-body-tag"
        color="white"
        :closable="item.name==='home_index'?false:true"
        @click.native="switchPage(item)"
        type="info">
        <span class="tag-dot-inner" :style="{background: (item.name===currentTagName?'#409EFF':'')}"></span>
        {{item.title}}
      </el-tag>
      <!--<el-tag class="vp-open-tags-body-tag" color="white" closable type="default"><span class="tag-dot-inner"
                                                                                        style="background: #409EFF"></span>面板
      </el-tag>-->
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
        openTagsList: 'getOpenTagsList'
      })
    }
  }
</script>

