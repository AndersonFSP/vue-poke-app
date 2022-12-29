import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/modules'
import FirebaseService from '@/modules/authentication/service'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta?.requiresAuth ? true : false
  if (!FirebaseService.verifyIfIsLogged() && requiresAuth)
    next({ name: 'login' })
  else next()
})

export default router
