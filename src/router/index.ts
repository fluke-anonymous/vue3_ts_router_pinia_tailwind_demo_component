import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../components/layout/main/Layout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  '',
      children: [
        {path:'', component: HomeView},
        {path:'about', component: () => import('../views/AboutView.vue')},
        {path:'promotion', component: () => import('../views/PromotionView.vue')},
        {path:'product', component: () => import('../views/ProductView.vue')},
        {path:'product/id', component: () => import('../views/ProductItemView.vue')},
        {path:'article', component: () => import('../views/ArticleView.vue')},
        {path:'contact', component: () => import('../views/ContactView.vue')},

      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
