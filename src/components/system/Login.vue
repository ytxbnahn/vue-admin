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
  </div>
</template>

<script>
require('../../css/login.css')

import auth from '../../auth'
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
          return false
        }
      })
    }
  }
}
</script>
