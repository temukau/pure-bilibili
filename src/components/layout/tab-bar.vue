<script setup lang="ts">
import TabHomeIcon from '@/components/icons/icon-tab-home.vue'
import TabMineIcon from '@/components/icons/icon-tab-mine.vue'
import TabFeedIcon from '@/components/icons/icon-tab-dynamic.vue'
</script>

<template>
  <div class="tab-bar bg-white">
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
.tab-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: var(--tab-bar-height);
  z-index: var(--tab-z-index);
}
.tab-bar .icon {
  width: 32px;
  height: 32px;
}
</style>
