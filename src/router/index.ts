import CategoriesView from '@/Views/CategoriesView.vue'
import HomeView from '@/Views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RecipeItem from '../Views/RecipeItemView.vue'
import RecipeItemView from '../Views/RecipeItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/categories', component: CategoriesView },
    // { path: '/random', component: CategoriesView },
    {
      path: '/item/:id', // <--- :id is dynamic
      name: 'RecipeItemView',
      component: RecipeItemView,
      props: (route) => ({ item: route.params.item }),
    },
  ],
})

export default router
