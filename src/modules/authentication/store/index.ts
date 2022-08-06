import { Module } from "vuex"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseAuth } from '@/firebase'
import { IState } from '@/store/types'
import { 
  IAuthenticationState, 
  AuthenticationAction, 
  AuthenticationMutation, 
  IUser 
} from './types'

export const authentication: Module<IAuthenticationState, IState> = {
  namespaced: true,
  mutations: {
    [AuthenticationMutation.TOGGLE_AUTH]: (state) => {
      state.isUserLogged = !state.isUserLogged
    },
  },

  actions: {
    async [AuthenticationAction.LOGIN_WITH_GOOGLE]({ commit }) {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(firebaseAuth, provider)
      commit(AuthenticationMutation.TOGGLE_AUTH)
    },
    async [AuthenticationAction.LOGIN]({ commit }, { email, password }: IUser) {
      const user = await signInWithEmailAndPassword(firebaseAuth, email, password)
      console.log(user)
      commit(AuthenticationMutation.TOGGLE_AUTH)
    },
    async [AuthenticationAction.VERIFY_IF_IS_LOGGED]({ commit }) {
      const user = firebaseAuth.currentUser
      console.log(user)
      if (user) 
        commit(AuthenticationMutation.TOGGLE_AUTH)
    }
  },
}
