<script setup lang="ts">
import TabList from "@/components/tab/tab-list.vue";
import TabItem from "@/components/tab/tab-item.vue";
</script>

<template>
  <tab-list>
    <tab-item to="/dynamic/hot">热门</tab-item>
    <tab-item to="/dynamic/follow">关注</tab-item>
  </tab-list>
</template>

<style scoped></style>
