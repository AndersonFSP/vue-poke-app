jest.mock('@/modules/authentication/service', () => ({}))

import { fireEvent, render, screen } from '@testing-library/vue'
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
      component: defineComponent({ template: `<div>Home</div>` }),
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
  it('should render FromLogin', () => {
    setup()
    screen.getByTestId('google-button')
  })

  it('should login with google', async () => {
    jest.spyOn(router, 'push')
    setup()
    const store = useAuthenticationStore()
    const googleButton = screen.getByTestId('google-button')
    await fireEvent.click(googleButton)

    expect(store.loginWithGoogle).toHaveBeenCalled()
    expect(router.push).toHaveBeenCalledWith({ name: 'home' })
  })
})
