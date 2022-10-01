<template>
  <router-view />
</template>
<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { computed } from 'vue'
import { useAuthenticationStore } from '@/modules/authentication/store'

@Options({})
export default class App extends Vue {
  private context = setup(() => {
    const store = useAuthenticationStore()

    store.verifyIfIsLogged()
    const isUserLogged = computed(() => store.isUserLogged)

    return {
      store,
      isUserLogged
    }
  })
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
