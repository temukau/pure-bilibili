<script setup lang="ts">
import RefreshIcon from '@/components/icons/refresh-icon.vue'
</script>

<template>
  <div class="refresh-btn">
    <refresh-icon />
  </div>
</template>

<style scoped>
.refresh-btn {
  box-shadow: var(--shadow-blur);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-white);
  padding: var(--padd-lg);
  border-radius: var(--radius-circle);
}
.refresh-btn.active {
  animation: refresh-animation 0.3s ease-in-out;
}
.refresh-btn .icon {
  width: 32px;
  height: 32px;
}

@media screen and (max-width: 768px) {
  .refresh-btn {
    padding: var(--padd-normal);
  }
  .refresh-btn .icon {
    width: 25px;
    height: 25px;
  }
}

@keyframes refresh-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
