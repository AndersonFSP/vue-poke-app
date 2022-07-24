<template>
  <form class="home" @submit.prevent="context.login">
    <h1>{{ context.title }}</h1>
    <div>
      <input type="email" id="email" v-model="context.email">
      <input type="password" id="password" v-model="context.password" autocomplete="">
    </div>
    <input type="submit" value="enviar">
  </form>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { ref } from 'vue'
import { useStore } from '@/store'
import { AuthenticationAction } from '@/store/modules/authentication/types'
import { useRouter } from 'vue-router'
import { ModuleName } from '@/store/types'

@Options({})
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
</style>
