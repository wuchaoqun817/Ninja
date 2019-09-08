import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtDrawer, AtAvatar, AtList, AtListItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './index.less'

@inject('userStore')
@observer
class Memu extends Taro.Component {
  myVideo = null
  constructor() {
    super(...arguments)
    this.state = {
      
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() { }


  render() {
    const { show, onClose, userStore: { isLogin } } = this.props
    return (
      <View className='menuMian'>
        <AtDrawer
          show={show}
          onClose={onClose && onClose}
        > 
          <View>
            <View className='userBox'>
              <AtAvatar size='large' circle text='头像'></AtAvatar>
              <Text className='name'>游客</Text>
            </View>
            <AtList>
              <AtListItem title='我的视频' arrow='right' />
              <AtListItem title='我要上传' arrow='right' />
            </AtList>
          </View>
        </AtDrawer>
      </View>
    )
  }
}


export default Memu 
