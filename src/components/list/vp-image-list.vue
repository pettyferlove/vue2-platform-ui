<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-image-list">
      <el-row class="image-list-heading vp-panel">
        <div class="panel-heading">
          {{ title }}
        </div>
        <el-row type="flex" align="middle" justify="space-between" class="panel-body">
          <div class="search-bar">
            <el-input placeholder="Please enter ..." v-model="keyword" style="width: 300px"></el-input>
            <el-button type="ghost" @click="search"><i class="fa fa-search"></i></el-button>
          </div>
          <el-row type="flex" align="middle" class="page">
            <span>Show</span>
            <el-input :maxlength="40" :minlength="1" :number="true" v-model="showNum" class="input-number" @change="updateDataShow"></el-input>
            <span class="margin-end">/ Page</span>
            <span class="total">Total {{ data.length }}</span>
            <el-pagination :total="data.length" :current-page="currentPage" :page-size="showNum" @current-change="pageChange"></el-pagination>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="image-list" :gutter="16">
        <el-col :lg="6" :sm="12" class="vp-margin" v-for="item in dataShow" :key="item.id">
          <vp-card :editable="true" :title="item.title" :img="item.img" :desc="item.desc" :detailUrl="item.detailUrl" :editUrl="item.editUrl" @delete-ok=" deleteOk(item) "></vp-card>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  import VpCard from '../common/vp-card.vue'
  export default {
    name: 'VpImageList',
    components: {
      VpCard
    },
    props: {
      title: {
        type: String,
        default: 'Image List'
      },
      // origin data
      data: {
        type: Array,
        default: function () {
          return [
            {
              id: '19920805',
              title: 'Title',
              img: require('@/assets/img/img-1.jpg'),
              desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ly dummy tly dummy tly dummy tly dummy tly dummy tly dummy t',
              to: '#'
            }
          ]
        }
      }
    },
    data: function () {
      return {
        keyword: '', // keyword for search
        dataShow: [], // data for showing
        showNum: 8, // number of item per page
        currentPage: 1
      }
    },
    methods: {
      updateDataShow: function () {
        this.showNum = parseInt(this.showNum)
        let startPage = (this.currentPage - 1) * this.showNum
        let endPage = startPage + this.showNum
        this.dataShow = this.data.slice(startPage, endPage)
      },
      pageChange: function (page) {
        this.showNum = parseInt(this.showNum)
        this.currentPage = page
        this.updateDataShow()
      },
      search: function () {
        let that = this
        let tempData = that.data
        that.dataShow = []
        tempData.forEach(function (elem) {
          for (let i in elem) {
            if (elem[i].toString().indexOf(that.keyword) > -1) {
              that.dataShow.push(elem)
              return
            }
          }
        })
      },
      deleteOk: function (data) {
        this.$emit('delete-ok', data)
      }
    },
    watch: {
      data: function () {
        this.dataShow = this.data.slice(0, this.showNum) // update dataShow once data changed
      }
    },
    mounted: function () {
      this.dataShow = this.data.slice(0, this.showNum)
    }
  }
</script>
