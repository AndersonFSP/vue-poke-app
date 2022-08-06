export interface IAuthenticationState {
  isUserLogged: boolean
}

export interface IUser {
  email: string,
  password: string
}

export enum AuthenticationAction {
  LOGIN = 'LOGIN',
  VERIFY_IF_IS_LOGGED = 'VERIFY_IF_IS_LOGGED',
  LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE'
}

export enum AuthenticationMutation {
  TOGGLE_AUTH = 'TOGGLE_AUTH',
}