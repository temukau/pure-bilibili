<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  items: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="dynamic-major-img-list" v-if="items">
    <img
      v-for="(img, index) in items"
      referrerpolicy="no-referrer"
      :key="index"
      :width="img.width"
      :height="img.height"
      alt="img"
      :src="img.src"
    />
  </div>
</template>

<style scoped>
.dynamic-major-img-list {
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--padd-normal);
}
.dynamic-major-img-list img {
  flex: 1;
  object-fit: cover;
  max-width: 210px;
  max-height: 280px;
  border: 1px solid var(--color-border);
}
@media screen and (max-height: 768px) {
  .dynamic-major-img-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .dynamic-major-img-list img {
    max-width: 100%;
    max-height: 280px;
  }
}
</style>
