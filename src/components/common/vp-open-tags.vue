<template>
  <div ref="scrollBody" class="vp-open-tags" @mousewheel="mouseHandler">
    <div class="vp-open-tags-close">
      <el-dropdown size="mini" placement="top">
        <el-button size="mini" type="primary">
          关闭操作<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>定位当前</el-dropdown-item>
          <el-dropdown-item divided>关闭其他</el-dropdown-item>
          <el-dropdown-item>关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div ref="scrollTags" class="vp-open-tags-body" :style="{left: tagBodyLeft + 'px'}">
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>仪表盘
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>组件
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="default"><span class="tag-dot-inner"
                                                                                        style="background: #409EFF"></span>面板
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>编辑器
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>图片列表
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>仪表盘
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>组件
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="default"><span class="tag-dot-inner"
                                                                                        style="background: #409EFF"></span>面板
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>编辑器
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>图片列表
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>仪表盘
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>组件
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="default"><span class="tag-dot-inner"
                                                                                        style="background: #409EFF"></span>面板
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>编辑器
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>图片列表
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>仪表盘
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="info"><span class="tag-dot-inner"></span>组件
      </el-tag>
      <el-tag class="vp-open-tags-body-tag" color="white" closable type="default"><span class="tag-dot-inner"
                                                                                        style="background: #409EFF"></span>面板
      </el-tag>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'VpOpenTags',
    data () {
      return {
        currentPageName: this.$route.name,
        tagBodyLeft: 0,
        currentScrollBodyWidth: 0,
        refsTag: [],
        tagsCount: 1
      }
    },
    methods: {
      mouseHandler (e) {
        let left = 0
        if (e.wheelDelta > 0) {
          left = Math.min(0, this.tagBodyLeft + e.wheelDelta)
        } else {
          if (this.$refs.scrollBody.offsetWidth - 110 < this.$refs.scrollTags.offsetWidth) {
            if (this.tagBodyLeft < -(this.$refs.scrollTags.offsetWidth - this.$refs.scrollBody.offsetWidth + 110)) {
              left = this.tagBodyLeft
            } else {
              left = Math.max(this.tagBodyLeft + e.wheelDelta, this.$refs.scrollBody.offsetWidth - this.$refs.scrollTags.offsetWidth - 110)
            }
          } else {
            this.tagBodyLeft = 0
          }
        }
        this.tagBodyLeft = left
      }
    }
  }
</script>

