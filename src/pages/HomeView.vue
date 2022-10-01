<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    Bem vindo {{ displayName }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAuthenticationStore } from '@/modules/authentication/store'

const store = useAuthenticationStore()
const displayName = computed(() => store.user?.displayName)
</script>
