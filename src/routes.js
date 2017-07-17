import Index from './components/Index'
import Menu from './components/Menu'
import Example from './components/Example'
import Hello from './components/Hello'
import Role from './components/Role'
import Echarts from './components/Echarts'
import Login from './components/Login'

let routes = [
   { path: '/', component: Index },
    { path: '/menu', component: Menu },
    { path: '/example', component: Example },
    { path: '/hello', component: Hello },
    { path: '/echarts', component: Echarts },
    { path: '/login', component: Login },
    { path: '/role', component: Role }
]

export default routes
