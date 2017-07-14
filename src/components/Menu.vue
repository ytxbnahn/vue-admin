<template>
  <div class="container">
    <div class="query-head">
      <el-row :gutter="20">
        <el-col>
          <el-input v-model="input" placeholder="菜单名称"></el-input>
        </el-col>
        <el-col>
          <el-button type="primary" icon="search">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="menusData" stripe style="width: 100%">
      <el-table-column type="expand" >
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand" v-for="menuItem in menusData" v-bind:todo="menuItem" v-bind:key="menuItem.id">
            <el-form-item label="菜单权限" v-for="item in menuItem.child" v-bind:todo="item" v-bind:key="item.id">
            <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
              <el-checkbox v-model="checked" class="first">{{ item.menuname }}</el-checkbox>
              
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="菜单ID" prop="id">
      </el-table-column>
      <el-table-column label="菜单名称" prop="menuname">
      </el-table-column>
      <el-table-column label="" width="120px" align="center" >
        <template scope="scope">
          <el-button type="danger" icon="delete" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
 </div>
</template>

<style>
  .query-head .el-row{
    margin-bottom: 0px;
  }
  .query-head .el-row .el-col{
    width: 20%;
    min-width: 120px;
    max-width: 300px;
    margin-bottom: 20px;
  }
  .query-head{
    margin-top: 20px;
  }
  .el-pagination{
    margin: 20px 0;
    text-align: right;
  }
</style>

<script>
  export default {
    data () {
      return {
        input: '',
        checked: true,
        currentPage4: 4,
        menusData: [],
        tableData5: [{
          id: '超级管理员',
          name: 'ROLE_0',
          category: '江浙零食',
          desc: '荷兰优质淡',
          address: '陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '管理员',
          name: 'ROLE_1',
          category: '江浙零食',
          desc: '荷兰优质淡',
          address: '陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '电台用户',
          name: 'ROLE_2',
          category: '江浙零食',
          desc: '荷兰优质淡',
          address: '陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '普通用户',
          name: 'ROLE_3',
          category: '江浙零食',
          desc: '荷兰优质淡',
          address: '陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    mounted () {
      this.getMenus()
    },
    methods: {
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
    }
  }
</script>
