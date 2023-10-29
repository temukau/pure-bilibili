<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { onMounted, ref, watch } from 'vue'
import { PassportApi } from '@/api/modules/passport-api'
import qrcode from 'qrcode'
import CloseIcon from '@/components/icons/close-icon.vue'
import { useUserStore } from '@/stores/user'
import ErrCode from '@/config/err-code'
import RefreshIcon from '@/components/icons/refresh-icon.vue'

const userStore = useUserStore()
const modalStore = useModalStore()
const loginModalRef = ref<HTMLElement | null>(null)

const qrCodeCheckTimer = ref<number | undefined>()

const qrCodeData = ref({
  url: '',
  qrCodeKey: '',
  qrCodeImage: ''
})

const qrCodeStatus = ref({
  url: '',
  refresh_token: '',
  timestamp: 0,
  code: ErrCode.QR_CODE_WAIT_SCAN,
  message: '未扫码'
})

const cleanTimer = () => {
  if (qrCodeCheckTimer.value) {
    window.clearInterval(qrCodeCheckTimer.value)
    qrCodeCheckTimer.value = undefined
  }
}

watch(
  () => modalStore.loginModalVisible,
  (val) => {
    if (!val && qrCodeCheckTimer.value) {
      cleanTimer()
    } else {
      qrCodeCheckTimer.value = window.setInterval(checkQrCodeStatus, 1000)
    }
  }
)

onMounted(() => {
  if (!userStore.isLogin) {
    getQrCode()
  }
})

const getQrCode = async () => {
  const res = await PassportApi.generateLoginQRCode()
  const data = res.data.data
  qrCodeData.value = {
    url: data.url,
    qrCodeKey: data.qrcode_key,
    qrCodeImage: await qrcode.toDataURL(data.url)
  }
}

const checkQrCodeStatus = async () => {
  const res = await PassportApi.getScanQRCodeStatus(qrCodeData.value.qrCodeKey)
  qrCodeStatus.value = res.data.data

  switch (qrCodeStatus.value.code) {
    // 登录成功
    case ErrCode.SUCCESS:
      loginSuccess()
      break
    // 二维码已失效
    case ErrCode.QR_CODE_EXPIRED:
      refreshQrCode()
      break
  }
}

const loginSuccess = () => {
  cleanTimer()
  saveCookie(qrCodeStatus.value.url)
  modalStore.toggleLoginModal()
  userStore.fetchProfile()
}

const refreshQrCode = () => {
  cleanTimer()
  getQrCode()
  qrCodeCheckTimer.value = window.setInterval(checkQrCodeStatus, 1000)
}

const saveCookie = (url: string) => {
  const cookies = url.split('?')[1]
  const cookieList = cookies.split('&')
  for (let i = 0; i < cookieList.length; i++) {
    const cookie = cookieList[i].split('=')
    document.cookie = cookie[0] + '=' + cookie[1]
  }
}
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-show="modalStore.loginModalVisible" ref="loginModalRef" class="login-modal-mask">
        <div class="login-modal bg-white">
          <div class="login-modal-close-btn" @click="modalStore.toggleLoginModal()">
            <close-icon />
          </div>
          <div class="login-modal-title">扫描二维码登录</div>
          <div class="login-qr-code-box">
            <img class="qr-code-img" :src="qrCodeData.qrCodeImage" alt="login qr code" />
            <div @click="refreshQrCode" class="refresh-qr-code-btn">
              <refresh-icon class="refresh-qr-code-icon" />
            </div>
          </div>
          <div class="login-qr-code-msg">{{ qrCodeStatus.message }}</div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.login-modal-mask {
  z-index: var(--modal-z-index);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-modal {
  position: relative;
  border-radius: var(--radius-normal);
  padding: calc(var(--padd-xg) * 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--shadow-blur);
}

.login-modal-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.login-modal-title {
  text-align: center;
  font-weight: bold;
  font-size: var(--font-size-lg);
}

.login-qr-code-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.refresh-qr-code-btn {
  display: none;
  position: absolute;
  cursor: pointer;
  padding: var(--padd-normal);
  border-radius: var(--radius-circle);
  background-color: var(--bg-color-white);
}

.login-qr-code-box:hover {
  .qr-code-img {
    opacity: 0.2;
  }

  .refresh-qr-code-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .refresh-qr-code-icon {
    width: 25px;
    height: 25px;
  }
}

.login-qr-code-msg {
  font-size: var(--font-size-sm);
  text-align: center;
}
</style>
