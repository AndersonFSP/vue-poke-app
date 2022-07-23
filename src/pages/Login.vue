<template>
  <form class="home">
    <h1>{{ context.title }}</h1>
    <div>
      <input type="email" id="email" >
      <input type="password" id="password" autocomplete="">
    </div>
    <input type="submit" value="enviar">
  </form>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  private context = setup(() => {
    const title = ref<string>('Login (work in progress)')

    return { title }
  })
}
</script>

<style lang="less" scoped>
</style>
