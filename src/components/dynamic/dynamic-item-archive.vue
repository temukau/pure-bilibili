<script setup lang="ts">
defineProps({
  archive: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="dynamic-major-archive" v-if="archive">
    <div class="cover-box">
      <img referrerpolicy="no-referrer" :src="archive.cover" alt="" class="cover" />
      <span class="duration-text">{{ archive.duration_text }}</span>
    </div>
    <div class="archive-info">
      <p class="title">{{ archive.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.cover-box {
  box-sizing: border-box;
  position: relative;
}

.cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.duration-text {
  box-sizing: border-box;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: var(--padd-sm) var(--padd-normal);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: var(--font-size-sm);
  border-radius: var(--radius-normal);
}

@media screen and (min-width: 768px) {
  .dynamic-major-archive {
    border-radius: var(--radius-normal);
    display: flex;
    border: 1px solid var(--color-border);
  }

  .cover-box {
    width: 250px;
    height: 120px;
    border-radius: var(--radius-normal) 0 0 var(--radius-normal);
  }

  .cover-box .duration-text {
    right: 5px;
    bottom: 5px;
  }

  .dynamic-major-archive .cover {
    width: 250px;
    height: 120px;
    object-fit: cover;
    border-radius: var(--radius-normal) 0 0 var(--radius-normal);
    margin-right: var(--padd-normal);
  }

  .archive-info {
    padding: var(--padd-normal);
  }
}
</style>
