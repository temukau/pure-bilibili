<script setup lang="ts">
defineProps(['live'])
</script>

<template>
  <div class="dynamic-item-major-live">
    <div class="cover-box">
      <img referrerpolicy="no-referrer" :src="live.cover" alt="" class="cover" />
    </div>
    <div class="live-info">
      <p class="title">{{ live.title }}</p>
      <p class="desc">{{ live.desc_first }}</p>
    </div>
  </div>
</template>

<style scoped>
.dynamic-item-major-live {
  display: flex;
}
.cover-box {
  box-sizing: border-box;
  position: relative;
}

.cover {
  flex: 3;
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.live-info {
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  padding: var(--padd-lg);
}
.title {
  color: var(--text-color-black);
}
.desc {
  color: var(--text-color-secondary);
}
</style>
