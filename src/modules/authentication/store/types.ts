export interface IAuthenticationState {
  isUserLogged: boolean
}

export interface IUser {
  name?: string
  email: string
  password: string
}
