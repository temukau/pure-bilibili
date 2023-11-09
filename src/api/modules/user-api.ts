import {BaseApi} from '@/api/base'
import cookies from 'js-cookie'
import qs from 'qs'

export const UserApi = {
    /**
     * 取消关注
     * @param mid
     */
    async unfollow(mid: number | string) {
        return await this.modifyRelation(mid, 2)
    },

    /**
     * 关注
     * @param mid
     */
    async follow(mid: number | string) {
        return this.modifyRelation(mid, 1)
    },

    /**
     * 修改关系
     * @param mid 用户id
     * @param act 1关注 2取消关注
     */
    async modifyRelation(mid: number | string, act: number) {
        return await BaseApi.post(
            '/x/relation/modify',
            qs.stringify({
                fid: mid,
                act: act,
                csrf: cookies.get('bili_jct')
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
    },

  /**
   * 获取我的信息
   */
  async getMyInfo() {
    return await BaseApi.get('/x/space/v2/myinfo')
  },

    /**
     * 获取用户信息
     * @param mid
     */
    async getInfo(mid: number | string) {
        return await BaseApi.get(`/x/space/wbi/acc/info`, {
            mid
        })
  }
}
