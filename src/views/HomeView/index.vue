<template>
  <div class="home__container">
    <div class="home__carousel">
      <div id="carouselExampleControlsNoTouching" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/login.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/login.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/login.jpeg"
              class="d-block w-100"
              alt="..."
            />
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
      <BlogArticleItem
        v-for="blogArticle in blogArticleList"
        :key="blogArticle.id"
        :data="blogArticle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogArticleItem from '../../components/BlogArticleItem/index.vue';
import type { BlogArticle } from '../../api/types';
import { inject } from 'vue';
const blogArticleList = <Array<BlogArticle>>inject('blogArticleList');
</script>

<style lang="less">
.home {
  &__container {
  }
  &__carousel {
    height: 300px;
    padding: 5px;
    background-color: white;
    .carousel {
      height: 100%;
    }
    .carousel-inner {
      height: 100%;
    }
    .carousel-item {
      height: 100%;
    }
    img {
      height: 100%;
    }
  }
}
</style>
