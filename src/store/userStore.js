import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'

class UserStore {
  @observable isLogin = null
  @action getLoginSession = () => {
    Taro.checkSession().then(res => {
      console.log('res',res)
    }).catch(err => {
      this.isLogin = false
    })
  }
  // @action fetchMusic = () => {
  //   request({url:'/api/v2/videos'}).then( res => {
  //     if ( res.data ) {
  //       this.list = res.data.data.list
  //     }
  //   }).catch((err) => {
  //     // toast('服务器错误...')
  //     console.log('err',err)
  //   })
  // }
}
const userStore = new UserStore()
export default userStore
