<template>
  <div class="container">
    <!-- 面包屑 -->
   <!--  <el-breadcrumb separator="/">
     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
     <el-breadcrumb-item>系统管理</el-breadcrumb-item>
     <el-breadcrumb-item>用户管理</el-breadcrumb-item>
   </el-breadcrumb> -->

    <!-- 头部查询 -->
    <div class="query-head">
      <el-input placeholder="输入关键字过滤" v-model.trim="query.search" @keyup.enter.native="getUsers()"></el-input>
      <el-button type="info" icon="search" @click="getUsers()">查询</el-button>
      <el-button type="info" @click="addUsers()">
        <i class="el-icon-plus"></i>添加用户
      </el-button>
    </div>
    <!-- 表格信息 -->
    <el-table ref="userTable" :data="userData" stripe tooltip-effect="dark" @selection-change="handleSelectionChange" @sort-change="sortChange">
      <el-table-column type="selection" width="55" ></el-table-column>
      <el-table-column prop="id" label="ID" width="80" sortable="custom"></el-table-column>
      <el-table-column prop="name" label="用户名称" sortable="custom"></el-table-column>
      <el-table-column prop="email" label="用户账号" sortable="custom"></el-table-column>
      <el-table-column prop="display_name" label="用户角色" sortable="custom"></el-table-column>
      <el-table-column prop="created_at" label="创建时间" width="200" sortable="custom"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template scope="scope">
           <el-button @click.native.prevent="editClick(scope)" size="small" icon="edit"></el-button>
           <el-button type="danger" icon="delete" size="small" @click.native.prevent="deleteUser(scope)" ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.pageIndex"
      :page-sizes="[10,20,50,100,500]"
      :page-size="query.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="query.total">
    </el-pagination>
    <!-- 弹框 -->
    <el-dialog class="User-dialog" :title="userForm.id?'编辑用户':'添加用户'" :visible.sync="dialogFormVisible">
      <el-form :model="userForm" :rules="userRules" ref="userForm" :label-position="'left'" label-width="80px" >
        <el-form-item label="用户角色" prop="role_id">
          <el-select v-model.trim="userForm.role_id" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in roleData"
              :key="item.id"
              :label="item.display_name"
              :value="item.id">
            </el-option>
          </el-select>
         </el-form-item>
         <el-form-item label="用户名称" prop="name">
           <el-input v-model.trim="userForm.name" placeholder="用户名称" @keyup.enter.native="saveUser()"></el-input>
         </el-form-item>
         <el-form-item label="用户账号" prop="email">
           <el-input v-model.trim="userForm.email" placeholder="用户账号" @keyup.enter.native="saveUser()"></el-input>
         </el-form-item>
         <el-form-item label="用户密码" prop="password" v-if="userForm.id?modifyPassword:true">
           <el-input type="password" v-model.trim="userForm.password" placeholder="用户密码" @keyup.enter.native="saveUser()"></el-input>
         </el-form-item>
         <el-form-item label="确认密码" prop="repassword" v-if="userForm.id?modifyPassword:true">
           <el-input type="password" v-model.trim="userForm.repassword" placeholder="确认密码" @keyup.enter.native="saveUser()"></el-input>
         </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="warning" @click="modifyPSW()" style="float: left;" v-show="userForm.id">{{modifyPassword?'不改了':'修改密码'}}</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveUser()">确 定</el-button>
      </div>
    </el-dialog>
 </div>
</template>

<script>
  export default {
    data () {
      // 确认密码验证
      var validateRePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.userForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        // 错误提示
        errorMsg: '系统错误，请联系管理员',
        // 查询对象
        query: {
          order: '',
          prop: '',
          search: '',
          pageIndex: 0,
          pageSize: 10,
          total: 0
        },
        // 角色数据
        roleData: [],
        // 是否修改密码
        modifyPassword: false,
        // 用户表单对象
        userForm: {
          id: '',
          name: '',
          email: '',
          password: '',
          repassword: '',
          role_id: ''
        },
        // 用户列表数据
        userData: [],
        // 用户表单验证规则
        userRules: {
          role_id: [
            { type: 'number', required: true, message: '请选择用户角色', trigger: 'change' }
          ],
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { max: 12, message: '用户名称最多12位', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入用户账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' }
          ],
          repassword: [
            { required: true, validator: validateRePass, trigger: 'blur' }
          ]
        },
        // 弹框显示控制
        dialogFormVisible: false,
        // 表格选择结果
        multipleSelection: []
      }
    },
    mounted () {
      this.getUsers()
    },
    methods: {
      // 表单重置
      formReset () {
        this.$refs['userForm'] ? this.$refs['userForm'].resetFields() : ''
      },
      // 添加用户
      addUsers () {
        this.dialogFormVisible = true
        this.getRoles()
        this.userForm = {
          id: '',
          name: '',
          email: '',
          password: '',
          repassword: '',
          role_id: ''
        }
        this.formReset()
      },
      // 点击编辑事件
      editClick (e) {
        this.getRoles()
        this.dialogFormVisible = true
        this.modifyPassword = false
        this.userForm.id = e.row.id
        this.formReset()
        this.getUserById()
      },
      // 点击修改密码
      modifyPSW () {
        this.modifyPassword = !this.modifyPassword
        this.formReset()
      },
      // 分页页码改变事件
      handleSizeChange (e) {
        this.query.pageSize = e
        this.getUsers()
      },
      // 分页索引改变事件
      handleCurrentChange (e) {
        this.query.pageIndex = e
        this.getUsers()
      },
      // 自定义排序
      sortChange (e) {
        this.query.order = e.order || ''
        this.query.prop = e.prop || ''
        this.getUsers()
      },
      handleSelectionChange (e) {
        console.log('handleSelectionChange', e)
        this.multipleSelection = e
      },
      // 删除用户
      deleteUser (e) {
        let that = this
        let deleteID = e.row.id
        this.$confirm('是否确认删除用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.put('employeesdel', {id: deleteID})
            .then(function (res) {
              if (res.data.success) {
                that.getUsers()
                that.$message({
                  type: 'success',
                  message: '删除成功!'
                })
              } else {
                that.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            })
            .catch(function () {
              that.$message({
                message: that.errorMsg,
                type: 'error'
              })
            })
        }).catch(() => {
          // 点击取消
        })
      },
      // 根据用户ID查询用户详细
      getUserById () {
        let that = this
        that.axios.get(`employeesGetByID?id=${that.userForm.id}`)
          .then(function (res) {
            if (res.data.success) {
              that.userForm = res.data.info
              console.log('that.userForm', that.userForm)
            } else {
              that.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
          .catch(function () {
            that.$message({
              message: that.errorMsg,
              type: 'error'
            })
          })
      },
      // 查询用户列表
      getUsers () {
        let that = this
        that.axios.get(`employees?order=${that.query.order}&prop=${that.query.prop}&page=${that.query.pageIndex}&pagesize=${that.query.pageSize}&search=${that.query.search}`)
          .then(function (res) {
            if (res.data.success) {
              that.userData = res.data.info
              that.query.total = res.data.total
            } else {
              that.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
          .catch(function () {
            that.$message({
              message: that.errorMsg,
              type: 'error'
            })
          })
      },
      // 获取角色列表
      getRoles () {
        let that = this
        that.axios.get('staff')
          .then(function (res) {
            if (res.data.success) {
              that.roleData = res.data.info
            } else {
              that.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
          .catch(function () {
            that.$message({
              message: that.errorMsg,
              type: 'error'
            })
          })
      },
      // 保存用户
      saveUser () {
        let that = this
        let formName = 'userForm'
        that.$refs[formName].validate((valid) => {
          if (valid) {
            that.axios.post('employees', {
              id: that.userForm.id,
              role_id: that.userForm.role_id,
              name: that.userForm.name,
              email: that.userForm.email,
              password: that.userForm.password,
              password_confirmation: that.userForm.repassword
            })
            .then(function (res) {
              if (res.data.success) {
                that.dialogFormVisible = false
                that.getUsers()
                that.$refs[formName].resetFields()
              } else {
                that.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            })
            .catch(function () {
              that.$message({
                message: that.errorMsg,
                type: 'error'
              })
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>
