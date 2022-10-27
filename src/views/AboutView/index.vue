<template>
  <div class="about__contanier">
    <div class="about__header">
      <i class="bi bi-person about__icon"></i>关于我
    </div>
    <div class="about__content">
      <div v-html="userDesc"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
import type { UserInfo } from '../../api/types';
const userInfo = inject<Ref<UserInfo>>('userInfo');
const userDesc = userInfo?.value.userDesc;
</script>

<style lang="less">
.about {
  &__contanier {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    color: #34495e;
    p {
      margin-bottom: 10px;
    }
    img {
      width: 100%;
    }
  }
  &__header {
    margin-bottom: 20px;
    font-size: 16px;
  }
  &__icon {
    font-size: 20px;
    margin-right: 5px;
  }
  &__content {
    font-size: 13px;
  }
}
</style>
