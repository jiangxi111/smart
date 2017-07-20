// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import {usertoken,store} from './lib/script'
import './lib/css'
Vue.config.productionTip = false
const whiteList = ['/login', '/authredirect', '/reset', '/sendpwd'];// 不重定向白名单
router.beforeEach((to,from,next)=>{
  // NProgress.start();
  document.title=to.name;
  if (to.matched.some(record => record.meta.requireAuth)) {
    if(!usertoken.judgeusertoken()){//token不存在
        if(whiteList.indexOf(to.path) !== -1){
            next()
        }else{
            next({path:"/login",query: { redirect: to.fullPath }})
            // NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 
            //                 //ps：history模式下无问题，可删除该行！
        }
      } 
      else {//token存在
        next()
      }
  }else{
    next()
  }
});

router.afterEach(() => {
  // NProgress.done(); // 结束Progress
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
