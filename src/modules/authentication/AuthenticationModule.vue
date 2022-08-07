<template>
    <router-view></router-view>
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
