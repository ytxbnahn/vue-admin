<template>
  <div class="container">
    <div class="query-head">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
      <el-button type="info" @click="dialogFormVisible = true">
        <i class="el-icon-plus"></i>添加菜单
      </el-button>
      <el-button type="danger" icon="delete" @click="deleteMenus()">删除菜单</el-button>
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
    <el-dialog class="menus-dialog" title="添加菜单" :visible.sync="dialogFormVisible">
      <el-form :label-position="labelPosition" ref="menuForm" label-width="80px" >
        <el-form-item label="父菜单">
          <el-select v-model="selectValue" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in menusSelect"
              :key="item.id"
              :label="item.menuname"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="menuNameValue" @keyup.enter.native="addMenu('menuForm')"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addMenu('menuForm')">确 定</el-button>
      </div>
    </el-dialog>
 </div>
</template>

<style scoped>
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

  /* pri */
  .container .menus-dialog .el-dialog{
    max-width: 500px;
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
      deleteMenus() {
        var that = this
        let checkedNodes = this.$refs.menustree.getCheckedNodes()
        if (!checkedNodes.length) {
          that.$message({
            message: '请选择您要删除的菜单',
            type: 'info'
          })
          return
        }
        let deleteIDs = []
        $.each(checkedNodes, function(index, val) {
          deleteIDs.push(val.id)
        })
        console.log(deleteIDs)
        this.$confirm('是否确认删除菜单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.put('menusdel',{id: JSON.stringify(deleteIDs)})
            .then(function(res) {
              if (res.data.success) {
                that.getMenus()
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              } else {
                that.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            })
            .catch(function(error) {
              console.log(error)
            })
        }).catch(() => {
        });
      },
      getMenus() {
        var that = this
        this.axios.get('menus')
          .then(function(res) {
            if (res.data.success) {
              that.menusData = res.data.info
              let selectData = JSON.stringify(res.data.info)
              that.menusSelect = JSON.parse(selectData)
              that.menusSelect.unshift({id: 0,menuname: '根菜单'})
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
      },
      addMenu(formName) {
        var that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post('menus', {
                id: that.selectValue,
                menuname: that.menuNameValue
              })
              .then(function(res) {
                if (res.data.success) {
                  that.dialogFormVisible = false
                  that.getMenus()
                  this.$refs[formName].resetFields()
                } else {
                  that.$message({
                    message: res.data.msg,
                    type: 'error'
                  })
                }
              })
              .catch(function(error) {
                console.log(error)
              })
          } else {
            return false;
          }
        })
      }
    },
    mounted () {
      this.getMenus()
    },
    data() {
      return {
        filterText: '',
        menuNameValue: '',
        menusData: [],
        menusSelect: [],
        defaultProps: {
          children: 'child',
          label: 'menuname'
        },
        labelPosition: 'left',
        dialogFormVisible: false,
        selectValue: ''
      }
    }
  };
</script>
