import Vue from 'vue'
import lscache from 'lscache'
import _ from 'lodash/lodash'
import series from 'async/series'

export default {

  initialized: false,
  user: {
    authenticated: false,
    username: '',
    roles: [],
    userId: ''
  },

  login (context, creds, callback) {
    const OAUTH_TOKEN_URL = 'login'
    const credsString = `email=${creds.username}&password=${creds.password}`
    const url = `${OAUTH_TOKEN_URL}?${credsString}`

    Vue.axios.post(url, {}, {
      headers: {
        Authorization: ''
      }
    }).then((response) => {
      if (!response.data.success) {
        context.$message({
          message: response.data.msg,
          type: 'error'
        })
        return
      }
      lscache.set('accessToken', response.data.info.token, 6 * 60)
      lscache.set('username', creds.username, 6 * 60)
      this.check()
      this.loadRoles(callback)
    }).catch((err) => {
      let msg = '服务器异常'
      if (err.data && err.data.error === 'invalid_grant') {
        msg = '用户名或密码错误'
      }
      context.$message({
        message: msg,
        type: 'error'
      })
    })
  },

  logout () {
    lscache.remove('accessToken')
    lscache.remove('username')
    lscache.remove('roles')
    lscache.remove('userId')
    this.user.authenticated = false
    this.user.roles = []
    this.user.userId = ''
    Vue.axios.post('layout')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
  },

  check () {
    const accessToken = lscache.get('accessToken')
    this.user.authenticated = !!accessToken
    this.user.username = lscache.get('')

    Vue.axios.defaults.baseURL = '/admin/'
    Vue.axios.defaults.headers.common.Authorization = accessToken ? `${accessToken}` : ''

    if (!this.authenticated) {
      this.authenticated = true

      series([(callback) => {
        this.loadRoles(callback)
      }], (err) => {
        if (err) {
          console.log('err.stack')
          console.log(err.stack)
        }
      })
    }
  },

  getAuthHeader () {
    return {
      Authorization: `${lscache.get('accessToken')}`
    }
  },

  isAuthenticated () {
    this.check()
    return this.user.authenticated
  },

  loadRoles (callback) {
    Vue.axios.get('login', {
      params: {
        username: lscache.get('username'),
        size: 10000
      }
    }).then((response) => {
      // this.user.roles = _.map(response.body._embedded.roles, 'code')
      // this.user.id = _.map(response.body._embedded.roles, 'id')
      lscache.set('roles', this.user.roles, 6 * 60)
      lscache.set('userId', this.user.id, 6 * 60)
      callback(null, 'login')
    })
  },

  hasRole (role) {
    return _.includes(this.user.roles, role)
  }

}
