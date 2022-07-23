<template>
  <div>
    {{ context.msg }}
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Options, setup, Vue } from 'vue-class-component'

@Options({})
export default class Pokemons extends Vue {
  private context = setup(() => {
    const msg = ref<string>('On pokemons views')
    return { msg }
  })
}
</script>
