import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostCreate from '../views/PostCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-post',
      name: 'postCreate',
      component: PostCreate
    }
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
