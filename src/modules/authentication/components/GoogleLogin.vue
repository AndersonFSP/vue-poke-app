<template>
  <button class="google-button" @click="loginWithGoogle">
    <img src="@/assets/google.png" alt="">
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthenticationStore } from '@/modules/authentication/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'GoogleLogin',
  setup() {
    const store = useAuthenticationStore()
    const router = useRouter()

    const loginWithGoogle = async ():Promise<void> => {
      try {
        await store.loginWithGoogle()
        router.push({ name: 'home' })
      } catch (error) {
        console.error(error)
      }
    }

    return { loginWithGoogle }
  }
})

</script>

<style lang="less" scoped>
.google-button {
  border-radius: 100%;
  background-color: rgb(29, 28, 28);
  text-align: center;
  display: flex;
  align-content: center;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 40px;
  }
  }
</style>
