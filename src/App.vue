<template>
  <div id="app">
    <div class="nav-md" id="body_div" v-show="auth.isAuthenticated()">
      <div class="container body">
        <div class="main_container">
          <div class="col-md-3 left_col">
            <div class="left_col scroll-view">
              <div class="navbar nav_title" style="border: 0;">
                <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>后台管理系统</span></a>
              </div>
              <div class="clearfix"></div>
              <!-- menu profile quick info -->
              <div class="profile clearfix">
                <div class="profile_pic">
                  <img src="./assets/img.jpg" alt="..." class="img-circle profile_img">
                </div>
                <div class="profile_info">
                  <span>Welcome</span>
                  <h2>Leo</h2>
                </div>
              </div>
              <!-- /menu profile quick info -->
              <br />
              <!-- sidebar menu -->
              <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section">
                  <!-- <h3>General</h3> -->
                  <ul class="nav side-menu">
                    <li><a><i class="fa fa-home"></i>系统管理<span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                        <!-- <router-link :to="{ path: '/hello' }" tag="li" >
                          <a>用户管理</a>
                        </router-link> -->
                        <router-link :to="{ path: '/menu' }" tag="li" >
                          <a>菜单管理</a>
                        </router-link>
                         <router-link :to="{ path: '/echarts' }" tag="li" >
                          <a>统计图</a>
                        </router-link>
                      <!--   <router-link :to="{ path: '/role' }" tag="li" >
                        <a>角色管理</a>
                      </router-link>
                      <router-link :to="{ path: '/role' }" tag="li" >
                        <a>权限管理</a>
                      </router-link> -->
                      </ul>
                    </li>
                    <li><a><i class="fa fa-home"></i>表格<span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                        <router-link :to="{ path: '/table' }" tag="li" >
                          <a>表格</a>
                        </router-link>
                      </ul>
                    </li>
                     <li><a><i class="fa fa-home"></i>实例<span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                        <router-link :to="{ path: '/example' }" tag="li" >
                          <a>实例效果</a>
                        </router-link>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /sidebar menu -->
              <!-- /menu footer buttons -->
              <div class="sidebar-footer hidden-small">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                  <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                  <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                  <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                  <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                </a>
              </div>
              <!-- /menu footer buttons -->
            </div>
          </div>

          <!-- top navigation -->
          <div class="top_nav">
            <div class="nav_menu">
              <nav>
                <div class="nav toggle">
                  <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                </div>
               
                <ul class="nav navbar-nav navbar-right">
                  <li style="margin-right: 20px;font-size: 14px;">
                    <a @click="logout" href="javascript:;"><i aria-hidden="true" class="fa fa-sign-out"></i>
                      退出
                    </a>
                    </li>
                  <!-- <li class="">
                    <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <img src="./assets/img.jpg" alt="">John Doe
                      <span class=" fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-usermenu pull-right">
                      <li><a href="javascript:;"> Profile</a></li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge bg-red pull-right">50%</span>
                          <span>Settings</span>
                        </a>
                      </li>
                      <li><a href="javascript:;">Help</a></li>
                      <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                    </ul> 
                  </li>-->

                 <!--  <li role="presentation" class="dropdown">
                   <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                     <i class="fa fa-envelope-o"></i>
                     <span class="badge bg-green">6</span>
                   </a>
                   <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                     <li>
                       <a>
                         <span class="image"><img src="./assets/img.jpg" alt="Profile Image" /></span>
                         <span>
                           <span>John Smith</span>
                           <span class="time">3 mins ago</span>
                         </span>
                         <span class="message">
                           Film festivals used to be do-or-die moments for movie makers. They were where...
                         </span>
                       </a>
                     </li>
                     <li>
                       <a>
                         <span class="image"><img src="./assets/img.jpg" alt="Profile Image" /></span>
                         <span>
                           <span>John Smith</span>
                           <span class="time">3 mins ago</span>
                         </span>
                         <span class="message">
                           Film festivals used to be do-or-die moments for movie makers. They were where...
                         </span>
                       </a>
                     </li>
                     <li>
                       <a>
                         <span class="image"><img src="./assets/img.jpg" alt="Profile Image" /></span>
                         <span>
                           <span>John Smith</span>
                           <span class="time">3 mins ago</span>
                         </span>
                         <span class="message">
                           Film festivals used to be do-or-die moments for movie makers. They were where...
                         </span>
                       </a>
                     </li>
                     <li>
                       <a>
                         <span class="image"><img src="./assets/img.jpg" alt="Profile Image" /></span>
                         <span>
                           <span>John Smith</span>
                           <span class="time">3 mins ago</span>
                         </span>
                         <span class="message">
                           Film festivals used to be do-or-die moments for movie makers. They were where...
                         </span>
                       </a>
                     </li>
                     <li>
                       <div class="text-center">
                         <a>
                           <strong>See All Alerts</strong>
                           <i class="fa fa-angle-right"></i>
                         </a>
                       </div>
                     </li>
                   </ul>
                 </li> -->
                </ul>
              </nav>
            </div>
          </div>
          <!-- /top navigation -->

          <!-- page content -->
          <div class="right_col" role="main">
            <router-view></router-view>
          </div>
          <!-- /page content -->
        </div>
      </div>
    </div>
    <div v-if="!auth.isAuthenticated()" class="login-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import auth from './auth'

export default {
  mounted () {
    /* eslint-disable global-require */
    require('bootstrap/dist/js/bootstrap.js')
    require('datatables.net-bs/js/dataTables.bootstrap.js')
    require('datatables.net-buttons/js/dataTables.buttons.js')
    require('datatables.net-buttons-bs/js/buttons.bootstrap.js')
    require('datatables.net-fixedheader/js/dataTables.fixedHeader.js')
    require('datatables.net-keytable/js/dataTables.keyTable.js')
    require('datatables.net-responsive/js/dataTables.responsive.js')
    require('datatables.net-responsive-bs/js/responsive.bootstrap.js')
    require('datatables.net-scroller/js/dataTables.scroller.js')
    require('./js/custom.js')
  },
  name: 'app',
  data () {
    return {
      auth
    }
  },
  methods: {
    logout () {
      auth.logout()
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
</style>
