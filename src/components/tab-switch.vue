<script setup lang="ts">
defineProps({
  titles: {
    type: Array,
    required: true
  },
  active: {
    type: Number,
    default: 0
  },
  tabStyle: {
    type: String,
    default: 'primary'
  }
})

defineEmits(['update:active'])
</script>

<template>
  <div class="tab">
    <div class="tab-titles">
      <div
          v-for="(title, index) in titles"
          :key="index"
          :class="['tab-title', { 'active': index === active, 'primary': tabStyle === 'primary', 'normal': tabStyle === 'normal' }]"
          @click="$emit('update:active', index)"
      >
        <div class="tab-title-inner">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab {
  position: sticky;
  flex-direction: column;
  overflow-x: auto;
}

.tab-titles {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.tab-title {
  user-select: none;
  flex: 0 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.tab-title.primary {
  border-radius: var(--radius-normal);
  padding: var(--padding-normal) var(--padding-large);
  background: var(--bg-color-white);
}

.tab-title.normal {
  border-radius: var(--radius-normal);
  padding: var(--padding-normal) var(--padding-large);
  background: var(--bg-color-white);
}

.tab-title.primary.active {
  color: var(--bg-color-white);
  background-color: var(--color-primary);
}

.tab-title.normal.active {
  color: var(--color-primary);
  background-color: var(--color-secondary);
}
</style>