<script setup lang="ts">
import type {PropType} from 'vue'
import type {BiliUserInfo} from '@/type/userinfo'
import FollowBtn from '@/components/button/follow-btn.vue'

defineProps({
  profile: {
    type: Object as PropType<BiliUserInfo>,
    required: true
  },
  isMyInfo: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="space-header-container">
    <div class="top-photo-container">
      <img :src="profile.top_photo" alt="" class="top-photo" referrerpolicy="no-referrer"/>
    </div>
    <div class="space-header">
      <div class="left-space-header">
        <div class="avatar-box">
          <img :src="profile.face" alt="avatar" class="avatar" referrerpolicy="no-referrer"/>
        </div>
        <div class="info">
          <div class="name">{{ profile.name }}</div>
          <div class="signature">{{ profile.sign || '木有签名 ~' }}</div>
        </div>
      </div>
      <div class="right-space-header">
        <follow-btn
            v-if="!isMyInfo"
            :is-followed="(profile as BiliUserInfo).is_followed"
            :mid="profile.mid"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.space-header-container {
  position: relative;
  border-radius: var(--radius-normal);
}

.top-photo-container {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-normal);
}

.top-photo-container .top-photo {
  width: 100%;
  z-index: 0;
  object-fit: cover;
  height: 100%;
  border-radius: var(--radius-normal);
  cursor: pointer;
}

.space-header {
  background-color: rgba(255, 255, 255, 0.03);
  padding: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-normal);
  z-index: 1;
  backdrop-filter: blur(20px);
  color: white;
  transition: 0.3s;
}

.space-header:hover {
  backdrop-filter: blur(0);
}

.left-space-header {
  display: flex;
  align-items: center;
}

.left-space-header .info {
  margin-left: var(--spacing-lg);
}

.left-space-header .info .name {
  font-size: var(--font-size-lg);
}

.left-space-header .info .signature {
  padding: var(--spacing-sm) 0;
}
</style>
