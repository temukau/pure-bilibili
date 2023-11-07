<script setup lang="ts">
defineProps({
  mid: {
    type: Number,
    required: true
  },
  isFollowed: {
    type: [Boolean, Number],
    default: 0
  }
})

defineEmits(['follow', 'unfollow'])
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
