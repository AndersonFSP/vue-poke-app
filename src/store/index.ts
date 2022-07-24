import { IState } from './types'
import { createStore, Store, useStore as VuexUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { authentication } from '@/store/modules/authentication'

export const key: InjectionKey<Store<IState>> = Symbol()

export const store = createStore<IState>({
  state: {
    authentication: {
      isUserLogged: false,
    }
  },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    authentication
  }
})

export const useStore = (): Store<IState> => VuexUseStore(key)