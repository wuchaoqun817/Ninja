import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtFab, AtAvatar } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './index.less'

class VideoDetail extends Taro.Component {
  myVideo = null
  constructor () {
    super(...arguments)
    this.state = {
      
    }
  }

  componentDidMount () { 
    this.myVideo = Taro.createVideoContext('ninjaVideo',this.video)
    // console.log('this.myVideo',this.myVideo)
  }

  componentWillUnmount () { }

 
  render () {
    return (
      <View className='detailMian' ref={ref=>this.video=ref}>
        <View className='videoBox'>
          <video 
            controls
            id='ninjaVideo' 
            src='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' >
          </video>
        </View>
        <View className='videoInfo'>
          <View>Qt5 比qt4 有了很多新的功能</View>
          <View className='dsc'>Qt5 比qt4 有了很多新的功能Qt5 比qt4 有了很多新的功能Qt5 比qt4 有了很多新的功能</View>
          <View className='user'>
            <AtAvatar size='small' circle text='头像'/>
            <Text className='text'>阿萨德环境看</Text>
          </View>
        </View>
        <View className='potionBox'>
          <AtFab onClick={()=>{}}>
            <Text className='at-fab__icon at-icon at-icon-heart-2'></Text>
          </AtFab>
          <Text className='text'>赞他一下</Text>
        </View>
      </View>
    )
  }
}


export default VideoDetail 
