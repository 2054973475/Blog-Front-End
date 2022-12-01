<template>
  <div class="tags__container">
    <div class="tags__header">
      <i class="bi bi-tags tags__header-icon"></i>标签
    </div>
    <div class="tags__content">
      <div
        class="tags__item"
        :class="route.query.tags === item ? 'tags__item-active' : ''"
        v-for="(item, index) in tagsKey"
        :key="item"
        @click="handleTag(item, tagsValue[index])"
      >
        {{ item }}<span class="tags__item-count">{{ tagsValue[index] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getTags } from "../../api/index";
const route = useRoute();
const router = useRouter();
const tagsKey = <Ref<Array<string>>>ref([]);
const tagsValue = <Ref<Array<string>>>ref([]);
const handleTag = (tag: string, count: string) => {
  router.push({
    name: "blogView",
    query: {
      tags: tag,
    },
  });
};
onMounted(async () => {
  const { data } = await getTags();
  tagsKey.value = Object.keys(data);
  tagsValue.value = Object.values(data);
});
</script>

<style lang="less">
.tags {
  &__container {
    padding: 20px;
    padding-bottom: 30px;
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  &__header-icon {
    margin-right: 5px;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  &__item {
    margin: 6px 6px 6px 0px;
    border-radius: 15px;
    background-color: #f3f4f6;
    padding: 5px 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #015ab9;
    }
  }
  &__item-active {
    background-color: #656ed6;
    color: white !important;
    .classification__content-icon {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  &__item-count {
    padding: 0px 9px;
    border-radius: 10px;
    color: white;
    background-color: #d1d5d8;
    font-size: 12px;
    margin-left: 1px;
  }
}
</style>
