<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="context.counter"/>
  </div>
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
    const counter = ref<string>('Hello word')

    return {
      counter
    }
  })
}
</script>
