<script setup lang="ts">
import {useModalStore} from "@/stores/modal";
import {onMounted, ref, watch} from "vue";
import {AuthApi} from "@/api/modules/auth-api";
import qrcode from "qrcode";
import CloseIcon from "@/components/icons/close-icon.vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
const modalStore = useModalStore();
const loginModalRef = ref<HTMLElement | null>(null);
const qrCodeCheckTimer = ref<number | undefined>();
const qrCodeData = ref({
  url: '',
  qrCodeKey: '',
  qrCodeImage: ''
});

const qrCodeStatus = ref({
  url: "",
  refresh_token: "",
  timestamp: 0,
  code: 86101,
  message: "未扫码"
});

const cleanTimer = () => {
  if (qrCodeCheckTimer.value) {
    window.clearInterval(qrCodeCheckTimer.value);
    qrCodeCheckTimer.value = undefined;
  }
}

watch(() => modalStore.loginModalVisible, (val) => {
  if (!val && qrCodeCheckTimer.value) {
    cleanTimer();
  } else {
    qrCodeCheckTimer.value = window.setInterval(checkQrCodeStatus, 1000)
  }
})

onMounted(() => {
  if (!userStore.isLogin) {
    getQrCode();
  }
})

const getQrCode = async () => {
  const res = await AuthApi.generateLoginQRCode();
  const data = res.data.data;
  qrCodeData.value = {
    url: data.url,
    qrCodeKey: data.qrcode_key,
    qrCodeImage: await qrcode.toDataURL(data.url)
  }
}

const checkQrCodeStatus = async () => {
  const res = await AuthApi.getScanQRCodeStatus(qrCodeData.value.qrCodeKey);
  qrCodeStatus.value = res.data.data

  switch (qrCodeStatus.value.code) {
      // 登录成功
    case 0:
      cleanTimer();
      saveCookie(qrCodeStatus.value.url)
      modalStore.toggleLoginModal();
      break;
      // 二维码已失效
    case 86038:
      cleanTimer();
      await getQrCode();
      break;
  }
}

const saveCookie = (url: string) => {
  const cookies = url.split("?")[1]
  const cookieList = cookies.split("&")
  for (let i = 0; i < cookieList.length; i++) {
    const cookie = cookieList[i].split("=")
    document.cookie = cookie[0] + "=" + cookie[1]
  }
}
</script>

<template>
  <teleport to="body">
    <div ref="loginModalRef" class="login-modal-mask"
         :class="{ visible: modalStore.loginModalVisible, hidden: !modalStore.loginModalVisible}">
      <div class="login-modal bg-white">
        <div class="login-modal-close-btn" @click="modalStore.toggleLoginModal()">
          <close-icon/>
        </div>
        <div class="login-modal-title">扫描二维码登录</div>
        <div class="login-qr-code-box">
          <img :src="qrCodeData.qrCodeImage" alt="login qr code"/>
        </div>
        <div class="login-qr-code-msg">{{ qrCodeStatus.message }}</div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.login-modal-mask {
  display: none;
  z-index: var(--modal-z-index);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  justify-content: center;
  align-items: center;
}

.login-modal-mask.visible {
  display: flex;
  animation: show .3s;
}

.login-modal-mask.hidden {
  animation: close .3s;
}

.login-modal {
  position: relative;
  border-radius: var(--radius-normal);
  padding: calc(var(--padding-large) * 2);
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

.login-qr-code-msg {
  font-size: var(--font-size-sm);
  text-align: center;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>