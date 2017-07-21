import Menu from './components/system/Menu'
import User from './components/system/User'
import Index from './components/system/Index'
import Example from './components/system/Example'
import Role from './components/system/Role'
import Login from './components/system/Login'
import Hello from './components/Hello'
import Echarts from './components/Echarts'

let routes = [
   { path: '/', component: Example },
    { path: '/login', component: Login },
    { path: '/index', component: Index },
    { path: '/role', component: Role },
    { path: '/user', component: User },
    { path: '/menu', component: Menu },
    { path: '/example', component: Example },
    { path: '/hello', component: Hello },
    { path: '/echarts', component: Echarts }
]

export default routes
