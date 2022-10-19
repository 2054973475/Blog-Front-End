<template>
  <div class="links__container">
    <div class="links__header">
      <i class="bi bi-link links__header-icon"></i>友情链接
    </div>
    <div class="links__content">
      <a class="links__item" href="https://juejin.cn/">掘金</a>
      <a class="links__item" href="https://www.w3school.com.cn/">w3school</a>
      <a class="links__item" href="https://cn.vuejs.org/">vue</a>
      <a class="links__item" href="https://react.docschina.org/">react</a>
      <a class="links__item" href="https://www.bilibili.com/">bilibili</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
.links {
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
    text-align: center;
    text-decoration: none;
    &:hover {
      color: #015ab9;
    }
  }
}
</style>
