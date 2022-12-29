import { createTestingPinia } from '@pinia/testing'
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import FormRegister from './FormRegister.vue'
import { useAuthenticationStore } from '@/modules/authentication/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '',
      component: defineComponent({ template: `<div></div>` }),
      name: 'login',
      children: []
    }
  ]
})
jest.spyOn(router, 'push')
const formMock = {
  name: 'Anderson',
  email: 'anfis@hotmail.com',
  password: 'password@password'
}

const setup = () =>
  render(FormRegister, { global: { plugins: [createTestingPinia(), router] } })

describe('Register', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => ({}))
  })

  afterEach(() => {
    ;(console.error as jest.Mock).mockRestore()
  })
  it('should render Register', () => {
    setup()
    screen.getByText('Cadastro')
    screen.getByLabelText('Nome')
    screen.getByLabelText('Email')
    screen.getByLabelText('Senha')
  })

  it('should create User and redirect', async () => {
    setup()
    const store = useAuthenticationStore()

    const inputName = screen.getByLabelText('Nome')
    await fireEvent.update(inputName, formMock.name)

    const emailName = screen.getByLabelText('Email')
    await fireEvent.update(emailName, formMock.email)

    const inputPassword = screen.getByLabelText('Senha')
    await fireEvent.update(inputPassword, formMock.password)

    const buttonSubmit = screen.getByText('Criar')
    await fireEvent.click(buttonSubmit)
    await waitFor(() => {
      expect(store.register).toHaveBeenCalledWith(formMock)
    })
    expect(router.push).toHaveBeenCalledWith({ name: 'login' })
  })

  it('should not create User if the form is incomplete', async () => {
    setup()
    const store = useAuthenticationStore()

    const inputName = screen.getByLabelText('Nome')
    await fireEvent.update(inputName, formMock.name)

    const emailName = screen.getByLabelText('Email')
    await fireEvent.update(emailName, formMock.email)

    const buttonSubmit = screen.getByText('Criar')
    await fireEvent.click(buttonSubmit)
    await waitFor(() => {
      expect(store.register).not.toBeCalled()
    })
  })

  it('should not create User if an error occurs', async () => {
    setup()
    const store = useAuthenticationStore()
    ;(store.register as jest.Mock).mockRejectedValueOnce({})
    const inputName = screen.getByLabelText('Nome')
    await fireEvent.update(inputName, formMock.name)

    const emailName = screen.getByLabelText('Email')
    await fireEvent.update(emailName, formMock.email)

    const inputPassword = screen.getByLabelText('Senha')
    await fireEvent.update(inputPassword, formMock.password)

    const buttonSubmit = screen.getByText('Criar')
    await fireEvent.click(buttonSubmit)
    await waitFor(() => {
      expect(store.register).toHaveBeenCalledWith(formMock)
    })
    expect(router.push).not.toHaveBeenCalled()
    expect(console.error).toHaveBeenCalled()
  })
})
