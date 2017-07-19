<template>
  <div class="container">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
    </el-breadcrumb> -->
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
      ref="menustree" :render-content="renderContent">
    </el-tree>
    <el-dialog class="menus-dialog" title="添加菜单" :visible.sync="dialogFormVisible">
      <el-form :label-position="'left'" ref="menuForm" label-width="80px" >
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

<style>

</style>

<script>
  export default {
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
        dialogFormVisible: false,
        selectValue: ''
      }
    },
    watch: {
      // 筛选菜单节点
      filterText(val) {
        this.$refs.menustree.filter(val);
      }
    },
    methods: {
      // 筛选菜单节点
      filterNode(value, data) {
        if (!value) return true;
        return data.menuname.indexOf(value) !== -1;
      },
      // 删除菜单
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
      // 获取菜单列表
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
      // 添加菜单
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
      },
      // 添加菜单节点
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      // 删除菜单节点
      remove(store, data) {
        store.remove(data);
      },
      // 渲染函数
      renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={ () => this.append(store, data) }>Append</el-button>
              <el-button size="mini" on-click={ () => this.remove(store, data) }>Delete</el-button>
            </span>
          </span>);
      }
    }
  }
</script>
