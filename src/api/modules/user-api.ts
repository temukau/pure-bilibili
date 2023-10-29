import { BaseApi } from '@/api/base'

export const UserApi = {
  /**
   * 获取我的信息
   */
  async getMyInfo() {
    return await BaseApi.get('/x/space/v2/myinfo')
  }
}
