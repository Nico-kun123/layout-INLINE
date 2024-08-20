import { createRouter, createWebHistory } from 'vue-router'
import DescriptionView from '../views/DescriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/description'
    },
    {
      path: '/layout-INLINE/',
      name: 'gh-pages-part',
      redirect: '/description'
    },
    {
      path: '/description',
      name: 'description',
      component: DescriptionView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/origins',
      name: 'origins',
      component: () => import('../views/OriginsView.vue')
    },
    
  ]
})

export default router
