<template>
  <div class="classification__container">
    <div class="classification__header">
      <i class="bi bi-grid classification__header-icon"></i>分类
    </div>
    <div class="classification__content">
      <div
        class="classification__item"
        :class="
          route.query.classif === classif.name
            ? 'classification__item-active'
            : ''
        "
        v-for="classif in classifyList"
        :key="classif.id"
        @click="handleClassif(classif)"
      >
        <i class="bi bi-chevron-right classification__content-icon"></i
        >{{ classif.name }}（{{ classif.count }}）
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ClassifyType } from '../../api/types';
import { defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps<{
  classifyList: Array<ClassifyType>;
}>();
const route = useRoute();
const router = useRouter();
const handleClassif = (classif: ClassifyType) => {
  router.push({
    name: 'blogView',
    query: {
      classif: classif.name,
    },
  });
};
</script>

<style lang="less">
.classification {
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
    justify-content: space-between;
    margin-top: 10px;
  }
  &__item {
    margin: 6px 0;
    background-color: #f3f4f6;
    width: 49%;
    padding: 10px 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
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
  &__content-icon {
    font-size: 12px;
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
