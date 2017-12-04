<template>
  <div class="vp-breadcrumb-nav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbList" :to="item.path" :key="item.name">{{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style>

</style>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'VpBreadcrumbNav',
    computed: {
      ...mapGetters({
        breadcrumbList: 'getBreadcrumbList'
      })
    }
  }
</script>

