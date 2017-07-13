<template>
  <div class="container">
    <div class="query-head">
      <el-row :gutter="20">
        <el-col>
          <el-input v-model="input" placeholder="菜单名称"></el-input>
        </el-col>
        <el-col>
          <el-input v-model="input" placeholder="菜单名称"></el-input>
        </el-col>
        <el-col>
          <el-input v-model="input" placeholder="菜单名称"></el-input>
        </el-col>
        <el-col>
          <el-button type="primary" icon="search">查询</el-button>
        </el-col>
      </el-row>
    </div>
    
    <el-table :data="tableData5" style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="菜单权限">
            <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
              <el-checkbox v-model="checked" class="first">{{ props.row.category }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.desc }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.address }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.shop }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.shopId }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
              <el-checkbox v-model="checked">{{ props.row.name }}</el-checkbox>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="角色名" prop="id">
      </el-table-column>
      <el-table-column label="角色值" prop="name">
      </el-table-column>
      <el-table-column label="操作" width="120px" align="center" >
        <template scope="scope">
          <el-button type="danger" icon="delete" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
 </div>
</template>
<!-- <template>
  <div class="block">
  <el-pagination :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
  </el-pagination>
</div> 
</template> -->
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
</style>

<script>
  export default {
    data () {
      return {
        checked: true,
        currentPage4: 4,
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
    }
  }
</script>
