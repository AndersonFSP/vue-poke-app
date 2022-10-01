import { RouteRecordRaw } from 'vue-router'
import AuthenticationModule from './AuthenticationModule.vue'
import Login from '@/modules/authentication/pages/login/Login.vue'
import Register from '@/modules/authentication/pages/register/Register.vue'

export const AuthenticationRoutes: RouteRecordRaw[] = [
  {
    path: '/authentication/',
    component: AuthenticationModule,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      }
    ]
  }
]
