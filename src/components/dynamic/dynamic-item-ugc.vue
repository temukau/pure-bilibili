<script setup lang="ts">
import type {PropType} from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<any>,
    default: () => {}
  }
})
</script>

<template>
  <div class="dynamic-major-ugc" v-if="item">
    <div class="cover-box">
      <img referrerpolicy="no-referrer" :src="item.cover" alt="" class="cover" />
      <span class="duration-text">{{ item.duration }}</span>
    </div>
    <div class="ugc-info">
      <p class="title">{{ item.title }}</p>
      <p class="desc">{{ item.desc_second }}</p>
    </div>
  </div>
</template>

<style scoped>
.dynamic-major-ugc {
  margin: var(--padd-normal) 0;
}

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

.ugc-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ugc-info .desc {
  color: var(--text-color-secondary);
}

@media screen and (min-width: 768px) {
  .dynamic-major-ugc {
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

  .dynamic-major-ugc .cover {
    width: 250px;
    height: 120px;
    object-fit: cover;
    border-radius: var(--radius-normal) 0 0 var(--radius-normal);
    margin-right: var(--padd-normal);
  }

  .ugc-info {
    padding: var(--padd-normal);
  }
}
</style>