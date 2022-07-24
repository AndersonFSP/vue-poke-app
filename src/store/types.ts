import { IAuthenticationState } from "@/store/modules/authentication/types"

export interface IState {
  [ModuleName.Authentication]: IAuthenticationState
}

export enum ModuleName {
  Authentication = 'authentication',
}
