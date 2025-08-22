import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/order/:id', component: () => import('@/components/order/OrderDetails.vue') },
  ],
})

export default router