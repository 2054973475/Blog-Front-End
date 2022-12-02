<template>
  <div class="home-layout__container">
    <HomeHeader />
    <div class="home-layout__body">
      <div class="home-layout__body-container">
        <div class="home-layout__content">
          <router-view></router-view>
        </div>
        <div class="home-layout__aside">
          <BriefIntroductionCard
            :name="userInfo.name"
            :avatar="userInfo.avatar"
            :introduction="userInfo.introduction"
          />
          <ContactInformation
            v-if="route.name === 'aboutView'"
            :QQ="userInfo.QQ"
            :email="userInfo.email"
            :phone="userInfo.phone"
          />
          <ClassificationCard :classifyList="classifyList" />
          <TagsCard
            v-if="route.name === 'homeView' || route.name === 'blogView'"
          />
          <LinksCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getInfo, getClassify } from "../../api/index";
import type { UserInfoType, ClassifyType } from "../../api/types";
import HomeHeader from "../../components/HomeHeader/index.vue";
import BriefIntroductionCard from "../../components/BriefIntroductionCard/index.vue";
import ClassificationCard from "../../components/ClassificationCard/index.vue";
import LinksCard from "../../components/LinksCard/index.vue";
import TagsCard from "../../components/TagsCard/index.vue";
import ContactInformation from "../../components/ContactInformation/index.vue";
import { provide, Ref, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const userInfo = <Ref<UserInfoType>>ref({
  id: 0,
  name: "",
  userDesc: "",
  avatar: "",
  introduction: "",
  QQ: "",
  email: "",
  phone: "",
});
const classifyList = <Ref<Array<ClassifyType>>>ref([]);
const init = async () => {
  const reqUserInfo = await getInfo();
  userInfo.value = reqUserInfo;
  const reqClassifyList = await getClassify();
  classifyList.value = reqClassifyList;
  document.documentElement.scrollTop = 0;
};

watch(
  () => route,
  () => {
    init();
  },
  {
    deep: true,
    immediate: true,
  }
);
provide("userInfo", userInfo);
</script>

<style lang="less">
.home-layout {
  &__container {
    min-height: 100vh;
    background-color: #f4f6f8;
    display: flex;
    flex-direction: column;
  }
  &__body {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  &__body-container {
    flex: 1;
    max-width: 1100px;
    display: flex;
    width: 0;
  }
  &__content {
    flex: 2;
    padding-top: 12px;
    padding-bottom: 20px;
    max-width: 700px;
    code{
      color:#ccc;
    }
    pre{
      background-color: #50556B;
      padding: 10px 20px;
    }
  }
  &__aside {
    box-sizing: border-box;
    flex: 1;
    padding: 20px;
    padding-top: 10px;
  }
  @media screen and (max-width: 640px) {
    &__body-container {
      display: block;
    }
    &__aside {
      width: 100%;
      padding: 0px;
      padding-top: 10px;
    }
  }
}
</style>
