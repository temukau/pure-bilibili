<script lang="ts" setup>
import SpaceHeader from '@/components/space/space-header.vue'
import {useRoute} from 'vue-router'
import {computed, onMounted, ref} from 'vue'
import type {BiliUserInfo} from '@/type/userinfo'
import {UserApi} from '@/api/modules/user-api'
import {useUserStore} from '@/stores/user'

const userStore = useUserStore()
const route = useRoute()
const userProfile = ref<BiliUserInfo>()

const loading = ref(false)

onMounted(() => {
  getUserProfile()
})

const isMe = computed(() => {
  return route.params.uid === userStore.profile.mid || !route.params.uid
})

function getUserProfile() {
  loading.value = true
  UserApi.getInfo((route.params.uid as string) || userStore.profile.mid)
      .then((res) => {
        userProfile.value = res.data
      })
      .finally(() => {
        loading.value = false
      })
}
</script>

<template>
  <div class="container">
    <space-header v-if="userProfile" :is-my-info="isMe" :profile="userProfile"/>
  </div>
</template>

<style scoped></style>
