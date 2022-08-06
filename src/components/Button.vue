<template>
  <button>{{ label }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    label: String
  }
})
export default class HelloWorld extends Vue {
  label!: string
}
</script>

<style scoped lang="less">
  button {
    transition: all 200ms ease;
    display: block;
    width: 100%;
    border-radius: 5px;;
    padding: 10px 3px;
    font-size: 1.2em;
    border: none;
    color: #fff;
    background-color: #222224;
    cursor: pointer;
    text-transform: capitalize;
    text-align: center;

    &:hover {
      background-color: #ee1515;
    }
  }
</style>
