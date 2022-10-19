<template>
  <div class="brief-introduction__container">
    <img class="brief-introduction__image" :src="avatar" />
    <div class="brief-introduction__name">{{ name }}</div>
    <div class="brief-introduction__content">
      {{ introduction }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  avatar: string;
  introduction: string;
}>();
</script>

<style lang="less">
.brief-introduction {
  &__container {
    padding: 40px;
    width: 100%;
    height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  &__image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  &__name {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  &__content {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
