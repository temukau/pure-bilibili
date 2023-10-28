import {BaseApi} from "@/api/base";

export const UserApi = {

    async getMyInfo() {
        return await BaseApi.get('/x/space/v2/myinfo')
    }

}