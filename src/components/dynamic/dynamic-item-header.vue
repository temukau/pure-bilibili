<script setup lang="ts">
import FollowBtn from '@/components/button/follow-btn.vue'

defineProps(['author', 'showExtraAction'])
</script>

<template>
  <div class="dynamic-item-header">
    <div class="author">
      <div class="author-avatar-box">
        <img referrerpolicy="no-referrer" :src="author.face" alt="user avatar" class="avatar" />
      </div>
      <div class="author-info">
        <p class="author-name">{{ author.name }}</p>
        <p class="time">
          {{ author.pub_time }}
          <span class="publish-action" v-if="author.pub_action"> · {{ author.pub_action }}</span>
        </p>
      </div>
    </div>
    <follow-btn v-if="showExtraAction" :mid="author.mid" :is-followed="author.following" />
  </div>
</template>

<style scoped>
.dynamic-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author {
  display: flex;
}

.author-info {
  margin-left: var(--padd-normal);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.author-name {
  font-weight: 600;
}

.time {
  color: var(--text-color-secondary);
}
</style>
