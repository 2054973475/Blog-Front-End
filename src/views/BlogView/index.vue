<template>
  <div class="blog__container">
    <div v-if="route.query.tags" class="blog__screen">
      <i class="bi bi-search blog__icon-search"></i>
      搜索标签<span>{{ route.query.tags }}</span>
      共找到了<span> {{ blogArticleList.total }} </span>条记录
      <i class="bi bi-x-lg blog__icon-x" @click="handleIconX"></i>
    </div>
    <div v-else-if="route.query.keyword" class="blog__screen">
      <i class="bi bi-search blog__icon-search"></i>
      搜索关键词<span>{{ route.query.keyword }}</span>
      共找到了<span> {{ blogArticleList.total }} </span>条记录
      <i class="bi bi-x-lg blog__icon-x" @click="handleIconX"></i>
    </div>
    <div v-else-if="route.query.classif" class="blog__screen">
      <i class="bi bi-grid blog__icon-grid"></i
      ><span class="blog__all" @click="handleIconX">全部</span>
      <i class="bi bi-chevron-right blog__icon-right"></i
      >{{ route.query.classif }}
    </div>
    <div>
      <BlogArticle
        :page="page"
        :pageCount="pageCount"
        :blogArticleList="blogArticleList.data"
        :total="Number(blogArticleList.total)"
        @currentChange="currentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAllArticle } from "../../api/index";
import BlogArticle from "../../components/BlogArticle/index.vue";
import type { BlogArticleListType } from "../../api/types";
import type { ReqData } from "../../api/getAllArticle/type";
import { onMounted, ref, Ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const page = ref(0);
const pageCount = ref(5);
const blogArticleList = <Ref<BlogArticleListType>>ref({});
const reqData = <Ref<ReqData>>ref({});
const init = async () => {
  page.value = 0;
  pageCount.value = 5;
  blogArticleList.value = await getBlogArticleList();
};
const getBlogArticleList = async () => {
  return getAllArticle(
    {
      page: page.value,
      pageCount: pageCount.value,
    },
    reqData.value
  );
};

const currentChange = async (value: number) => {
  page.value = value - 1;
  blogArticleList.value = await getBlogArticleList();
};
const handleIconX = () => {
  router.push({
    name: "blogView",
  });
};
watch(
  route,
  () => {
    reqData.value = {};
    if (route.query.classif) {
      reqData.value["classify"] = route.query.classif as string;
    }
    if (route.query.keyword) {
      reqData.value["title"] = route.query.keyword as string;
    }
    if (route.query.tags) {
      reqData.value["tags"] = route.query.tags as string;
    }
    init();
  },
  {
    deep: true,
    immediate: true,
  }
);
onMounted(async () => {
  init();
});
</script>

<style lang="less">
.blog {
  &__screen {
    background-color: white;
    padding: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
