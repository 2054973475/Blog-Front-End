<template>
  <div class="header__container">
    <nav class="header__nav navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/home" class="navbar-brand header__nav-brand"
          >Blog</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li :class="['nav-item', isActive('homeView')]">
              <router-link to="/home" class="nav-link">首页</router-link>
            </li>
            <li :class="['nav-item', isActive('blogView')]">
              <router-link to="/blog" class="nav-link">博客</router-link>
            </li>
            <li :class="['nav-item', isActive('leaveMessageView')]">
              <router-link to="/leaveMessage" class="nav-link"
                >留言</router-link
              >
            </li>
            <li :class="['nav-item', isActive('aboutView')]">
              <router-link to="/about" class="nav-link">关于</router-link>
            </li>
            <li class="nav-item header__nav-item">
              <a href="http://localhost:8080" class="nav-link"
                >后台</a
              >
            </li>
          </ul>
          <form class="d-flex header__nav-form" role="search">
            <input
              class="form-control me-2 header__nav-search"
              type="text"
              placeholder="请输入关键词"
              v-model="keyword"
              @keydown.enter.prevent="handleSearch"
            />
            <i class="header__nav-search-icon bi bi-search"></i>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const keyword = ref("");
const isActive = (name: string) => {
  return route.name === name ? "header__nav-item-active" : "header__nav-item";
};
const handleSearch = (e:KeyboardEvent) => {
  const input =e.target as HTMLInputElement
  router.push({
    name: "blogView",
    query: {
      keyword: keyword.value,
    },
  });
  keyword.value = "";
  input.blur()!
};
</script>

<style lang="less">
.header {
  &__container {
    background-color: white;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  &__nav {
    flex: 1;
    max-width: 1200px;
    background-color: white !important;
  }
  &__nav-brand {
    margin-right: 50px;
  }
  &__nav-item {
    font-size: 16px;
    margin: 0 20px;
  }
  &__nav-item-active {
    font-size: 16px;
    margin: 0 20px;
    a {
      color: #656fe6 !important;
    }
  }
  &__nav-form {
    position: relative;
  }
  &__nav-search {
    border-radius: 30px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
  &__nav-search-icon {
    position: absolute;
    right: 25px;
    top: 6px;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
