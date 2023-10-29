<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="loading-status">
    <div v-if="loading" class="loading-msg">加载中...</div>
    <div v-else class="loading-msg">没有更多了 (￣▽￣)"</div>
  </div>
</template>

<style scoped>
.loading-status {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--padd-xg) 0;
}

.loading-msg {
  color: var(--text-color-secondary);
}
</style>
