<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true
  },
  tabStyle: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <router-link class="tab-item" :to="to" active-class="active"
               :class="{ primary: tabStyle === 'primary', normal: tabStyle === 'normal' }">
    <slot/>
  </router-link>
</template>

<style scoped>
.tab-item {
  box-sizing: border-box;
  padding: 0 var(--padd-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  color: var(--text-color-normal);
  background-color: var(--bg-color-white);
  border-radius: var(--radius-normal);
}

.tab-item.normal {
  background: var(--bg-color-white);
}

.tab-item.primary.active {
  background-color: var(--color-primary);
  color: var(--bg-color-white);
}

.tab-item.normal.active {
  background-color: rgba(251, 114, 153, 0.2);
  color: var(--color-primary);
}
</style>