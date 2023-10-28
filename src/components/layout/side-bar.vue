<script setup lang="ts">
import TabHomeIcon from "@/components/icons/tab-home-icon.vue";
import TabFeedIcon from "@/components/icons/tab-feed-icon.vue";
import TabMineIcon from "@/components/icons/tab-mine-icon.vue";
</script>

<template>
  <div class="side-bar">
    <router-link class="side-bar-nav-item" to="/" active-class="active">
      <tab-home-icon class="icon" :selected="$route.name === 'home'"></tab-home-icon>
    </router-link>
    <router-link class="side-bar-nav-item" to="/feed" active-class="active">
      <tab-feed-icon class="icon" :selected="$route.name === 'feed'"></tab-feed-icon>
    </router-link>
    <router-link class="side-bar-nav-item" to="/space" active-class="active">
      <tab-mine-icon class="icon" :selected="$route.name === 'space'"></tab-mine-icon>
    </router-link>
  </div>
</template>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: var(--side-width);
  height: 100%;
  background-color: var(--bg-color-white);
  padding: var(--padding-large);
  box-sizing: border-box;
}
.side-bar-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}
.icon {
  width: 42px;
  height: 42px;
}
</style>