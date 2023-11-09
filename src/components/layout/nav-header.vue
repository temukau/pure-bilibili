<script setup lang="ts">
import BiliLogo from '@/components/icons/bili-logo.vue'
import {useUserStore} from '@/stores/user'
import SearchIcon from '@/components/icons/icon-search.vue'
import {useModalStore} from '@/stores/modal'
import {ref} from 'vue'
import NavHeaderPopup from '@/components/layout/nav-header-popup.vue'
import router from '@/router'

const state = ref({
  searchInputText: '',
  isSearchInputFocused: false,
  showPopup: false
})

const userStore = useUserStore()
const modalStore = useModalStore()

const switchInputFocused = (isFocused: boolean) => {
  state.value.isSearchInputFocused = isFocused
}

const togglePopup = () => {
  state.value.showPopup = !state.value.showPopup
}

const goToMySpace = async () => {
  await router.push({
    name: 'Space'
  })
}
</script>

<template>
  <div class="nav-header">
    <div class="logo-box">
      <bili-logo />
    </div>
    <div class="right-box">
      <div
        class="search-box"
        :class="{ active: state.isSearchInputFocused, inactive: !state.isSearchInputFocused }"
      >
        <input
          @focus="switchInputFocused(true)"
          @blur="switchInputFocused(false)"
          v-model="state.searchInputText"
          type="text"
          placeholder="搜索"
        />
        <SearchIcon class="search-icon" />
      </div>
      <div v-if="userStore.isLogin && !userStore.fetching" class="login-info">
        <img
          @mouseover="togglePopup"
          @click="goToMySpace"
          referrerpolicy="no-referrer"
          :src="userStore.profile.face"
          alt="my avatar"
          class="avatar"
        />
      </div>
      <div v-else class="login-info">
        <button
          v-show="!userStore.fetching"
          @click="modalStore.toggleLoginModal()"
          class="btn login-btn"
        >
          登录
        </button>
      </div>
    </div>
    <nav-header-popup
      class="popup"
      @mouseleave="togglePopup"
      v-if="state.showPopup && userStore.isLogin"
    />
  </div>
</template>

<style scoped>
.nav-header {
  transition: 0.3s ease-in-out;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 65px;
  position: relative;
  padding: 20px;
  box-shadow: var(--shadow-normal);
}

.right-box {
  display: flex;
  align-items: center;
  gap: var(--spacing-xg);
}

.search-box {
  box-sizing: border-box;
  width: 200px;
  padding: var(--spacing-sm) var(--spacing-normal);
  border: 1px solid var(--color-border);
  background-color: var(--bg-color-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-normal);
}

.search-box.active {
  animation: search-box-animation 0.3s ease-in-out forwards;
}

.search-box.inactive {
  animation: search-box-inactive-animation 0.3s ease-in-out forwards;
}

.search-box input {
  display: block;
  width: calc(100% - 20px);
  border: 0;
  background: 0;
  color: var(--text-color-secondary);
  outline: 0;
  box-sizing: border-box;
  padding: 5px 10px;
}

.search-icon {
  cursor: pointer;
  margin-left: 10px;
}

@media screen and (max-width: 768px) {
  .nav-header {
    padding: 10px;
  }

  .logo-box {
    transform: scale(0.8) translateX(-10px);
  }

  .logo-box svg {
    width: 100px;
  }

  .search-box {
    width: 100%;
  }

  .search-box.active {
    animation: none;
    width: 100%;
  }

  .search-box.inactive {
    animation: none;
    width: 100%;
  }

  .search-box input {
    width: 100px;
  }

  .right-box {
    gap: 10px;
  }

  .btn {
    padding: var(--spacing-sm) var(--spacing-normal);
  }

  .popup {
    display: none;
  }
}

@keyframes search-box-animation {
  100% {
    width: 300px;
  }
}

@keyframes search-box-inactive-animation {
  0% {
    width: 300px;
  }
  100% {
    width: 200px;
  }
}
</style>
