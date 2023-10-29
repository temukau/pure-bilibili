import axios from 'axios'
import cookies from 'js-cookie'

export const PassportApi = {
  /**
   * 退出登录
   */
  async logout() {
    return await axios.post(
      `/passport/login/exit/v2`,
      {
        biliCSRF: cookies.get('bili_jct'),
        gourl: 'https://www.bilibili.com/'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: document.cookie
        }
      }
    )
  },

  /**
   * 获取登录二维码状态
   * @param qrCodeKey 二维码key
   */
  async getScanQRCodeStatus(qrCodeKey: string) {
    return await axios.get(
      `/passport/x/passport-login/web/qrcode/poll?qrcode_key=${qrCodeKey}&source=main-fe-header`
    )
  },

  /**
   * 生成登录二维码
   */
  async generateLoginQRCode() {
    return await axios.get('/passport/x/passport-login/web/qrcode/generate')
  }
}
