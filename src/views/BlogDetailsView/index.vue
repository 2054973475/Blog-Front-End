<template>
  <div class="blog-details__contanier" v-loading="loading">
    <div class="blog-details__modular">
      <div class="blog-details__header">
        <div class="blog-details__title">{{ article?.title }}</div>
        <div class="blog-details__information">
          <div class="blog-details__classify">
            <i class="bi bi-grid"></i>
            <span>{{ article?.classify }}</span>
          </div>
          <div class="blog-details__release-time">
            <i class="bi bi-clock"></i>
            <span>{{ article?.releaseDate }}</span>
          </div>
          <div class="blog-details__view-number">
            <i class="bi bi-eye"></i>
            <span>{{ article?.viewNumber }}</span>
          </div>
          <div class="blog-details__comment-number">
            <i class="bi bi-chat-left-dots"></i>
            <span>0</span>
          </div>
        </div>
      </div>
      <div class="blog-details__divider"></div>
      <EditorView :value="article?.content"/>
    </div>
    <div class="blog-details__modular">
      <div class="blog-details__page">
        <div class="blog-details__previous">
          <div class="blog-details__page-text">上一篇</div>
          <div
            class="blog-details__page-title"
            v-if="articlePrevious"
            @click="handlePage(articlePrevious?.id!)"
          >
            {{ articlePrevious?.title }}
          </div>
          <div class="blog-details__page-no-more" v-else>没有了</div>
        </div>
        <div class="blog-details__next">
          <div class="blog-details__page-text">下一篇</div>
          <div
            class="blog-details__page-title"
            v-if="articleNext"
            @click="handlePage(articleNext?.id!)"
          >
            {{ articleNext.title }}
          </div>
          <div class="blog-details__page-no-more" v-else>没有了</div>
        </div>
      </div>
    </div>
    <el-backtop :bottom="100">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        "
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script setup lang="ts">
import EditorView from '../../components/EditorView/index.vue'
import { ref, Ref, watch } from "vue";
import { getArticle } from "../../api/index";
import { BlogArticleType } from "../../api/types";
import { useRoute, useRouter } from "vue-router";
const blogArticle = <Ref<Array<BlogArticleType>>>ref([]);
const article = <Ref<BlogArticleType | undefined>>ref({});
const articlePrevious = <Ref<BlogArticleType | undefined>>ref({});
const articleNext = <Ref<BlogArticleType | undefined>>ref({});
const route = useRoute();
const router = useRouter();
const loading = ref(false);
const handlePage = (id: number) => {
  router.push({
    name: "blogDetailsView",
    params: {
      id,
    },
  });
};
const initArticle = async () => {
  blogArticle.value = await getArticle({ id: Number(route.params.id || 0) });
  article.value = blogArticle.value.find(
    (item) => item.id === Number(route.params.id)
  );
  if (article.value === undefined) {
    router.push({
      name: "blogView",
    });
  } else {
    articlePrevious.value = blogArticle.value.find(
      (item) => item.id < Number(route.params.id)
    );
    articleNext.value = blogArticle.value.find(
      (item) => item.id > Number(route.params.id)
    );
    document.documentElement.scrollTop = 0;
    document.title = article.value.title + "|博客";
  }
  loading.value = false;
};
watch(
  () => route.params.id,
  () => {
    loading.value = true;
    initArticle();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
.blog-details {
  &__contanier {
    p {
      margin-bottom: 10px;
    }
    img {
      width: 100%;
    }
  }
  &__modular {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    color: #34495e;
    margin-bottom: 20px;
  }
  &__title {
    font-size: 25px;
  }
  &__information {
    margin-top: 16px;
    display: flex;
    align-items: center;
    color: #9ca3af;
    font-size: 13px;
    div {
      margin-right: 15px;
    }
    i.bi {
      margin-right: 5px;
    }
  }
  &__divider {
    height: 1px;
    width: 100%;
    margin: 20px 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &__page {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  &__previous{
    flex: 1;
    width: 0;
  }
  &__next {
    flex: 1;
    width: 0;
    text-align: end;
  }
  &__page-text {
    color: #9ca3af;
    font-size: 12px;
  }
  &__page-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    margin-top: 10px;
    color: #1f2937;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      color: #007bff;
    }
  }
  &__page-no-more {
    margin-top: 10px;
    color: #c4cfdb;
    font-size: 13px;
  }
}
</style>
