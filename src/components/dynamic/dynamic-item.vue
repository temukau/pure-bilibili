<script setup lang="ts">
import FollowBtn from "@/components/button/follow-btn.vue";

defineProps(["item"]);
</script>

<template>
  <div class="dynamic-item bg-white">
    <div class="dynamic-item-header">
      <div class="author">
        <div class="author-avatar-box">
          <img referrerpolicy="no-referrer" :src="item.modules.module_author.face" alt="user avatar" class="avatar">
        </div>
        <div class="author-info">
          <p class="author-name">{{ item.modules.module_author.name }}</p>
          <p class="time">{{ item.modules.module_author.pub_time }}</p>
        </div>
      </div>
      <follow-btn :mid="item.modules.module_author.mid" :is-followed="item.modules.module_author.following"/>
    </div>
    <div class="dynamic">
      <span v-for="(node, index) in item.modules.module_dynamic.desc.rich_text_nodes" :key="index">
        <a v-if="node.jump_url" :href="node.jump_url">{{ node.text }}</a>
        <span v-else>{{ node.text }}</span>
      </span>
      <div class="dynamic-major">
        <div class="dynamic-major-img-list">
          <img v-for="(img, index) in item.modules.module_dynamic.major.draw.items"
               referrerpolicy="no-referrer"
               :key="index"
               :width="img.width"
               :height="img.height"
               alt="img"
               :src="img.src"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dynamic-item {
  border-radius: var(--radius-normal);
  padding: var(--padd-normal);
}

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
  color: var(--text-color-secondary)
}

.dynamic {
  margin-top: var(--padd-normal);
}

.dynamic-major {
  margin-top: var(--padd-normal);
}

.dynamic-major-img-list {
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--padd-normal)
}
.dynamic-major-img-list img {
  flex: 1;
  object-fit: cover;
  max-width: 210px;
  max-height: 280px;
  border: 1px solid var(--color-border)
}

@media screen and (max-height: 768px) {
  .dynamic-major-img-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .dynamic-major-img-list img {
    max-width: 100%;
    max-height: 280px;
  }
}
</style>