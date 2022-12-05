<template>
  <div class="about__contanier">
    <div class="about__header">
      <i class="bi bi-person about__icon"></i>关于我
    </div>
    <div class="about__content">
      <EditorView :value="userDesc"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorView from '../../components/EditorView/index.vue'
import { inject, Ref, computed } from "vue";
import type { UserInfoType } from "../../api/types";
const userInfo = inject<Ref<UserInfoType>>("userInfo");
const userDesc = computed(() => userInfo?.value.userDesc);
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
