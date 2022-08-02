import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import { PokemonRoutes } from '@/modules/pokemon/routes'
import { AuthenticationRoutes } from '@/modules/authentication/routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  //Module Routes
  ...PokemonRoutes,
  ...AuthenticationRoutes
]

export default routes
