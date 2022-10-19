<template>
  <div class="blog-details__contanier">
    <div class="blog-details__modular">
      <div class="blog-details__header">
        <div class="blog-details__title">{{ blogArticle.title }}</div>
        <div class="blog-details__information">
          <div class="blog-details__classify">
            <i class="bi bi-grid"></i>
            <span>{{ blogArticle.classify }}</span>
          </div>
          <div class="blog-details__release-time">
            <i class="bi bi-clock"></i>
            <span>{{ blogArticle.releaseDate }}</span>
          </div>
          <div class="blog-details__view-number">
            <i class="bi bi-eye"></i>
            <span>{{ blogArticle.viewNumber }}</span>
          </div>
          <div class="blog-details__comment-number">
            <i class="bi bi-chat-left-dots"></i>
            <span>0</span>
          </div>
        </div>
      </div>
      <div class="blog-details__divider"></div>
      <div class="blog-details__content" v-html="blogArticle.content"></div>
    </div>
    <div class="blog-details__modular">
      <div class="blog-details__page">
        <div class="blog-details__previous">
          <div class="blog-details__page-text">上一篇</div>
          <div
            class="blog-details__page-title"
            v-if="previous.statue === 1"
            @click="handlePage(previous.id!)"
          >
            {{ previous.title }}
          </div>
          <div class="blog-details__page-no-more" v-else>
            {{ previous.title }}
          </div>
        </div>
        <div class="blog-details__next">
          <div class="blog-details__page-text">下一篇</div>
          <div
            class="blog-details__page-title"
            v-if="next.statue === 1"
            @click="handlePage(next.id!)"
          >
            {{ next.title }}
          </div>
          <div class="blog-details__page-no-more" v-else>{{ next.title }}</div>
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
import { computed, onMounted, ref, Ref } from 'vue';
import { getAllArticle, getArticle } from '../../api/index';
import { BlogArticle } from '../../api/types';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
const blogArticle = <Ref<BlogArticle>>ref({});
const blogArticleList = <Ref<Array<BlogArticle>>>ref([]);
const route = useRoute();
const router = useRouter();
const blogArticleIndex = ref(-1);
const previous = computed(() => {
  if (blogArticleIndex.value === -1 || blogArticleIndex.value === 0) {
    return { statue: 0, title: '没有了' };
  } else {
    return {
      statue: 1,
      id: blogArticleList.value[blogArticleIndex.value - 1].id,
      title: blogArticleList.value[blogArticleIndex.value - 1].title,
    };
  }
});
const next = computed(() => {
  if (
    blogArticleIndex.value === -1 ||
    blogArticleIndex.value === blogArticleList.value.length - 1
  ) {
    return { statue: 0, title: '没有了' };
  } else {
    return {
      statue: 1,
      id: blogArticleList.value[blogArticleIndex.value + 1].id,
      title: blogArticleList.value[blogArticleIndex.value + 1].title,
    };
  }
});
const handlePage = (id: number) => {
  router.push({
    name: 'blogDetailsView',
    params: {
      id,
    },
  });
};
const initArticle = async () => {
  const allArticle = await getAllArticle();
  blogArticleList.value = allArticle;
  const article = await getArticle({ id: Number(route.params.id) });
  blogArticle.value = article;
  blogArticleIndex.value = blogArticleList.value.findIndex(
    (item) => item.id === blogArticle.value.id
  );
  document.documentElement.scrollTop = 0;
  document.title = blogArticle.value.title+'|博客';
};
onBeforeRouteUpdate(async () => {
  initArticle();
});
onMounted(async () => {
  initArticle();
});
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
  &__content {
    padding-bottom: 20px;
  }
  &__page {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  &__next {
    text-align: end;
  }
  &__page-text {
    color: #9ca3af;
    font-size: 12px;
  }
  &__page-title {
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
