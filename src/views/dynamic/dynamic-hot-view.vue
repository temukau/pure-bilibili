<script setup lang="ts">
import {onMounted, ref} from "vue";
import {DynamicApi} from "@/api/modules/dynamic-api";
import DynamicItem from "@/components/dynamic/dynamic-item.vue";
import {useMainReachBottom} from "@/hooks/useMainReachBottom";
import {useGlobalRefresh} from "@/hooks/useGlobalRefresh";

const dynamicListState = ref({
  list: [],
  page: 1,
  hasMore: true
})

onMounted(() => {
  getDynamicList()
})

useMainReachBottom(() => {
  if (dynamicListState.value.hasMore) {
    getDynamicList();
  }
})

useGlobalRefresh(() => {
  dynamicListState.value.page = 1
  dynamicListState.value.list = []
  dynamicListState.value.hasMore = true
  getDynamicList()
})

async function getDynamicList() {
  const res = await DynamicApi.getHotList(dynamicListState.value.page)
  dynamicListState.value.list = dynamicListState.value.list.concat(res.data.items)
  dynamicListState.value.hasMore = res.data.has_more;
}
</script>

<template>
  <div class="dynamic-list">
    <dynamic-item v-for="(item, index) in dynamicListState.list" :item="item" :key="index"/>
  </div>
</template>

<style scoped>
.dynamic-list {
  margin-top: var(--padd-normal);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
