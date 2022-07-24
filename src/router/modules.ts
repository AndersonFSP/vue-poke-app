import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import { PokemonRoutes } from '@/modules/pokemon/routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  //Module Routes
  ...PokemonRoutes
]

export default routes
