<script setup lang="ts">
import TabSwitch from "@/components/tab-switch.vue";
import {ref, watch} from "vue";
import {HotApi} from "@/api/modules/hot-api";
import VideoCardItem from "@/components/video-card-item.vue";
import VideoGrid from "@/components/video-grid.vue";

const tabTitles = ["综合热门", "每周必看", "入站必刷", "排行榜", "音乐榜"];
const tabActive = ref(0);

const hotListState = ref({
  list: [],
  page: 1,
  size: 20,
})

const getHotList = async () => {
  const res = await HotApi.getHostList(hotListState.value.page, hotListState.value.size);
  hotListState.value.list = res.data.list
}

watch(tabActive, (newVal, oldVal) => {
  if (newVal === oldVal) return;
  switch (newVal) {
    case 0:
      getHotList();
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
}, {
  immediate: true
});
</script>

<template>
  <div class="hot">
    <tab-switch v-model:active="tabActive" tab-style="normal" class="tab" :titles="tabTitles"></tab-switch>
    <video-grid v-if="tabActive === 0">
      <video-card-item v-for="(item, index) in hotListState.list" :item="item" :key="index"/>
    </video-grid>
  </div>
</template>

<style scoped>
.video-grid {
  margin-top: 20px;
}
</style>