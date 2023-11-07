import axios from 'axios'
import ErrCode from '@/config/err-code'
import { useModalStore } from '@/stores/modal'

type BiliResponse<T> = {
  code: number
  message: string
  ttl: number
  data: T
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  withCredentials: true
})

const get = async <T>(url: string, params?: any): Promise<BiliResponse<any>> => {
  const response = await axiosInstance.get<BiliResponse<T>>(url, { params })
  return response.data
}

const post = async <T>(url: string, data?: any): Promise<BiliResponse<any>> => {
  const response = await axiosInstance.post<BiliResponse<T>>(url, data)
  return response.data
}

axiosInstance.interceptors.request.use((config) => {
  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    return checkCode(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

const checkCode = (response: any): Promise<any> => {
  const modalStore = useModalStore()
  const code = response.data.code
  if (code != ErrCode.SUCCESS) {
    if (code == ErrCode.UN_LOGIN && !response.config.url.endsWith('myinfo')) {
      modalStore.openLoginModal()
    }
    return Promise.reject(response)
  } else {
    return Promise.resolve(response)
  }
}

export const BaseApi = {
  get,
  post
}
