import CategoriesView from '@/Views/CategoriesView.vue'
import HomeView from '@/Views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/categories', component: CategoriesView },
    // { path: '/random', component: CategoriesView },
  ],
})

export default router
