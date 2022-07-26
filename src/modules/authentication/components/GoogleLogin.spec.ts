import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import GoogleLogin from './GoogleLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { defineComponent } from 'vue'
import { useAuthenticationStore } from '@/modules/authentication/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '',
      component: defineComponent({ template: `<div></div>` }),
      name: 'home',
      children: []
    }
  ]
})

const setup = () =>
  render(GoogleLogin, {
    global: { plugins: [createTestingPinia(), router] }
  })

describe('GoogleLogin', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => ({}))
  })

  afterEach(() => {
    vi.spyOn(console, 'error').mockRestore()
  })
  it('should render FromLogin', () => {
    setup()
    screen.getByTestId('google-button')
  })

  it('should login with google and redirect', async () => {
    vi.spyOn(router, 'push')
    setup()
    const store = useAuthenticationStore()
    const googleButton = screen.getByTestId('google-button')
    await fireEvent.click(googleButton)

    expect(store.loginWithGoogle).toHaveBeenCalled()
    expect(router.push).toHaveBeenCalledWith({ name: 'home' })
  })

  it('should console error', async () => {
    setup()
    const store = useAuthenticationStore()
    vi.spyOn(store, 'loginWithGoogle').mockRejectedValueOnce({})
    const googleButton = screen.getByTestId('google-button')
    await fireEvent.click(googleButton)

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled()
    })
  })
})
