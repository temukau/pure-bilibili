<script setup lang="ts">
import {UserApi} from '@/api/modules/user-api'
import {ref} from 'vue'

const props = defineProps({
  mid: {
    type: [Number, String],
    required: true
  },
  isFollowed: {
    type: [Boolean, Number],
    default: 0
  }
})

const state = ref({
  isFollowed: props.isFollowed
})

function follow() {
  UserApi.follow(props.mid).then(() => {
    state.value.isFollowed = true
  })
}

function unfollow() {
  UserApi.unfollow(props.mid).then(() => {
    state.value.isFollowed = false
  })
}
</script>

<template>
  <div v-if="state.isFollowed" class="follow-btn btn active" @click="unfollow">已关注</div>
  <div v-else class="follow-btn btn" @click="follow">关注</div>
</template>

<style scoped>
.follow-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-sm);
  height: 20px;
  background-color: var(--bg-color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}
.follow-btn.active {
  background-color: var(--color-primary);
  color: var(--bg-color-white);
}
</style>
