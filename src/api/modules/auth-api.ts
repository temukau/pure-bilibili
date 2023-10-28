import axios from "axios";

export const AuthApi = {

    async getScanQRCodeStatus(qrCodeKey: string) {
        return await axios.get(`/passport/x/passport-login/web/qrcode/poll?qrcode_key=${qrCodeKey}&source=main-fe-header`)
    },

    async generateLoginQRCode() {
        return await axios.get('/passport/x/passport-login/web/qrcode/generate')
    }

}