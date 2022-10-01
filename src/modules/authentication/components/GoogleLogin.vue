<template>
  <button
    class="google-button"
    data-testid="google-button"
    @click="loginWithGoogle"
  >
    <img src="@/assets/images/google.png" alt="icone do google" />
  </button>
</template>

<script lang="ts" setup>
import { useAuthenticationStore } from '@/modules/authentication/store'
import { useRouter } from 'vue-router'

const store = useAuthenticationStore()
const router = useRouter()

const loginWithGoogle = async (): Promise<void> => {
  try {
    await store.loginWithGoogle()
    router.push({ name: 'home' })
  } catch (error) {
    console.error(error)
  }
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
