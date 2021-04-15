const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthBase.vue'),
    children: [
    ],
  },
];

export default routes;
