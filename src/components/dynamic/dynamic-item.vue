<script setup lang="ts">
import DynamicItemHeader from '@/components/dynamic/dynamic-item-header.vue'
import DynamicItemImgList from '@/components/dynamic/dynamic-item-img-list.vue'
import DynamicItemArchive from '@/components/dynamic/dynamic-item-archive.vue'
import DynamicItemLive from '@/components/dynamic/dynamic-item-live.vue'
import DynamicItemFooter from '@/components/dynamic/dynamic-item-footer.vue'
import DynamicItemDesc from '@/components/dynamic/dynamic-item-desc.vue'
import DynamicItemUgc from "@/components/dynamic/dynamic-item-ugc.vue";
import DynamicItemArticle from "@/components/dynamic/dynamic-item-article.vue";

const props = defineProps(['item'])
const emits = defineEmits(['like', 'forward', 'comment'])

function like() {
  emits('like', props.item)
}

function forward() {
  emits('forward', props.item)
}

function comment() {
  emits('comment', props.item)
}
</script>

<template>
  <div class="dynamic-item">
    <dynamic-item-header :author="item.modules.module_author" />
    <div class="dynamic">
      <dynamic-item-desc
        v-if="item.modules.module_dynamic.desc != null"
        :item="item.modules.module_dynamic.desc"
      />
      <dynamic-item-ugc v-if="item.modules.module_dynamic.additional" :item="item.modules.module_dynamic.additional.ugc"></dynamic-item-ugc>
      <div class="dynamic-major" v-if="item.modules.module_dynamic.major">
        <dynamic-item-archive :archive="item.modules.module_dynamic.major.archive" />
        <dynamic-item-img-list
          v-if="item.modules.module_dynamic.major.draw"
          :items="item.modules.module_dynamic.major.draw.items"
        />
        <dynamic-item-live
          :live="item.modules.module_dynamic.major.live"
          v-if="item.modules.module_dynamic.major.live"
        />
        <dynamic-item-article :item="item.modules.module_dynamic.major.article"/>
      </div>
      <div class="dynamic-origin" v-if="item.orig">
        <dynamic-item :item="item.orig" />
      </div>
    </div>
    <dynamic-item-footer
      v-if="item.modules.module_stat"
      :stat="item.modules.module_stat"
      @comment="comment"
      @forward="forward"
      @like="like"
    />
  </div>
</template>

<style scoped>
.dynamic-item {
  border-radius: var(--radius-normal);
  padding: var(--padd-normal);
  cursor: pointer;
  background-color: #fff;
}

.dynamic-major {
  margin-top: var(--padd-normal);
}

.dynamic-origin .dynamic-item {
  margin-top: 10px;
  opacity: 0.8;
  background-color: #f6f7f8;
  padding: var(--padd-lg);
}
:deep(.dynamic-origin .dynamic-item) {
  padding: var(--padd-normal) var(--padd-lg);
}
:deep(.dynamic-origin .dynamic-item .avatar) {
  width: 30px;
  height: 30px;
}
:deep(.dynamic-origin .dynamic-item .dynamic-item-header .author-info) {
  flex-direction: row;
  align-items: center;
  color: var(--text-color-secondary);
}
:deep(.dynamic-origin .dynamic-item .dynamic-item-header .author-info .author-name) {
  font-weight: normal;
}
</style>
