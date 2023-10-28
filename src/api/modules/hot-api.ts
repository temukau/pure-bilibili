import {BaseApi} from "@/api/base";

export const HotApi = {

    async getHostList(pageNumber: number, pageSize: number) {
        return await  BaseApi.get('/x/web-interface/popular', {
            pn: pageNumber,
            ps: pageSize
        })
    },

    async getRecommendList(lastIndex: number, size: number) {
        return await BaseApi.get('/x/web-interface/wbi/index/top/feed/rcmd', {
            ps: size,
            fresh_idx: lastIndex,
            fresh_type: 3,
            fetch_row: 1
        })
    }

}