import Taro from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane, AtLoadMore, AtFab } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import VideoCard from '../../components/VideoCard'
import Memu from './menu'

import './index.less'

const TABLIST = [
  { index: 0, title: '推荐' },
  { index: 1, title: '热门' }
]

@inject('homeStore')
@observer
class Home extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      showDrawer: false,
    }
  }
  // config = {
  //   navigationBarTitleText: '首页'
  // }

  // componentWillReact () {
  //   console.log('componentWillReact')
  // }

  componentDidMount() {
    this.props.homeStore.fetchMusic()
  }

  componentWillUnmount() { }

  handleClick = (val) => {
    this.setState({ current: val })
  }

  renderTab() {
    const { list } = this.props.homeStore
    const { current } = this.state
    const rs = TABLIST.map(u => (
      <AtTabsPane current={current} index={u.index} key={u.index}>
        {this.renderList(list)}
      </AtTabsPane>
    ))
    return (
      <AtTabs current={current} tabList={TABLIST} onClick={this.handleClick}>
        {rs}
      </AtTabs>
    )
  }

  renderList(arr) {
    const rs = arr.map((u, i) =>
      <View key={i} index={i} className='at-col at-col-6 box'>
        <VideoCard
          my-class='video-box'
          data={u}
          href={() => {
            Taro.navigateTo({ url: '/pages/videodetail/index' })
          }}
        />
      </View>
    )
    return (
      <ScrollView scrollY scrollWithAnimation className='videoList'>
        <View className='at-row at-row__justify--between list'>
          {rs}
        </View>
        {/* <AtLoadMore
          onClick={()=>{}}
          status={'没有更多了'}
        /> */}
      </ScrollView>
    )
  }


  render() {
    const { showDrawer } = this.state
    return (
      <View className='homeMian'>
        <Memu show={showDrawer} onClose={() => this.setState({ showDrawer: false })} />
        <View onClick={() => Taro.navigateTo({ url: '/pages/search/index' })}>
          <AtSearchBar />
        </View>
        {this.renderTab()}
        <View className='fixedMine'>
          <AtFab size='small' onClick={() => this.setState({ showDrawer: true })}>
            <Text className='at-fab__icon at-icon at-icon-menu'></Text>
          </AtFab>
        </View>
      </View>
    )
  }
}


export default Home 
