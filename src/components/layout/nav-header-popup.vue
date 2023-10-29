<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const logout = () => {
  userStore.logout()
}
</script>

<template>
  <div class="nav-header-popup bg-white">
    <div class="user-profile">
      <img
        referrerpolicy="no-referrer"
        :src="userStore.profile.face"
        alt="my avatar"
        class="avatar"
      />
      <p class="user-name">{{ userStore.profile.name }}</p>
    </div>
    <div class="menus">
      <button @click="logout" class="btn text-btn menu-item">退出登录</button>
    </div>
  </div>
</template>

<style scoped>
.nav-header-popup {
  min-width: 300px;
  border-radius: var(--radius-normal);
  box-sizing: border-box;
  padding: var(--padd-xg);
  position: absolute;
  top: calc(var(--nav-height) + var(--padd-sm));
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--shadow-blur);
}

.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-name {
  padding: var(--padd-lg);
}

.menu-item {
  display: block;
  padding: var(--padd-lg);
  width: 100%;
}
</style>
