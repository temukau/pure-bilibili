<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'
import {DynamicApi} from '@/api/modules/dynamic-api'
import UnLogin from '@/components/feedback/un-login.vue'
import DynamicUpList from '@/components/dynamic/dynamic-up-list.vue'
import {useGlobalRefresh} from '@/hooks/useGlobalRefresh'
import {useMainReachBottom} from '@/hooks/useMainReachBottom'
import LoadingStatus from '@/components/feedback/loading-status.vue'
import VideoGrid from '@/components/video/video-grid.vue'
import VideoCardItem from '@/components/video/video-card-item.vue'

const portal = ref<{
  upList: any[]
  liveUsers: any[]
  myInfo: any
}>({
  upList: [],
  liveUsers: [],
  myInfo: {}
})

const dynamicState = ref({
  list: [],
  offset: null,
  selectedUpIndex: -1,
  hasMore: true,
  loading: true
})

onMounted(() => {
  getPortal()
  getVideoList()
})

watch(
    () => dynamicState.value.selectedUpIndex,
    (value, oldValue) => {
      if (value === oldValue) return
      if (value > -1) {
      portal.value.upList[value].has_update = false
      }
      resetDynamicState()
      getVideoList()
    }
)

const mid = computed(() => {
  return portal.value.upList[dynamicState.value.selectedUpIndex]?.mid
})

useMainReachBottom(() => {
  if (!dynamicState.value.hasMore) return
  getVideoList()
})

useGlobalRefresh(() => {
  resetDynamicState()
  getVideoList()
})

function resetDynamicState() {
  dynamicState.value.list = []
  dynamicState.value.offset = null
  dynamicState.value.hasMore = true
  dynamicState.value.loading = true
}

async function getPortal() {
  const res = await DynamicApi.getPortal()
  portal.value.upList = res.data.up_list
  portal.value.liveUsers = res.data.live_users
  portal.value.myInfo = res.data.my_info
}

async function getVideoList() {
  const res = await DynamicApi.getVideoDynamicList(dynamicState.value.offset, mid.value)
  dynamicState.value.list = dynamicState.value.list.concat(res.data.items)
  dynamicState.value.hasMore = res.data.has_more
  dynamicState.value.offset = res.data.offset
}
</script>

<template>
  <div class="container">
    <un-login>
      <dynamic-up-list
          :list="portal.upList"
          v-model:selected-index="dynamicState.selectedUpIndex"
      />
      <video-grid class="dynamic-video-grid">
        <video-card-item
            v-for="(item, index) in dynamicState.list"
            :item="item"
            :key="index"
            :show-follow-btn="false"
        />
      </video-grid>
      <loading-status :loading="dynamicState.loading"/>
    </un-login>
  </div>
</template>

<style scoped>
.dynamic-video-grid {
  margin-top: var(--spacing-normal);
}
</style>
