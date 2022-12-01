<template>
  <div class="blog-article-item__container" ref="mainItem">
    <div class="blog-article-item__body">
      <div class="blog-article-item__body-left">
        <div class="blog-article-item__header">
          <div class="blog-article-item__name" @click="handleItem">
            <span>{{ data.title }}</span>
          </div>
          <div class="blog-article-item__info">
            <span class="blog-article-item__info-item"
              ><i class="bi bi-grid"></i>{{ data.classify }}</span
            >
            <span class="blog-article-item__info-item"
              ><i class="bi bi-clock"></i>{{ data.releaseDate }}</span
            >
            <span class="blog-article-item__info-item"
              ><i class="bi bi-eye"></i>{{ data.viewNumber }}</span
            >
            <span class="blog-article-item__info-item"
              ><i class="bi bi-chat-left-dots"></i>0</span
            >
          </div>
          <div class="blog-article-item__text">
            {{ data.summary }}
          </div>
        </div>
        <div class="blog-article-item__brief-tntroduction"></div>
      </div>
      <img class="blog-article-item__image" :src="data.coverImg" />
    </div>
    <div class="blog-article-item__tags">
      <span
        class="blog-article-item__tag"
        :class="tag === route.query.tags ? 'blog-article-item__tag-active' : ''"
        v-for="tag in data.tags"
        :key="tag"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import type { BlogArticleItemType } from "../../api/types";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const props = defineProps<{
  data: BlogArticleItemType;
}>();
const mainItem = <Ref<HTMLDivElement>>ref({});

const show = () => {
  if (mainItem.value === null) {
    window.removeEventListener("scroll", show);
  } else {
    const htmlScrollTop = document.documentElement.scrollTop;
    const htmlClientHeight = document.documentElement.clientHeight;
    const offsetTop = mainItem.value.offsetTop;
    if (htmlScrollTop + htmlClientHeight >= offsetTop - 50) {
      mainItem.value.style.opacity = "1";
      mainItem.value.style.top = "0";
      window.removeEventListener("scroll", show);
    }
  }
};
onMounted(() => {
  window.addEventListener("scroll", show);
  show();
});
const handleItem = () => {
  router.push("/blogDetails/" + props.data.id);
};
</script>

<style lang="less">
.blog-article-item {
  &__container {
    padding: 20px;
    background-color: white;
    margin-bottom: 10px;
    opacity: 0;
    position: relative;
    top: 100px;
    transition: all 1s ease-out;
    border-radius: 10px;
  }
  &__body {
    display: flex;
  }
  &__body-left {
    flex: 1;
    padding-right: 20px;
  }
  &__name {
    font-size: 20px;
    span {
      cursor: pointer;
      &:hover {
        color: #015ab9;
      }
    }
  }
  &__info-item {
    color: #9ca3af;
    font-size: 13px;
    margin-right: 10px;
    i {
      margin-right: 3px;
    }
  }
  &__text {
    margin: 10px 0;
    color: #9ca3af;
    font-size: 13px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  &__image {
    width: 150px;
    height: 100px;
    border-radius: 5px;
  }
  &__tag {
    color: #9ca3af;
    font-size: 13px;
    background-color: #f3f4f6;
    padding: 0 10px;
    border-radius: 10px;
    margin-right: 10px;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #015ab9;
    }
  }
  &__tag-active {
    color: white;
    background-color: #656ed6;
  }
}
</style>
