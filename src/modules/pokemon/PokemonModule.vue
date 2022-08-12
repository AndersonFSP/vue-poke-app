<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component'

@Options({})
export default class HomeView extends Vue {
  private context = setup(() => {
    return {}
  })
}
</script>
