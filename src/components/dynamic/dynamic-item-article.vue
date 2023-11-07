<script setup lang="ts">
import type {PropType} from "vue";
import {computed} from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<any>,
    required: true
  }
})

const limit = 130;

const splitDesc = computed(() => {
  return props.item.desc.length > limit ? props.item.desc.slice(0, limit) + '...' : props.item.desc
})
</script>

<template>
  <div class="dynamic-item-article" v-if="item">
    <div class="dynamic-item-article-title">{{ item.title }}</div>
    <div class="dynamic-item-article-desc">{{ splitDesc }}</div>
    <div class="view-more-btn text-btn">全文</div>
  </div>
</template>

<style scoped>
.dynamic-item-article-title {
  font-size: var(--font-size-lg);
  color: var(--text-color-secondary);
}
.dynamic-item-article-desc {
  margin: var(--padd-normal) 0;
}
</style>