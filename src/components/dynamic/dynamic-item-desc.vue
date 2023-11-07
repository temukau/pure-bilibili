<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<any>,
    default: () => ({})
  }
})
</script>

<template>
  <div class="dynamic-desc" v-if="item != null">
    <span v-for="(node, index) in item.rich_text_nodes" :key="index">
      <a v-if="node.jump_url" :href="node.jump_url">{{ node.text }}</a>
      <span v-else v-text="node.text"></span>
    </span>
  </div>
</template>

<style scoped>
.dynamic-desc {
  margin-top: var(--padd-normal);
}
.dynamic-desc span {
  white-space: pre-wrap;
}
</style>
