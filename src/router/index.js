import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue'),
      },
    ],
  },
  {
    path: '/writer',
    name: 'writer',
    component: () => import('@/views/WriterView.vue'),
  },
  {
    path: '/reader/:code',
    name: 'reader',
    component: () => import('@/views/ReaderView.vue'),
    props: true,
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = new VueRouter({
  routes
});

export default router;
