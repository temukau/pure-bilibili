<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { PopularApi } from '@/api/modules/popular-api'
import VideoCardItem from '@/components/video/video-card-item.vue'
import VideoGrid from '@/components/video/video-grid.vue'
import LoadingStatus from '@/components/feedback/loading-status.vue'
import { useMainReachBottom } from '@/hooks/useMainReachBottom'
import { useGlobalRefresh } from '@/hooks/useGlobalRefresh'

const tabActive = ref(0)
const loading = ref(false)

const hotListState = ref({
  list: [],
  page: 1,
  size: 20,
  hasMore: true
})

onMounted(async () => {
  await getHotList()
})

useMainReachBottom(() => {
  if (hotListState.value.hasMore) {
    getHotList()
  }
})

useGlobalRefresh(() => {
  hotListState.value.page = 1
  hotListState.value.list = []
  getHotList()
})

/**
 * 获取综合热门列表
 */
async function getHotList() {
  loading.value = true
  const res = await PopularApi.getHostList(
    hotListState.value.page,
    hotListState.value.size
  ).finally(() => {
    loading.value = false
  })
  hotListState.value.list = hotListState.value.list.concat(res.data.list)
  hotListState.value.hasMore = !res.data.no_more
  if (!res.data.no_more) {
    hotListState.value.page++
  }
}
</script>

<template>
  <video-grid v-if="tabActive === 0">
    <video-card-item v-for="(item, index) in hotListState.list" :item="item" :key="index" />
  </video-grid>

  <loading-status :loading="loading" />
</template>

<style scoped>
.video-grid {
  margin-top: var(--padd-normal);
}
</style>
