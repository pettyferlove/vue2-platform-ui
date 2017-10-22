<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-table vp-panel">
      <div class="panel-heading">
        {{ title }}
      </div>
      <div class="panel-body">
        <el-row type="flex" justify="space-between" class="control">
          <div class="table-style">
            <h3>条纹</h3>
            <el-switch v-model="showStripe" style="margin: 0 30px 0 10px"></el-switch>
          </div>
          <div class="search-bar">
            <el-input placeholder="Please enter ..." v-model="keyword" style="width: 300px"></el-input>
            <el-button type="ghost" @click="search"><i class="fa fa-search"></i></el-button>
          </div>
        </el-row>
        <div class="edit" v-if="type === 'edit'">
          <el-button @click="addDialogVisible = true" ><i class="fa fa-plus"></i> 新增</el-button>
          <el-button  :disabled="deleteDisabled" @click="deleteDialogVisible = true"><i class="fa fa-trash"></i> 删除</el-button>
        </div>
        <el-table :stripe="showStripe" :size="tableSize" :data="dataShow" @selection-change="selectChange" highlight-current-row @current-change="handleCurrentChange">
          <el-table-column type="selection" width="55" v-if="type === 'edit'"></el-table-column>
          <el-table-column v-for="item in columns" :label="item.title" :prop="item.key" :key="item.id" :sortable="item.sort"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="space-between" class="footer">
          <div class="info-bar">
            Show<el-input-number size="small" class="input-number" v-model="showNum" :max="data.length" :min="1" @change="updateDataShow">{{ showNum }}</el-input-number>/ Page
          </div>
          <div class="page">
            <span class="total">Total {{ data.length }}</span>
            <el-pagination :total="data.length" :current-page="currentPage" :page-size="showNum" @current-change="pageChange"></el-pagination>
          </div>
        </el-row>
      </div>
      <el-dialog
        :visible.sync="editDialogVisible"
        title="编辑数据">
        <el-form label-width="50">
          <el-form-item v-for="(value, key) in dataEdit" :label="convertKey(key)" :key="dataEdit.id">
            <el-input v-model="dataEdit[key]" :placeholder="'请输入' + key"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editOk">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="addDialogVisible"
        size="tiny"
        title="添加数据">
        <el-form label-width="50">
          <el-form-item v-for="item in columns" :label="item.title" :key="item.id">
            <el-input v-model="dataAdd[item.key]" :placeholder="'Please enter' + item.title"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addOk">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="deleteDialogVisible"
        size="tiny"
        title="删除数据">
        确认删除这条数据？
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteOk">确 定</el-button>
        </span>
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
      columns: Array,
      data: Array
    },
    data () {
      return {
        currentRow: null,
        addDialogVisible: false,
        editDialogVisible: false,
        deleteDialogVisible: false,
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
      handleCurrentChange (row) {
        this.currentRow = row
      },
      handleDelete: function (index, row) {
        this.dataDelete.push(row)
        this.deleteDialogVisible = true
      },
      handleEdit: function (index, row) {
        for (let i in row) {
          if (i !== '_index' && i !== '_rowKey') {
            this.dataEdit[i] = row[i]
          }
        }
        this.editDialogVisible = true
      },
      editOk: function () {
        this.$emit('edit-ok', this.dataEdit)
        this.editDialogVisible = false
      },
      addOk: function () {
        this.$emit('add-ok', this.dataAdd)
        this.addDialogVisible = false
      },
      deleteOk: function () {
        this.$emit('delete-ok', this.dataDelete)
        this.deleteDialogVisible = false
      },
      pageChange: function (page) {
        this.currentPage = page
        this.updateDataShow(this.showNum)
      },
      updateDataShow: function (num) {
        this.showNum = num
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
