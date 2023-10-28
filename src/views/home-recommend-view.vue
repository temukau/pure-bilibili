<script setup lang="ts">
import {nextTick, onMounted, ref} from "vue";
import {HotApi} from "@/api/modules/hot-api";
import VideoCardItem from "@/components/video-card-item.vue";
import VideoGrid from "@/components/video-grid.vue";

const list = ref([]);
const size = ref(20);
const last = ref(0);

onMounted(async () => {
  list.value = await getRecommendList();
})

const getRecommendList = async () => {
  const res = await HotApi.getRecommendList(last.value, size.value);
  return res.data.item
}
</script>

<template>
  <video-grid class="recommend-list">
    <video-card-item v-for="(item, index) in list" :item="item" :key="index" />
  </video-grid>
</template>

<style scoped>
</style>