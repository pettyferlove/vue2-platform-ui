<template>
  <div class="vp-open-tags">
    <div class="vp-open-tags-close">
<!--      <el-dropdown size="mini" split-button type="primary">
        超小尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->

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
    <div class="vp-open-tags-body">
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
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'VpOpenTags'
  }
</script>

