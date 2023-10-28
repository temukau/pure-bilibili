<script setup lang="ts">
import {HotApi} from "@/api/modules/hot-api";
import {onMounted, ref} from "vue";
import Tab from "@/components/tab-switch.vue";
import HomeRecommendView from "@/views/home-recommend-view.vue";
import HomeHotView from "@/views/home-hot-view.vue";

const list = ref([]);
const size = ref(20);
const last = ref(0);
const tabActive = ref(0);

onMounted(() => {
  getRecommendList();
})

const getRecommendList = async () => {
  const res = await HotApi.getRecommendList(last.value, size.value);
  list.value = res.data.item
}
</script>

<template>
  <div class="home">
    <tab v-model:active="tabActive" :titles="['推荐', '热门']"></tab>
    <div class="container">
      <home-recommend-view v-if="tabActive === 0"></home-recommend-view>
      <home-hot-view v-if="tabActive === 1"></home-hot-view>
    </div>
  </div>
</template>

<style scoped>
.home {
  box-sizing: border-box;
  width: 100%;
}
.container {
  margin-top: var(--padding-large);
}

@media screen and (max-width: 768px) {
  .container {
    margin-top: var(--padding-normal);
  }
}
</style>
