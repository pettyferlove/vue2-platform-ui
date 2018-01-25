<template>
  <el-card :body-style="{ padding: '0px' }">
    <div :class="[type === 'horizantal' ? 'vp-card-horizantal' : 'vp-card-vertical' , 'vp-panel']">
      <div class="card-img">
        <img :src="img" alt="">
        <div v-if="editable && type == 'vertical'" class="control">
        <span class="edit">
          <a :href="editUrl">
            <i class="fa fa-pencil"></i>
          </a>
        </span>
          <span class="delete" @click="dialogVisible=true">
            <i class="fa fa-trash"></i>
          </span>
        </div>
      </div>
      <div class="card-desc panel-body">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
        <a :href="detailUrl">
          more >
        </a>
      </div>

      <el-dialog
        :visible.sync="dialogVisible"
        title="Delete">
        Are you sure to delete this data?
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteOk">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </el-card>
</template>
<script>
  export default {
    name: 'vp-card',
    props: {
      type: {
        type: String,
        default: 'vertical'
      },
      editable: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Title'
      },
      img: {
        type: String,
        default: require('@/assets/img/img-1.jpg')
      },
      desc: {
        type: String,
        default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
      },
      detailUrl: {
        type: String,
        default: '#'
      },
      editUrl: {
        type: String,
        default: '#'
      }
    },
    data: function () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      deleteOk: function () {
        this.$emit('delete-ok')
      }
    }
  }
</script>
