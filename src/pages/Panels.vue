<template>
  <div class="panels vp-content">
    <el-row :gutter="15">
      <el-col :span="12">
        <vp-panel title="默认面板">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel title="默认面板" bg-color="#2c2e2f">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel title="默认面板" bg-color="#41b883">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel title="默认面板" bg-color="#1d8ce0">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>

      <el-col :span="12">
        <vp-panel>
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel>
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>

      <el-col :span="12">
        <vp-panel title="默认面板" hd-color="#40bbea">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel title="默认面板" hd-color="#cc3f44">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel title="默认面板" hd-color="#8dc63f">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
      <el-col :span="12">
        <vp-panel title="默认面板" hd-color="#ffba00">
          通过 vp-panel 可以很简单地为面板加入一个标题容器。你也可以通过设置 title="" 属性，添加一个预定义样式的标题。 如果需要设置标题颜色请添加bg-color=""。
        </vp-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VpPanel from '../components/common/vp-panel.vue'
  export default {
    name: 'BasicTable',
    components: {
      VpPanel
    }
  }
</script>
