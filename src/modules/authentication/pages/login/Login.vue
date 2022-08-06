<template>
  <div class="login">
    <section class="wallpaper"> 
    </section>
    <section class="login-form">
      <form class="home" @submit.prevent="context.submitValidation">
        <h1>Login</h1>
        <Input 
          v-model="context.email" 
          label="Email"
          type="email"
          id="email"
          message="Informe o email"
          :status="context.inputStatus.email"
        />
        <Input 
          v-model="context.password" 
          type="password" 
          label="Senha" 
          id="password"
          message="Informe a senha"
          :status="context.inputStatus.password"
        />
        <Button label="login"/>
        <h4 class="login-error" v-if="context.loginError">Email ou senha inválidos</h4>
      </form>
      <GoogleLogin />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { ref, computed } from 'vue'
import { useStore } from '@/store'
import { AuthenticationAction } from '@/modules/authentication/store/types'
import { useRouter } from 'vue-router'
import { ModuleName } from '@/store/types'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import GoogleLogin from '@/modules/authentication/components/GoogleLogin.vue'
import { schema } from './validation'

enum StatusType {
  Default = 'default',
  Error = 'error'
}
@Options({
  components: {
    Input,
    GoogleLogin,
    Button
  }
})
export default class HomeView extends Vue {
  private context = setup(() => {
    const store = useStore()
    const router = useRouter()
    
    const email = ref<string>('')
    const password = ref<string>('')
    const errors = ref<string[]>([])
    const loginError = ref<boolean>(false)

    const login = async ():Promise<void> => {
      try {
        await store.dispatch(`${ModuleName.Authentication}/${AuthenticationAction.LOGIN}`, { 
          email: email.value, 
          password: password.value
        })
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
      email, 
      password, 
      submitValidation,
      loginError,
      inputStatus
    }
  })
}
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
