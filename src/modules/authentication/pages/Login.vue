<template>
  <section class="login">
    <form class="home" @submit.prevent="context.login">
      <h1>{{ context.title }}</h1>
      <Input v-model="context.email" label="Nome do Usuário"/>
      <Input v-model="context.password" type="password" label="Senha"/>
      <input type="submit" value="enviar">
    </form>
  </section>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { ref } from 'vue'
import { useStore } from '@/store'
import { AuthenticationAction } from '@/modules/authentication/store/types'
import { useRouter } from 'vue-router'
import { ModuleName } from '@/store/types'
import Input from '@/components/Input.vue'

@Options({
  components: {
    Input
  }
})
export default class HomeView extends Vue {
  private context = setup(() => {
    const store = useStore()
    const router = useRouter()

    const title = ref<string>('Login (work in progress)')
    const email = ref<string>('')
    const password = ref<string>('')

    const login = async ():Promise<void> => {
      await store.dispatch(`${ModuleName.Authentication}/${AuthenticationAction.LOGIN}`, { 
        email: email.value, 
        password: password.value
      })
      router.push({ name: 'home' })
    }

    return { 
      title, 
      email, 
      password, 
      login 
    }
  })
}
</script>

<style lang="less" scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    background-color: red;
    position: fixed;
    right: 0;
    padding: clamp(35px, 8%, 70px);
  }

  form {
    width: 100%;
    // text-align: center;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
  }
</style>
