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
            :tags="tags"
          />
          <LinksCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getInfo, getClassify, getAllArticle } from '../../api/index';
import type { UserInfo, Classify, BlogArticle } from '../../api/types';
import HomeHeader from '../../components/HomeHeader/index.vue';
import BriefIntroductionCard from '../../components/BriefIntroductionCard/index.vue';
import ClassificationCard from '../../components/ClassificationCard/index.vue';
import LinksCard from '../../components/LinksCard/index.vue';
import TagsCard from '../../components/TagsCard/index.vue';
import ContactInformation from '../../components/ContactInformation/index.vue';
import { onMounted, reactive, provide, Ref, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
export type Tag = {
  tagID: string;
  name: string;
  count: number;
};
const blogArticleList = <Array<BlogArticle>>reactive([]);
const route = useRoute();
const userInfo = <Ref<UserInfo>>ref({
  id: 0,
  name: '',
  userDesc: '',
  avatar: '',
  introduction: '',
  QQ: '',
  email: '',
  phone: '',
});
const classifyList = <Array<Classify>>reactive([]);

onMounted(async () => {
  const reqUserInfo = await getInfo();
  userInfo.value = reqUserInfo;
  const reqClassifyList = await getClassify();
  reqClassifyList.forEach((item) => {
    classifyList.push(item);
  });
  const reqAllArticle = await getAllArticle();
  reqAllArticle.forEach((item) => {
    blogArticleList.push(item);
  });
  document.documentElement.scrollTop = 0;
});

const tags = <Array<Tag>>reactive([
  {
    tagID: '1',
    name: '博客系统',
    count: 9,
  },
  {
    tagID: '2',
    name: '小墨',
    count: 2,
  },
  {
    tagID: '3',
    name: '魔众',
    count: 3,
  },
  {
    tagID: '4',
    name: '旅行',
    count: 7,
  },
  {
    tagID: '5',
    name: '自然',
    count: 2,
  },
  {
    tagID: '6',
    name: '露宿',
    count: 2,
  },
  {
    tagID: '7',
    name: '沙漠',
    count: 2,
  },
  {
    tagID: '8',
    name: '魔众系统',
    count: 7,
  },
  {
    tagID: '9',
    name: '云南',
    count: 2,
  },
  {
    tagID: '10',
    name: '澎湖湾',
    count: 2,
  },
  {
    tagID: '11',
    name: '晚霞',
    count: 1,
  },
]);
provide('userInfo', userInfo);
provide('blogArticleList', blogArticleList);
</script>

<style lang="less">
.home-layout {
  &__container {
    height: 100%;
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
    width:0;
  }
  &__content {
    flex: 2;
    padding-top: 10px;
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
