import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import App from './App'
import ElementUI from 'element-ui'
import routes from './routes'
import auth from './auth'
import axios from 'axios'
import PromiseFinally from 'promise.prototype.finally'

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.css')
require('gentelella/production/less/custom.css')
require('element-ui/lib/theme-default/index.css')
require('./css/main.css')

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes
})

router.beforeEach(
  (to, from, next) => {
    if (to.path === '/login') {
      // document.body.style.backgroundColor = '#F7F7F7'
      next()
      return
    }

    if (!auth.isAuthenticated()) {
      next('/login')
      return
    }
    document.body.style.backgroundColor = '#F7F7F7'
    next()
  }
)

PromiseFinally.shim()

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401: 401
          router.push('/login')
      }
    }
    return Promise.reject(error.response.data)
  })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
