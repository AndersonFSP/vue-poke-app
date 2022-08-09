<template>
  <div class="login">
    <section class="wallpaper"> 
    </section>
    <section class="login-form">
      <form class="home" @submit.prevent="submitValidation">
        <h1>Login</h1>
        <Input 
          v-model="email" 
          label="Email"
          type="email"
          id="email"
          message="Informe o email"
          :status="inputStatus.email"
        />
        <Input 
          v-model="password" 
          type="password" 
          label="Senha" 
          id="password"
          message="Informe a senha"
          :status="inputStatus.password"
        />
        <Button label="login"/>
        <h4 class="login-error" v-if="loginError">Email ou senha inválidos</h4>
      </form>
      <GoogleLogin />
    </section>
  </div>
</template>

<script lang="ts">
import Input from '@/components/input/Input.vue'
import Button from '@/components/button/Button.vue'
import GoogleLogin from '@/modules/authentication/components/GoogleLogin.vue'

import { ref, computed, defineComponent } from 'vue'
import { useAuthenticationStore } from '@/modules/authentication/store'
import { useRouter } from 'vue-router'
import { schema } from './validation'
import { StatusType } from '@/components/input/types'

export default defineComponent({
  name: 'Login',
  components: {
    Input,
    Button,
    GoogleLogin
  },
  setup() {
    const store = useAuthenticationStore()
    const router = useRouter()

    const email = ref<string>('')
    const password = ref<string>('')
    const errors = ref<string[]>([])
    const loginError = ref<boolean>(false)

    const login = async ():Promise<void> => {
      try {
        await store.login(email.value, password.value)
        router.push({ name: 'home' })
      } catch (error) {
        loginError.value = true
        console.error(error)
      }
    }

    const submitValidation = async () =>  {
      loginError.value = false
      try {
        await schema.validate({ 
          email: email.value, 
          password: password.value
        }, { abortEarly: false })
        login()
        errors.value = []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        errors.value = err.inner.map((err: any) => err.path)
      }
    }

    const inputStatus = computed(() => {
      const hasError = (field: string) => (errors.value.includes(field) ? StatusType.Error : null)
      return {
        email: hasError('email'),
        password: hasError('password')
      }
    })

    return {
      submitValidation,
      inputStatus,
      email,
      password,
      loginError
    }
  }
})
</script>

<style lang="less" scoped>
  @background-color: #f0f0f0;

  .login {
    display: flex;
  }

  .login-error {
    color: #f00000;
    margin-top: 5px;
    position: relaative;
    text-align: left;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    background-color: @background-color;
    padding: clamp(35px, 8%, 70px);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 180px auto 100px auto;
  }

  .wallpaper {
    width: 100%;
    background-size: cover;
    background-image: url('@/assets/login-background.jpg');
    background-position:left;
    flex: 1;
  }
</style>
