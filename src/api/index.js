import axios from 'axios'
import config from '@/config'


class API {

  _request (method, uri, data = null) {
    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }
    // const url = config.serverURI + uri
    const url = "https://yq.aliyun.com/api/getArticles?teamid=61";
    return axios({
      // method, headers: this.headers, url, data
      method, url, data
    })
  }
  get (uri, data = null) {
    return this._request('get', uri, data)
  }

  post (uri, data = null) {
    return this._request('post', uri, data)
  }

  put (uri, data = null) {
    return this._request('put', uri, data)
  }

  delete (uri, data = null) {
    return this._request('delete', uri, data)
  }

}

export default new API()
