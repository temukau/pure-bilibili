<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavHeader from "@/components/layout/nav-header.vue";
import SideBar from "@/components/layout/side-bar.vue";
import LoginModal from "@/components/modal/login-modal.vue";
import TabBar from "@/components/layout/tab-bar.vue";
import {onMounted} from "vue";
import {useUserStore} from "@/stores/user";

onMounted(() => {
  useUserStore().fetchProfile();
})
</script>

<template>
  <header class="header">
    <nav-header/>
  </header>
  <aside class="aside">
    <side-bar/>
  </aside>
  <main class="main">
    <router-view/>
  </main>
  <footer class="footer">
    <tab-bar/>
  </footer>
  <div class="dialogs">
    <login-modal></login-modal>
  </div>
</template>

<style scoped>
.header {
  top: 0;
  position: fixed;
  width: 100%;
  height: var(--nav-height);
  z-index: var(--nav-z-index);
  background-color: rgba(255, 255,255, .7);
  backdrop-filter: blur(16%);
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
  padding: var(--padding-large);
  top: var(--nav-height);
  overflow: auto;
}
.footer {
  width: 100%;
  height: var(--tab-height);
  z-index: var(--tab-z-index);
  position: fixed;
  bottom: 0;
  display: none;
}

@media screen and (max-width: 768px) {
  .aside {
    display: none;
  }
  .main {
    left: 0;
    width: 100%;
    height: calc(100% - var(--nav-height) - var(--tab-height));
    padding: var(--padding-normal);
  }
}

@media screen and (max-width: 768px) {
  .footer {
    display: block;
  }
}
</style>
