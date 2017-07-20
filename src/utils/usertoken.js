
import cookie from '@/../static/js/jquery.cookie.js' //cookie插件
import store from '@/store/index.js'

class usertoken{
    //判断token是否存在
    judgeusertoken(){
        if(this.getusertoken()){
            return true;
        }else{
            if($.cookie("token")){
                this.setusertoken($.cookie("token"));
                return true;
            }else{
                return false;
            }
        }
        
    }
    //获取token
    getusertoken(){
        return store.getters.getusertoken;
    }
    //储存token
    setusertoken(token){
        store.dispatch('setToken',token);
    }
    //删除token
    delusertoken(){
        $.cookie("token","");
        store.dispatch('setToken',"");
    }
}
export default new usertoken();