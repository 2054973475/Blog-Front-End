<template>
  <div class="home__container">
    <div class="home__carousel">
      <div id="carouselExampleControlsNoTouching" class="carousel slide">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            data-bs-interval="2000"
            :class="index === 0 ? 'active' : ''"
            v-for="(item, index) in carousel"
            :key="item.id"
          >
            <img :src="item.picture" class="d-block w-100" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
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
import { getCarousel, getAllArticle } from "../../api/index";
import type { CarouselType } from "../../api/types";
import BlogArticle from "../../components/BlogArticle/index.vue";
import type { BlogArticleListType } from "../../api/types";
import { onMounted, ref, Ref } from "vue";
const page = ref(0);
const pageCount = ref(5);
const blogArticleList = <Ref<BlogArticleListType>>ref({});
const carousel = <Ref<CarouselType[]>>ref([]);

onMounted(async () => {
  getBlogArticleList();
  getCarouselList();
});
const getBlogArticleList = async () => {
  const reqAllArticle = await getAllArticle({
    page: page.value,
    pageCount: pageCount.value,
  });
  blogArticleList.value = reqAllArticle;
};
const getCarouselList = async () => {
  carousel.value = await getCarousel();
};
const currentChange = (value: number) => {
  page.value = value - 1;
  getBlogArticleList();
};
</script>

<style lang="less">
.home {
  &__carousel {
    height: 300px;
    padding: 5px;
    background-color: white;
    margin-bottom: 10px;
    .carousel {
      height: 100%;
    }
    .carousel-inner {
      height: 100%;
    }
    .carousel-item {
      height: 100%;
      width: 100%;
    }
    img {
      height: 100%;
    }
  }
}
</style>
