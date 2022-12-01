import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes = <Array<RouteRecordRaw>>[
  {
    name: 'homeLayout',
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/HomeLayout/index.vue'),
    children: [
      {
        name: 'homeView',
        path: '/home',
        component: () => import('../views/HomeView/index.vue'),
        meta: { title: '首页' },
      },
      {
        name: 'blogView',
        path: '/blog',
        component: () => import('../views/BlogView/index.vue'),
        meta: { title: '博客' },
      },
      {
        name: 'blogDetailsView',
        path: '/blogDetails/:id',
        component: () => import('../views/BlogDetailsView/index.vue'),
      },
      {
        name: 'leaveMessageView',
        path: '/leaveMessage',
        component: () => import('../views/LeaveMessageView/index.vue'),
        meta: { title: '留言' },
      },
      {
        name: 'aboutView',
        path: '/about',
        component: () => import('../views/AboutView/index.vue'),
        meta: { title: '关于我' },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next()
});
export default router;
