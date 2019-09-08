import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTag, AtTabs, AtTabsPane } from 'taro-ui'

import './index.less'


class VideoCard extends Taro.Component {
  static externalClasses = ['my-class']
  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    const { href, data } = this.props
    return (
      <View onClick={href&&href} className={'videoCardMain my-class'}>
        <View className='videoBox'>

        </View>
        <View className='videoInfoBox'>
          <View className='title'>{data.name}</View>
          <View>
            <AtTag size='small'>{data.type}</AtTag>
            <Text className='name'>{data.createUserName}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default VideoCard 
