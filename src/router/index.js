import Vue from 'vue'
import Router from 'vue-router'
import { NotFoundView, LoginView, DashView, HelloView } from '@/components'
import { 
    DashboardView,
    calendar,
    Organization,
    Rolepermset,
    Awardauthoset,
    Globalparamset,
    Mymission,
    Myaudit,
    ECharts
   } from '@/components/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/',
      component: DashView,
      meta:{
        requireAuth: true
      },
      children: [
        {
          path: 'dashboard',
          alias: '',
          component: DashboardView,
          name: 'Dashboard',
          meta: {description: 'Overview of environment',requireAuth: true}
        },
        {
          path: 'hello',
          alias: '',
          component: HelloView,
          name: 'Hello',
          meta: {description: 'Overview of environment',requireAuth: true}
        },
        {
          path:"calendar",
          component:calendar,
          name:"calendar",
          meta:{
            requireAuth: true
          }
        },
         {
          path:'eCharts',
          component:ECharts,
          name:"ECharts",
          meta:{
             requireAuth: true
          }
        },
        {
          path:'myaudit',
          component:Myaudit,
          name:"我的审核",
          meta:{
             requireAuth: true
          }
        },
        {
          path:'mymission',
          component:Mymission,
          name:"我的任务",
          meta:{
             requireAuth: true
          }
        },
        {
          path:'organization',
          component:Organization,
          name:"组织机构",
          meta:{
             requireAuth: true
          }
        },
        {
          path:'globalparamset',
          component:Globalparamset,
          name:"全局参数设置",
          meta:{
             requireAuth: true
          }
        },
        {
          path:'rolepermset',
          component:Rolepermset,
          name:"角色权限设置",
          meta:{
             requireAuth: true
          }
        },
        {
          path:'awardauthoset',
          component:Awardauthoset,
          name:"奖扣权限设置",
          meta:{
             requireAuth: true
          }
        },
        {
          path: 'files',
          component: HelloView,
          name: 'Files',
          meta:{
            requireAuth: true
          },
          children: [
            {
              path: 'item1',
              alias: '',
              component: HelloView,
              name: 'Hello1',
              meta: {description: 'Files',requireAuth: true}
            },
            {
              path: 'item2',
              alias: '',
              component: HelloView,
              name: 'Hello2',
              meta: {description: 'Files',requireAuth: true}
            },
            {
              path: 'item3',
              alias: '',
              component: HelloView,
              name: 'Hello3',
              meta: {description: 'Files',requireAuth: true}
            }
          ]
        }
      ]
    }, {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})
