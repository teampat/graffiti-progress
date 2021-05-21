import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: 'Home' } },
  ],
})

router.beforeEach((to, from, next) => {
  next()
})
