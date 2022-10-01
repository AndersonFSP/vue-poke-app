<template>
  <form @submit.prevent="submitValidation">
    <h1>Cadastro</h1>
    <Input
      id="nome"
      v-model="form.name"
      label="Nome"
      message="Informe o nome"
      :status="inputStatus.name"
    />
    <Input
      id="email"
      v-model="form.email"
      label="Email"
      type="email"
      message="Informe o email"
      :status="inputStatus.email"
    />
    <Input
      id="password"
      v-model="form.password"
      type="password"
      label="Senha"
      message="Informe a senha"
      :status="inputStatus.password"
    />
    <Button label="Criar" />
  </form>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from 'vue'
import Input from '@/components/input/Input.vue'
import Button from '@/components/button/Button.vue'
import { StatusType } from '@/components/input/types'
import { schema } from '@/modules/authentication/pages/register/validation'
import { useAuthenticationStore } from '@/modules/authentication/store'
import { useRouter } from 'vue-router'

const store = useAuthenticationStore()
const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const errors = ref<string[]>([])
const loginError = ref<boolean>(false)

const register = async () => {
  try {
    await store.register(form)
    router.push({ name: 'login' })
  } catch (error) {
    console.error(error)
  }
}

const submitValidation = async () => {
  loginError.value = false
  try {
    await schema.validate(form, { abortEarly: false })
    register()
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
    name: hasError('name'),
    email: hasError('email'),
    password: hasError('password')
  }
})
</script>

<style lang="less" scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 180px auto 100px auto;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
