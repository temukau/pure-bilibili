import { BaseApi } from '@/api/base'

export const DynamicApi = {
  /**
   * 获取热门动态
   * @param pageNumber 页码
   */
  async getHotList(pageNumber: number) {
    return BaseApi.get(`/x/polymer/web-dynamic/v1/feed/hot`, {
      page: pageNumber
    })
  }
}
