<template>
	<div class="login-bg">
    <div class="account-container ng-scope">
        <h2>用户登录</h2>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" @keyup.enter.native="login('loginForm')" placeholder="用户名" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" @keyup.enter.native="login('loginForm')" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-button type="primary" class="submit-btn" @click="login('loginForm')">登陆</el-button>
        </el-form>
    </div>
   <!--   <div class="account-about ng-scope">
       <span>Copyright&nbsp;&nbsp;©&nbsp;2017&nbsp;Coding.net&nbsp;&nbsp;</span>
       <a href="/">首页</a>
       <a href="/about">关于 Coding</a>
       <a href="/jobs">招贤纳士</a>
       <a href="/terms">服务条款</a>
       <a href="/privacy">隐私策略</a>
       <a href="help">帮助中心</a>
       <a href="https://blog.coding.net/">Blog</a>
       <a href="/app">App</a>
       <a cg-jump-out-angular-href="/shop" href="/shop">Shop</a>
       <a href="https://mart.coding.net" style="font-weight: bold;">码市</a>
       <a class="photo-by ng-binding" ng-href="http://eput.com/kevinmark3" target="_blank" href="http://eput.com/kevinmark3">Photo by KevinMark3</a>
     </div>  -->
  </div>
</template>

<script>
require('../css/login.css')

import auth from '../auth'
import series from 'async/series'

export default {
  data () {
    return {
      auth,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  mounted () {
    if (auth.isAuthenticated()) {
      this.$router.push('/')
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          series([(callback) => {
            auth.login(this, {
              username: this.loginForm.username,
              password: this.loginForm.password
            }, callback)
          }], (err) => {
            if (err) {
              console.log(err.stack)
              return
            }
            this.$router.push('/')
          })
        } else {
            return false;
          }
      })
    }
  }
}
</script>
