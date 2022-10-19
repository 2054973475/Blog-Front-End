<template>
  <div class="contact-information__container">
    <div class="contact-information__header">
      <i class="bi bi-person contact-information__header-icon"></i>联系方式
    </div>
    <div class="contact-information__content">
      <div class="contact-information__item">
        <div class="contact-information__label">QQ</div>
        <div class="contact-information__value">{{ QQ }}</div>
      </div>
      <div class="contact-information__item">
        <div class="contact-information__label">邮箱</div>
        <div class="contact-information__value">{{ email }}</div>
      </div>
      <div class="contact-information__item">
        <div class="contact-information__label">手机</div>
        <div class="contact-information__value">{{ phone }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  QQ: string;
  email: string;
  phone: string;
}>();
</script>

<style lang="less">
.contact-information {
  &__container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  &__header-icon {
    margin-right: 5px;
  }
  &__content {
    margin-top: 20px;
    font-size: 13px;
  }
  &__item {
    display: flex;
    margin: 10px 0;
  }
  &__label {
    width: 50px;
    color: #c4cfdb;
  }
  &__value {
    position: relative;
    left: 40px;
  }
}
</style>
