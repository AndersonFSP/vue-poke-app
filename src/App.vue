<template>
  <!-- <nav>
    <div v-if="!context.isUserLogged">
      <router-link :to="{ name: 'login' }">Login</router-link> /
      <router-link :to="{ name: 'register'}">Register</router-link>
    </div>
    <div v-else>
      <router-link  to="/">Home</router-link> /
      <router-link :to="{ name: 'pokemons' }">Pokemons Module</router-link>
    </div>
  </nav> -->
  <router-view/>
</template>
<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { computed } from 'vue'
import { useStore } from '@/store'
import { ModuleName } from '@/store/types'
import { AuthenticationAction } from '@/store/modules/types'

@Options({})
export default class App extends Vue {
  private context = setup(() => {
    const store = useStore()

    store.dispatch(`${ModuleName.Authentication}/${AuthenticationAction.VERIFY_IF_IS_LOGGED}`)
    const isUserLogged = computed(() => store.state[ModuleName.Authentication].isUserLogged)

    return {
      store,
      isUserLogged
    }
  })
}
</script>

<style lang="less">
// #app {
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
