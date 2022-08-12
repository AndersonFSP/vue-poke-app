<template>
  <form @submit.prevent="submitValidation">
    <h1>Login</h1>
    <Input
      id="email"
      v-model="email"
      label="Email"
      type="email"
      message="Informe o email"
      :status="inputStatus.email"
    />
    <Input
      id="password"
      v-model="password"
      type="password"
      label="Senha"
      message="Informe a senha"
      :status="inputStatus.password"
    />
    <Button label="login" />
    <h4
      v-if="loginError"
      class="login-error"
    >
      Email ou senha inválidos
    </h4>
  </form>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import Input from '@/components/input/Input.vue'
import Button from '@/components/button/Button.vue'

import { useAuthenticationStore } from '@/modules/authentication/store'
import { useRouter } from 'vue-router'
import { schema } from '@/modules/authentication/pages/login/validation'
import { StatusType } from '@/components/input/types'

const store = useAuthenticationStore()
const router = useRouter()

const email = ref<string>('')
const password = ref<string>('')
const errors = ref<string[]>([])
const loginError = ref<boolean>(false)

const login = async (): Promise<void> => {
  try {
    await store.login(email.value, password.value)
    router.push({ name: 'home' })
  } catch (error) {
    loginError.value = true
    console.error(error)
  }
}

const submitValidation = async () => {
  loginError.value = false
  try {
    await schema.validate(
      {
        email: email.value,
        password: password.value
      },
      { abortEarly: false }
    )
    login()
    errors.value = []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors.value = err.inner.map((err: any) => err.path)
  }
}

const inputStatus = computed(() => {
  const hasError = (field: string) =>
    errors.value.includes(field) ? StatusType.Error : null
  return {
    email: hasError('email'),
    password: hasError('password')
  }
})
</script>

<style lang="less" scoped>
.login-error {
  color: #f00000;
  margin-top: 5px;
  position: relative;
  text-align: left;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 180px auto 100px auto;
}
</style>
