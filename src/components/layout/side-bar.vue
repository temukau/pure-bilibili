<script setup lang="ts">
import TabHomeIcon from '@/components/icons/icon-tab-home.vue'
import TabFeedIcon from '@/components/icons/icon-tab-dynamic.vue'
import TabMineIcon from '@/components/icons/icon-tab-mine.vue'
</script>

<template>
  <div class="side-bar">
    <router-link class="side-bar-nav-item" to="/" active-class="active">
      <tab-home-icon
        class="icon"
        :selected="$route.name?.toString().startsWith('Home')"
      ></tab-home-icon>
    </router-link>
    <router-link class="side-bar-nav-item" to="/dynamic" active-class="active">
      <tab-feed-icon
        class="icon"
        :selected="$route.name?.toString().startsWith('Dynamic')"
      ></tab-feed-icon>
    </router-link>
    <router-link class="side-bar-nav-item" to="/space" active-class="active">
      <tab-mine-icon
        class="icon"
        :selected="$route.name?.toString().startsWith('Space')"
      ></tab-mine-icon>
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
  padding: var(--spacing-xg);
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

.side-bar-nav-item.active svg,
.side-bar-nav-item.active svg path {
  fill: var(--color-primary);
}

.icon {
  width: 38px;
  height: 38px;
}
</style>
