export interface IAuthenticationState {
  isUserLogged: boolean
}

export interface IUser {
  email: string,
  password: string
}

export enum AuthenticationAction {
  LOGIN = 'LOGIN',
  VERIFY_IF_IS_LOGGED = 'VERIFY_IF_IS_LOGGED'
}

export enum AuthenticationMutation {
  TOGGLE_AUTH = 'TOGGLE_AUTH',
}