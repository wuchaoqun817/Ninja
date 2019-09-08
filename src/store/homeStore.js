import request from '../utils/request'
import { observable, action } from 'mobx'

class HomeStore {
  @observable list = []
  @action fetchMusic = () => {
    request({url:'/api/v2/videos'}).then( res => {
      if ( res.data ) {
        this.list = res.data.data.list
      }
    }).catch((err) => {
      // toast('服务器错误...')
      console.log('err',err)
    })
  }
}
const homeStore = new HomeStore()
export default homeStore
