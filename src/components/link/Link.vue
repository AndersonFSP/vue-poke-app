<template>
  <router-link :to="props.link" class="link">
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
interface Props {
  link: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="less">
.link {
  text-decoration: none;
  font-weight: bold;
  color: #222224;
  transition: all ease 0.3s;
  &:hover {
    color: #ee1515;
  }
}
</style>
