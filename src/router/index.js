import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/orders/1'
    },
    {
      path: '/orders/:id',
      component: () => import('@/components/orders/OrderDetails.vue')
    }
  ],
})

export default router