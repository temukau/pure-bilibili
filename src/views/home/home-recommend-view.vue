<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { PopularApi } from '@/api/modules/popular-api'
import VideoCardItem from '@/components/video/video-card-item.vue'
import VideoGrid from '@/components/video/video-grid.vue'
import { useMainReachBottom } from '@/hooks/useMainReachBottom'
import LoadingStatus from '@/components/feedback/loading-status.vue'
import { useGlobalRefresh } from '@/hooks/useGlobalRefresh'

const list = ref([])
const size = ref(20)
const last = ref(0)
const loading = ref(false)

onMounted(async () => {
  await getRecommendList()
})

useMainReachBottom(() => {
  getRecommendList()
})

useGlobalRefresh(() => {
  list.value = []
  last.value = 0
  getRecommendList()
})

const getRecommendList = async () => {
  loading.value = true
  const res = await PopularApi.getRecommendList(last.value, size.value).finally(() => {
    loading.value = false
  })
  list.value = list.value.concat(res.data.item.filter((item: any) => item.goto !== 'login_card'))
  last.value = last.value + res.data.item.length
}
</script>

<template>
  <video-grid class="recommend-list">
    <video-card-item v-for="(item, index) in list" :item="item" :key="index" />
  </video-grid>
  <loading-status :loading="loading" />
</template>

<style scoped>
.recommend-list {
  overflow-y: auto;
}
</style>
