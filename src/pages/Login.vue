<template>
  <form class="home">
    <h1>{{ context.title }}</h1>
    <div>
      <input type="email" name="" id="">
      <input type="password" name="" id="">
    </div>
    <input type="submit" value="">
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
    const title = ref<string>('Login View')

    return { title }
  })
}
</script>

<style lang="less" scoped>
</style>
