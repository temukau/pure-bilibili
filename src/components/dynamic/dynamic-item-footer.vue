<script setup lang="ts">
import IconForward from '@/components/icons/icon-forward.vue'
import type { PropType } from 'vue'
import IconLike from '@/components/icons/icon-like.vue'
import IconComment from '@/components/icons/icon-comment.vue'
import { NumberUtil } from '../../utils/number-util'

interface Stat {
  comment: {
    count: number
    forbidden: boolean
  }
  like: {
    count: number
    forbidden: boolean
    status: boolean
  }
  forward: {
    count: number
    forbidden: boolean
  }
}

const props = defineProps({
  stat: {
    type: Object as PropType<Stat>,
    required: true
  }
})

const emits = defineEmits(['like', 'forward', 'comment'])

const like = () => {
  emits('like')
}

const forward = () => {
  emits('forward')
}

const comment = () => {
  emits('comment')
}
</script>

<template>
  <div class="dynamic-item-footer">
    <div class="dynamic-item-footer-item" @click="forward">
      <icon-forward />
      <span>{{ NumberUtil.numToChinese(stat.forward.count) || '转发' }}</span>
    </div>
    <div class="dynamic-item-footer-item" @click="comment">
      <icon-comment />
      <span>{{ NumberUtil.numToChinese(stat.comment.count) || '评论' }}</span>
    </div>
    <div class="dynamic-item-footer-item" @click="like">
      <icon-like :selected="stat.like.status" />
      <span :class="{ active: stat.like.status }">
        {{ NumberUtil.numToChinese(stat.like.count) || '点赞' }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.dynamic-item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--padd-normal);
  padding: 0 var(--padd-normal);
}
.dynamic-item-footer-item {
  display: flex;
  align-items: center;
  color: var(--text-color-secondary);
  gap: 10px;
}
.dynamic-item-footer-item .active {
  color: var(--color-primary);
}
</style>
