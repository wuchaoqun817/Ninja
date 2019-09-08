import Taro from '@tarojs/taro'
import { View, ScrollView, Button, Text } from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane, AtLoadMore } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'

import './index.less'

class Search extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      
    }
  }


  componentDidMount () { 
  }

  componentWillUnmount () { }

 
  render () {
    return (
      <View className='searchMian'>
        <AtSearchBar focus/>
      </View>
    )
  }
}


export default Search 
