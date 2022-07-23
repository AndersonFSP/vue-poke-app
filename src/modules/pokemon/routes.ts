import { RouteRecordRaw } from 'vue-router'
import PokemonModule from './PokemonModule.vue'
import Pokemon from '@/modules/pokemon/pages/Pokemons.vue'

export const PokemonRoutes: RouteRecordRaw[] = [
  {
    path: '/pokemons',
    component: PokemonModule,
    children: [
      {
        path: '',
        name: 'pokemons',
        component: Pokemon
      }
    ]
  }
]