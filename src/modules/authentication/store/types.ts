import { User } from 'firebase/auth'

export interface IAuthenticationState {
  isUserLogged: boolean
  user: User | null
}

export interface IUser {
  name?: string
  email: string
  password: string
}
