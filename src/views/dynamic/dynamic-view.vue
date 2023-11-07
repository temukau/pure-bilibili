<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {DynamicApi} from '@/api/modules/dynamic-api'
import UnLogin from '@/components/feedback/un-login.vue'
import DynamicUpList from '@/components/dynamic/dynamic-up-list.vue'
import DynamicItem from '@/components/dynamic/dynamic-item.vue'
import {useGlobalRefresh} from '@/hooks/useGlobalRefresh'
import {useMainReachBottom} from '@/hooks/useMainReachBottom'
import LoadingStatus from '@/components/feedback/loading-status.vue'

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
  page: 1,
  offset: null,
  selectedUpIndex: -1,
  hasMore: true,
  loading: true
})

onMounted(() => {
  getPortal()
  getDynamicList()
})

watch(
    () => dynamicState.value.selectedUpIndex,
    (value, oldValue) => {
      if (value === oldValue) return
      portal.value.upList[value].has_update = false
      resetParams();
      getDynamicList()
    }
)

useMainReachBottom(() => {
  if (!dynamicState.value.hasMore) return
  dynamicState.value.page++
  getDynamicList()
})

useGlobalRefresh(() => {
  resetParams();
  getDynamicList()
})

function resetParams() {
  dynamicState.value.page = 1
  dynamicState.value.list = []
  dynamicState.value.offset = null
  dynamicState.value.hasMore = true
}

async function getPortal() {
  const res = await DynamicApi.getPortal()
  portal.value.upList = res.data.up_list
  portal.value.liveUsers = res.data.live_users
  portal.value.myInfo = res.data.my_info
}

async function getDynamicList() {
  dynamicState.value.loading = true
  const page = dynamicState.value.page
  const mid =
      dynamicState.value.selectedUpIndex === -1
          ? 0
          : portal.value.upList[dynamicState.value.selectedUpIndex].mid
  const offset = dynamicState.value.offset
  const res = await DynamicApi.getFollowedDynamicList('all', page, mid, offset).finally(() => {
    dynamicState.value.loading = false
  })
  dynamicState.value.list = dynamicState.value.list.concat(res.data.items)
  dynamicState.value.offset = res.data.offset
  dynamicState.value.hasMore = res.data.has_more
}

function toggleLike(item: any) {
  const idStr = item.id_str
  const likeStatus = item.modules.module_stat.like.status ? 2 : 1
  DynamicApi.toggleLike(idStr, likeStatus).then(() => {
    item.modules.module_stat.like.status = !item.modules.module_stat.like.status
    item.modules.module_stat.like.count += likeStatus === 1 ? 1 : -1
  })
}
</script>

<template>
  <div class="container">
    <un-login>
      <dynamic-up-list
          v-model:selected-index="dynamicState.selectedUpIndex"
          :list="portal.upList"
      />
      <div class="dynamic-list">
        <dynamic-item
            v-for="(item, index) in dynamicState.list"
            :item="item"
            :key="index"
            @like="toggleLike"
        />
      </div>
      <loading-status :loading="dynamicState.loading"/>
    </un-login>
  </div>
</template>

<style scoped>
.dynamic-followed-up-list {
  margin: var(--padd-normal) 0;
}

.dynamic-list {
  margin-top: var(--padd-normal);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
