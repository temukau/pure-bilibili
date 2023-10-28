<script setup lang="ts">
defineProps({
  isFollowed: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div v-if="isFollowed" class="follow-btn btn active">已关注</div>
  <div v-else class="follow-btn btn">关注</div>
</template>

<style scoped>
.follow-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-sm);
  width: 40px;
  height: 20px;
  background-color: var(--bg-color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}
.follow-btn.active {
  background-color: var(--color-primary);
  color: var(--bg-color-white);
}
</style>