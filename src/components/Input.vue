<template>
   <label for="">
    <span>{{ label }}</span>
    <input 
      class="input" 
      :type="type" 
      id="email" 
      :value="modelValue" 
      @input="onInput($event.target.value)"
    >
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
    }
  },
  emits: ['update:modelValue']
})
export default class Input extends Vue {
  label!: string
  type!: string

  private onInput(value: string) {
    this.$emit('update:modelValue', value)
  }
}
</script>

<style lang="less" scoped>
  label {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  
    .input {
      width: 100%;
      background-color: lightgray;
      border: none;
      border-radius: 5px;
      outline: none;
      font-size: 0.9em;
      padding: 25px 10px 10px;
      font-weight: 600;
      color: rgb(75, 71, 71);
    }
  }
</style>