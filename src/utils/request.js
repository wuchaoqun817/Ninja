import Taro from '@tarojs/taro'
import { rootUrl } from '../config'
import tips from '../utils/tips'
const { toast } = tips

export default function request(params, method = 'GET') {
  let { url, data } = params
  url = rootUrl + url
  let contentType = 'application/json'
  contentType = params.contentType || contentType
  const option = {
    isShowLoading: true,
    loadingText: '正在加载',
    url,
    data,
    method,
    header: { 'content-type': contentType },
    success(res) {
      return res.data
    },
    error(e) {
      toast('请求接口出现问题')
    }
  }
  return Taro.request(option)
}
