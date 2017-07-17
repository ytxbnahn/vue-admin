<template>
  <div class="container">
    <div class="query-head">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
      <el-button type="info" @click="dialogFormVisible = true">
        <i class="el-icon-plus"></i>添加菜单
      </el-button>
      <el-button type="danger" icon="delete">删除菜单</el-button>
    </div>
    <el-tree
      class="filter-tree"
      show-checkbox
      :data="menusData"
      :props="defaultProps"
      default-expand-all
      highlight-current
      :filter-node-method="filterNode"
      ref="menustree">
    </el-tree>
    <el-dialog title="添加菜单" :visible.sync="dialogFormVisible">
      <el-form :label-position="labelPosition" label-width="80px"  :model="form">
        <el-form-item label="父菜单">
          <el-select v-model="value8" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="filterText"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
 </div>
</template>

<style>
  .query-head{
    margin-top: 20px;
  }
  .query-head .el-row{
    margin-bottom: 0px;
  }
  .query-head .el-input{
    width: 20%;
    min-width: 150px;
    max-width: 300px;
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .query-head .el-button{
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .query-head .el-button+.el-button{
    margin-left: 0px;
  }
  .query-head .el-button i{
    margin-right: 5px;
  }
  .query-head .el-button span{
    margin-left: 0 !important;
  }
  .container form{
    padding: 0;
  }
  .container .el-select{
    width: 100%;
  }
  .el-pagination{
    margin: 20px 0;
    text-align: right;
  }
</style>

<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.menustree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.menuname.indexOf(value) !== -1;
      },
      getMenus() {
        var that = this
        this.axios.get('menus')
          .then(function(res) {
            if (res.data.success) {
              that.menusData = res.data.info
            }else{
              that.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    mounted () {
      this.getMenus()
    },
    data() {
      return {
        filterText: '',
        menusData: [],
        defaultProps: {
          children: 'child',
          label: 'menuname'
        },
        labelPosition: 'left',
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕1111111111111111111112'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value8: ''
      }
    }
  };
</script>
