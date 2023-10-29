<script setup lang="ts">
import { TimeUtil } from '@/utils/time-util'
import FollowBtn from '@/components/button/follow-btn.vue'

defineProps(['item'])
</script>

<template>
  <div class="item">
    <div class="item-header">
      <div class="item-owner-info">
        <img referrerpolicy="no-referrer" :src="item.owner.face" alt="" class="avatar" />
        <p class="item-owner-name">
          {{ TimeUtil.timeStampToAgo(item.pubdate) }} · {{ item.owner.name }}
        </p>
      </div>
      <follow-btn :mid="item.owner.mid" :is-followed="item.is_followed" />
    </div>
    <div class="item-cover-box">
      <img referrerpolicy="no-referrer" :src="item.pic" alt="" class="item-cover-img" />
      <div class="item-cover-video-info">
        <div></div>
        <div class="video-length">{{ TimeUtil.secondsToTime(item.duration) }}</div>
      </div>
    </div>
    <div class="item-info">
      <p class="item-title">{{ item.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.item {
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: var(--shadow-normal);
  border-radius: var(--radius-normal);
  background-color: var(--bg-color-white);
  transition: 0.2s ease-in-out;
}

.item:hover {
  box-shadow: var(--shadow-hover);
}

.item-info {
  padding: var(--padd-normal);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padd-normal);
}

.item-owner-info {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-owner-name {
  width: calc(100% - 40px - var(--padd-normal));
  font-size: var(--font-size-sm);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.item-owner-info .avatar {
  border: 1px solid var(--color-border);
  width: 30px;
  height: 30px;
}

.item-cover-box {
  position: relative;
  width: 100%;
  height: 135px;
}

.item-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-cover-video-info {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.15s;
}
.item:hover .item-cover-video-info {
  background-color: rgba(0, 0, 0, 0.3);
}

.item-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.video-length {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-light);
  font-size: var(--font-size-sm);
  border-radius: 10%;
  padding: 2px;
  background-color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 768px) {
  .item {
    width: 100%;
  }

  .item-cover-box {
    height: 200px;
  }
}
</style>
