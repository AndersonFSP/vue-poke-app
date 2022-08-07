<template>
  <button class="google-button" @click="context.loginWithGoogle">
    <img src="@/assets/google.png" alt="">
  </button>
</template>

<script lang="ts">
import { useAuthenticationStore } from '@/modules/authentication/store'
import { Options, Vue, setup } from 'vue-class-component'
import { useRouter } from 'vue-router'

@Options({})
export default class GoogleButton extends Vue {
  private context = setup(() => {
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

    return { 
      loginWithGoogle 
    }
  })
}
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
