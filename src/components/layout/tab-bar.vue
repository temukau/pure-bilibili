<script setup lang="ts">
import TabHomeIcon from "@/components/icons/tab-home-icon.vue";
import TabMineIcon from "@/components/icons/tab-mine-icon.vue";
import TabFeedIcon from "@/components/icons/tab-feed-icon.vue";
</script>

<template>
  <div class="tab-bar bg-white">
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
.tab-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: var(--tab-height);
  z-index: var(--tab-z-index);
}
.tab-bar .icon {
  width: 32px;
  height: 32px;
}
</style>