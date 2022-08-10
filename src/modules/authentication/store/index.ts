import { defineStore } from 'pinia'
import { IAuthenticationState } from './types'
import FirebaseService from '@/modules/authentication/service'

export const useAuthenticationStore = defineStore('authentication', {
  state: (): IAuthenticationState => ({
    isUserLogged: false
  }),

  actions: {
    toggleAuth() {
      this.isUserLogged = !this.isUserLogged
    },

    async loginWithGoogle(): Promise<void> {
      await FirebaseService.loginWithGoogle()
      this.toggleAuth() 
    },

    async login(email: string, password: string): Promise<void> {
      await FirebaseService.login(email, password)
      this.toggleAuth() 
    },

    verifyIfIsLogged(): void {
      const user = FirebaseService.verifyIfIsLogged()
      if (user) this.toggleAuth() 
    }
  }
})
