import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//引入路由配置，刚创建的首页
import Index from '@/views/index/index'
//配置人员管理页面
import Manage from '@/views/manage/index'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    },*/
   {
      path: '/',
      name: 'Index',
      component: Index
   },
   {
      path: '/manage',
      name: 'Manage',
      component: Manage
   },
  ]
})
