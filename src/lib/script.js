import 'bootstrap'
import 'admin-lte'
import '@/assets/js/jquery.dataTables.min.js';
import usertoken from "@/utils/usertoken.js"  //公共方法
// import '@/assets/js/dataTables.bootstrap.min.js';
import Vue from 'vue'
import axios from 'axios'
import querystring  from 'querystring';
import cookie from '@/../static/js/jquery.cookie.js' //cookie插件
import store from '@/store/index.js'
import  filters from './customFiler.js'
import './customDirective.js'
import * as Commoncode from "./customCode.js"  //公共方法
import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(element)
var echarts = require('echarts');
Vue.prototype.Commoncode=Commoncode
Vue.prototype.echarts=echarts;
Vue.prototype.store=store;
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))//过滤器循环
//=======axios配置=========
axios.defaults.timeout = 5000;//响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  config.data = querystring.stringify(config.data);
  //在发送请求之前做某件事
     if ($.cookie("token")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            // config.headers.Authorization = $.cookie("token");
       }
     store.dispatch('showLoading');
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  store.dispatch('hideLoading');
    return res;
}, (error) => {

  store.dispatch('hideLoading');
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                $.cookie("token",null);
                router.replace({
                    path: '/login'
                })
        }
    }
    return Promise.reject(error);
});


export {usertoken,axios,store}