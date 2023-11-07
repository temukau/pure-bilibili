<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'

const userStore = useUserStore()
const modalStore = useModalStore()
</script>

<template>
  <div v-if="!userStore.isLogin" class="un-login">
    <div class="un-login-msg">需要登录 (┬┬﹏┬┬))</div>
    <div class="login-btn btn default" @click="modalStore.toggleLoginModal()">登录</div>
  </div>
  <template v-else>
    <slot></slot>
  </template>
</template>

<style scoped>
.un-login {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-btn {
  margin-top: 20px;
}
</style>
