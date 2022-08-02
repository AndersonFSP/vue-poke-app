import { IAuthenticationState } from "@/store/modules/types"

export interface IState {
  [ModuleName.Authentication]: IAuthenticationState
}

export enum ModuleName {
  Authentication = 'authentication',
}
