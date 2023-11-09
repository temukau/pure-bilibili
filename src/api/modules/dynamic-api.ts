import {BaseApi} from '@/api/base'
import cookies from 'js-cookie'
import axios from 'axios'

export const DynamicApi = {
  /**
   * 点赞/取消点赞动态
   * @param dynamicId 动态id
   * @param up 1: 点赞, 2: 取消点赞
   */
  async toggleLike(dynamicId: number | string, up: 1 | 2) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `/vc/dynamic_like/v1/dynamic_like/thumb`,
          {
            dynamic_id: dynamicId,
            up,
            csrf: cookies.get('bili_jct')
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then((res) => {
          if (res.data.code === 0) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * 获取视频动态列表
   * @param offset 偏移量
   * @param mid up主id
   */
  async getVideoDynamicList(offset?: number | string | null, mid?: number | string) {
    return BaseApi.get(`/x/polymer/web-dynamic/desktop/v1/feed/video`, {
      offset,
      host_mid: mid
    })
  },

  /**
   * 获取动态门户
   */
  async getPortal() {
    return BaseApi.get(`/x/polymer/web-dynamic/v1/portal`)
  },

  /**
   * 获取关注的动态
   *
   * @param type all: 全部, video: 视频, pgc: 稿件, article: 文章
   * @param page 页码
   * @param mid 用户id
   * @param offset 偏移量
   */
  async getFollowedDynamicList(
    type: 'all' | 'video' | 'pgc' | 'article',
    page: number,
    mid: number,
    offset: number | null = null
  ) {
    return BaseApi.get(`/x/polymer/web-dynamic/v1/feed/all`, {
      page,
      type,
      host_mid: mid,
      offset
    })
  },

  /**
   * 获取热门动态
   * @param page 页码
   */
  async getHotList(page: number) {
    return BaseApi.get(`/x/polymer/web-dynamic/v1/feed/hot`, {
      page: page
    })
  }
}
