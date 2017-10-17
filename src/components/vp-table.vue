<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-table vp-panel">
      <div class="panel-heading">
        {{ title }}
      </div>
      <div class="panel-body">
        <el-row type="flex" justify="space-between" class="control">
          <div class="table-style">
            <h3>Stripe</h3>
            <el-switch v-model="showStripe" style="margin: 0 30px 0 10px"></el-switch>
            <h3>Size</h3>
            <el-radio-group v-model="tableSize" size="small" style="margin-left: 10px">
              <el-radio-button  label="large">Large</el-radio-button>
              <el-radio-button  label="default">Default</el-radio-button>
              <el-radio-button  label="small">Small</el-radio-button>
            </el-radio-group>
          </div>
          <div class="search-bar">
            <el-input placeholder="Please enter ..." v-model="keyword" style="width: 300px"></el-input>
            <el-button type="ghost" @click="search"><i class="fa fa-search"></i></el-button>
          </div>
        </el-row>
        <div class="edit" v-if="type === 'edit'">
          <el-button @click="modalAdd = true" ><i class="fa fa-plus"></i> Add</el-button>
          <el-button  :disabled="deleteDisabled" @click="modalDelete = true"><i class="fa fa-trash"></i> Delete</el-button>
        </div>
        <el-table :stripe="showStripe" :size="tableSize" :data="dataShow" @on-selection-change="selectChange">
          <el-table-column prop="id" label="编号" sortable></el-table-column>
          <el-table-column prop="name" label="姓名" sortable></el-table-column>
          <el-table-column prop="age" label="年龄" sortable></el-table-column>
          <el-table-column prop="address" label="地址" sortable></el-table-column>
        </el-table>
        <el-row type="flex" justify="space-between" class="footer">
          <div class="info-bar">
            Show<el-input-number size="small" class="input-number" v-model="showNum" :max="data.length" :min="1" @on-change=" updateDataShow ">{{ showNum }}</el-input-number>/ Page
          </div>
          <div class="page">
            <span class="total">Total {{ data.length }}</span>
            <el-pagination :total="data.length" :current="currentPage" :page-size="showNum" @on-change="pageChange"></el-pagination>
          </div>
        </el-row>
      </div>
      <el-dialog
        v-model="modalEdit"
        title="Edit"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="editOk">
        <el-form :label-width="50">
          <el-form-item v-for="(value, key) in dataEdit" :label="convertKey(key)" :key="dataEdit.id">
            <el-input v-model="dataEdit[key]" :placeholder="'Please enter' + key"></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog
        v-model="modalAdd"
        title="Add"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="addOk">
        <el-form :label-width="50">
          <!--<el-form-item v-for="item in columns" :label="item.title" :key="item.id">
            <Input v-model="dataAdd[item.key]" :placeholder="'Please enter' + item.title"></Input>
          </el-form-item>-->
        </el-form>
      </el-dialog>
      <el-dialog
        v-model="modalDelete"
        title="Delete"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="deleteOk">
        Are you sure to delete this data?
      </el-dialog>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'VpTable',
    props: {
      title: {
        type: String,
        default: 'Basic Table'
      },
      type: String,
      data: Array
    },
    data () {
      return {
        deleteDisabled: true,
        dataShow: [],
        showNum: 10,
        showStripe: false,
        tableSize: 'default',
        currentPage: 1,
        keyword: '',
        modalEdit: false,
        modalAdd: false,
        modalDelete: false,
        dataEdit: {},
        dataDelete: [],
        dataAdd: {},
        formData: []
      }
    },
    methods: {
      editOk: function () {
        this.$emit('edit-ok', this.dataEdit)
      },
      addOk: function () {
        this.$emit('add-ok', this.dataAdd)
      },
      deleteOk: function () {
        this.$emit('delete-ok', this.dataDelete)
      },
      pageChange: function (page) {
        this.currentPage = page
        this.updateDataShow()
      },
      updateDataShow: function () {
        let startPage = (this.currentPage - 1) * this.showNum
        let endPage = startPage + this.showNum
        this.dataShow = this.data.slice(startPage, endPage)
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
      selectChange: function (data) {
        this.dataDelete = data
      },
      remove: function (index) {
        this.dataShow.splice(index, 1)
      },
      renderOperate: function (h, params) {
        return h('div', [
          h('el-button', {
            props: {
              type: 'info',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                for (let i in params.row) {
                  if (i !== '_index' && i !== '_rowKey') {
                    this.dataEdit[i] = params.row[i]
                  }
                }
                this.modalEdit = true
              }
            }
          }, 'Edit'),
          h('el-button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: () => {
                this.dataDelete.push(params.row)
                this.modalDelete = true
              }
            }
          }, 'Delete')
        ])
      },
      convertKey: function (value) {
        let returnValue = value
        /* this.columns.forEach(function (elem) {
          for (let i in elem) {
            if (i === 'key' && elem[i] === value) {
              returnValue = elem.title
            }
          }
        }) */
        return returnValue
      }
    },
    watch: {
      data: function () {
        this.dataShow = this.data.slice(0, this.showNum)
      },
      dataDelete: function () {
        if (this.dataDelete.length === 0) {
          this.deleteDisabled = true
        } else {
          this.deleteDisabled = false
        }
      }
    },
    mounted: function () {
      this.dataShow = this.data.slice(0, this.showNum)
    }
  }
</script>
