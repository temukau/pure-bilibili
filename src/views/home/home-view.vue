<script setup lang="ts">
import TabLinkItem from '@/components/tab/tab-item.vue'
import TabList from '@/components/tab/tab-list.vue'
</script>

<template>
  <div class="home">
    <tab-list>
      <tab-link-item to="/home/recommend">推荐</tab-link-item>
      <tab-link-item to="/home/hot">热门</tab-link-item>
    </tab-list>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.home {
  box-sizing: border-box;
}

.container {
  margin-top: var(--padd-normal);
}
</style>
