import { IState } from './types'
import { createStore, Store, useStore as VuexUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import modules from '@/store/modules'

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
  modules
})

export const useStore = (): Store<IState> => VuexUseStore(key)