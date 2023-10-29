<script setup lang="ts">

</script>

<template>
  <div class="tab">
    <slot/>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  height: var(--tab-height);
  gap: var(--padd-lg);
}
</style>