<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  noMore: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="video-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.video-grid {
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--padd-lg);
  justify-content: space-between;
}

@media screen and (max-width: 1300px) {
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1024px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .video-grid {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
}
</style>
