import api from '@/api'
import urls from '@/urls'
// import {axios} from '@/utils/facth.js'

class LOGIN{
  userlogin(data=null){
    return api.post (urls.login, data);
  }
}
  
export default new LOGIN()