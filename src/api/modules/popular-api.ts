import { BaseApi } from '@/api/base'

export const PopularApi = {
  /**
   * 获取每周必看视频列表
   * @param seriesNumber 期数
   */
  async getWeeklyList(seriesNumber: number) {
    return await BaseApi.get('/x/web-interface/popular/series/one', {
      number: seriesNumber
    })
  },

  /**
   * 获取每周必看期数列表
   */
  async getWeeklySeriesList() {
    return await BaseApi.get('/x/web-interface/popular/series/list')
  },

  /**
   * 获取入站必刷列表
   * @param pageNumber 页码
   * @param pageSize 每页大小
   */
  async getPreciousList(pageNumber: number, pageSize: number) {
    return await BaseApi.get('/x/web-interface/popular/precious', {
      page: pageNumber,
      page_size: pageSize
    })
  },

  /**
   * 获取综合热门列表
   * @param pageNumber 页码
   * @param pageSize 每页大小
   */
  async getHostList(pageNumber: number, pageSize: number) {
    return await BaseApi.get('/x/web-interface/popular', {
      pn: pageNumber,
      ps: pageSize
    })
  },

  /**
   * 获取推荐列表
   * @param lastIndex 上一页最后一条数据的索引
   * @param size 每页大小
   */
  async getRecommendList(lastIndex: number, size: number) {
    return await BaseApi.get('/x/web-interface/wbi/index/top/feed/rcmd', {
      ps: size,
      fresh_idx: lastIndex,
      fresh_type: 3,
      fetch_row: 1
    })
  }
}
