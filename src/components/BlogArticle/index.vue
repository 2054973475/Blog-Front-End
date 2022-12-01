<template>
  <div class="blog-article__conatiner">
    <BlogArticleItem
      v-for="blogArticle in blogArticleList"
      :key="blogArticle.id"
      :data="blogArticle"
    />
    <el-pagination
      class="blog-article__pagination"
      background
      :hide-on-single-page="true"
      layout="prev, pager, next"
      :current-page="page + 1"
      :page-size="pageCount"
      :total="total"
      @current-change="$emit('currentChange', $event)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { BlogArticleItemType } from "../../api/types";
export default defineComponent({
  props: {
    page: {
      type: Number,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    blogArticleList: {
      type: Array as PropType<Array<BlogArticleItemType>>,
    },
  },
});
</script>
<style lang="less">
.blog-article {
  &__pagination {
    position: relative;
    z-index: 99;
    margin-top: 10px;
    background-color: white;
    padding: 10px;
  }
}
</style>
