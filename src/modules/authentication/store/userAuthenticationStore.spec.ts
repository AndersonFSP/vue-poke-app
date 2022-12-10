vi.mock('@/modules/authentication/service')

import { User } from 'firebase/auth'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthenticationStore } from './index'
import FirebaseService from '@/modules/authentication/service'

const form = {
  email: 'email',
  password: 'pass',
  name: 'Let'
}

describe('Authentication Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have the correct initial state', () => {
    const store = useAuthenticationStore()
    expect(store.user).toBeNull()
    expect(store.isUserLogged).toBeFalsy()
  })

  it('should call loginWithGoogle', () => {
    const store = useAuthenticationStore()
    store.loginWithGoogle()
    expect(FirebaseService.loginWithGoogle).toBeCalled()
  })

  it('should call login with correct parameter', () => {
    const store = useAuthenticationStore()
    store.login(form.email, form.password)

    expect(FirebaseService.login).toBeCalledWith(form.email, form.password)
  })

  it('should call login with correct parameter', () => {
    const store = useAuthenticationStore()
    store.register(form)

    expect(FirebaseService.register).toBeCalledWith(form)
  })

  it('should call verifyIfIsLogged and set user', () => {
    vi.mocked(FirebaseService.verifyIfIsLogged).mockReturnValue({
      displayName: 'username'
    } as User)
    const store = useAuthenticationStore()
    store.verifyIfIsLogged()
    expect(FirebaseService.verifyIfIsLogged).toBeCalled()
    expect(store.user).toEqual({ displayName: 'username' })
    expect(store.isUserLogged).toBeTruthy()
  })
})
