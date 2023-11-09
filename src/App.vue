<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavHeader from '@/components/layout/nav-header.vue'
import SideBar from '@/components/layout/side-bar.vue'
import LoginModal from '@/components/modal/login-modal.vue'
import TabBar from '@/components/layout/tab-bar.vue'
import {onMounted} from 'vue'
import {useUserStore} from '@/stores/user'
import RefreshBtn from '@/components/button/refresh-btn.vue'

onMounted(() => {
  useUserStore().fetchProfile()
})
</script>

<template>
  <header id="header" class="header">
    <nav-header />
  </header>
  <aside class="aside">
    <side-bar />
  </aside>
  <main id="main" class="main">
    <router-view />
  </main>
  <footer id="footer" class="footer">
    <tab-bar />
  </footer>
  <div class="dialogs">
    <login-modal></login-modal>
  </div>
  <refresh-btn id="global-refresh-btn" />
</template>

<style scoped>
.header {
  top: 0;
  position: fixed;
  width: 100%;
  height: var(--nav-height);
  z-index: var(--nav-z-index);
  background-color: #fff;
}
.aside {
  position: fixed;
  left: 0;
  width: var(--side-width);
  height: calc(100% - var(--nav-height));
  top: var(--nav-height);
}
.main {
  box-sizing: border-box;
  position: fixed;
  left: var(--side-width);
  width: calc(100% - var(--side-width));
  height: calc(100% - var(--nav-height));
  padding: var(--spacing-xg);
  top: var(--nav-height);
  overflow: auto;
}
.footer {
  width: 100%;
  height: var(--tab-bar-height);
  z-index: var(--tab-z-index);
  position: fixed;
  bottom: 0;
  display: none;
}

#global-refresh-btn {
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: none;
  border-radius: var(--radius-circle);
}

@media screen and (max-width: 768px) {
  .aside {
    display: none;
  }
  .main {
    left: 0;
    width: 100%;
    height: calc(100% - var(--nav-height) - var(--tab-bar-height));
    padding: var(--spacing-normal);
  }
  .footer {
    display: block;
  }
  #global-refresh-btn {
    right: 10px;
    bottom: calc(var(--tab-height) + var(--spacing-xg) * 2);
  }
}
</style>
