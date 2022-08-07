import { firebaseAuth } from '@/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { defineStore } from 'pinia'
import { IAuthenticationState } from './types'

export const useAuthenticationStore = defineStore('authentication', {
  state: (): IAuthenticationState => ({
    isUserLogged: false
  }),

  actions: {
    toggleAuth() {
      this.isUserLogged = !this.isUserLogged
    },

    async loginWithGoogle(): Promise<void> {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(firebaseAuth, provider)
      this.toggleAuth() 
    },

    async login(email: string, password: string): Promise<void> {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
      this.toggleAuth() 
    },

    verifyIfIsLogged(): void {
      const user = firebaseAuth.currentUser
      if (user) this.toggleAuth() 
    }
  }
})
