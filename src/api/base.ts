import axios from "axios";

type BiliResponse<T> = {
    code: number;
    message: string;
    ttl: number;
    data: T;
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
});

const get = async <T>(url: string, params?: any): Promise<BiliResponse<any>> => {
    const response = await axiosInstance.get<BiliResponse<T>>(url, { params });
    return response.data;
}

const post = async <T>(url: string, data?: any): Promise<BiliResponse<any>> => {
    const response = await axiosInstance.post<BiliResponse<T>>(url, data);
    return response.data;
}

axiosInstance.interceptors.request.use((config) => {
    config.headers['Referer'] = 'https://www.bilibili.com/';
    config.headers['Cookie'] = document.cookie;
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    const responseData = response.data;
    if (responseData.code !== 0) {
        return Promise.reject(response);
    } else {
        return Promise.resolve(response);
    }
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
export const BaseApi = {
    get,
    post
}