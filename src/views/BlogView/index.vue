<template>
  <div class="blog__container">
    <div v-if="route.query.keyWords" class="blog__screen">
      <i class="bi bi-search blog__icon-search"></i>
      搜索<span>{{ route.query.keyWords }}</span>
      共找到了<span>9</span>条记录
      <i class="bi bi-x-lg blog__icon-x" @click="handleIconX"></i>
    </div>
    <div v-else-if="route.query.classif" class="blog__screen">
      <i class="bi bi-grid blog__icon-grid"></i
      ><span class="blog__all" @click="handleIconX">全部</span>
      <i class="bi bi-chevron-right blog__icon-right"></i
      >{{ route.query.classif }}
    </div>
    <div>
      <BlogArticleItem
        v-for="blogArticle in blogArticleList"
        :key="blogArticle.id"
        :data="blogArticle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import BlogArticleItem from '../../components/BlogArticleItem/index.vue';
import type { BlogArticle } from '../../api/types';
import { inject } from 'vue';
const blogArticleList = <Array<BlogArticle>>inject('blogArticleList');
const route = useRoute();
const router = useRouter();
const handleIconX = () => {
  router.push({
    name: 'blogView',
  });
};
</script>

<style lang="less">
.blog {
  &__screen {
    background-color: white;
    padding: 25px;
    display: flex;
    align-items: center;
    span {
      color: #656de6;
      font-weight: bold;
      margin: 0 5px;
    }
  }
  &__icon-search {
    margin-right: 5px;
  }
  &__icon-x {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  &__icon-grid {
    margin-left: 5px;
  }
  &__all {
    color: rgba(0, 0, 0, 0.5) !important;
    font-weight: 100 !important;
    cursor: pointer;
    &:hover {
      color: #015ab9 !important;
    }
  }
  &__icon-right {
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    margin-right: 15px;
  }
}
</style>
