<template>
  <form
    class="home"
    @submit.prevent="context.register"
  >
    <h1>{{ context.title }}</h1>
    <div>
      <input
        id="email"
        v-model="context.email"
        type="email"
      >
      <input
        id="password"
        v-model="context.password"
        type="password"
        autocomplete=""
      >
    </div>
    <input
      type="submit"
      value="enviar"
    >
  </form>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '@/firebase'

@Options({})
export default class Register extends Vue {
  private context = setup(() => {
    const title = ref<string>('Register (work in progress)')
    const email = ref<string>('')
    const password = ref<string>('')

    const register = async () => {
      try {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          email.value,
          password.value
        )
        console.log(email.value)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      title,
      email,
      password,
      register
    }
  })
}
</script>

<style lang="less" scoped></style>
