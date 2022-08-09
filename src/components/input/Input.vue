<template>
   <label :for="id">
    <span :class="[spanClasses, state]">{{ label }}</span>
    <input 
      :class="['input', state]" 
      :type="props.type" 
      :id="props.id" 
      :value="props.modelValue" 
      @focus="focusInput"
      @blur="blurInput"
      @input="onInput($event.target.value)"
      autocomplete
    >
    <p v-if="hasError" class="message">{{ props.message }}</p>
  </label>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits, computed, ref } from 'vue'
import { StatusType } from './types'

interface Props {
  id?: string,
  label?: string,
  type?: string,
  message: string,
  status?: StatusType,
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: 'Label text',
  status: StatusType.Default
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): string
}>()

if (props.modelValue) active.value = true

const active = ref<boolean>(false)

const spanClasses = computed(() => ({ 'active': active.value }))

const state = computed(() => {
  return {
    [StatusType.Default]: '',
    [StatusType.Error]: 'error',
  }[props.status]
})

const hasError = computed((): boolean => props.status === StatusType.Error)

const focusInput = (): void => active.value = true
const blurInput = (): void => active.value = props.modelValue ? true : false
const onInput = (value: string): void => emit('update:modelValue', value)
</script>

<style lang="less" scoped>
  label {
    width: 100%;
    display: block;
    margin-bottom: 20px;

    .message {
      font-size: 0.8em;
      color: #f00000;
    }

    .active {
      font-size: 0.7em;
      margin: 8px 10px; 
    }

    span {
      position: absolute;
      font-size: 0.8em;
      text-transform: uppercase;
      color: #534f4d;
      margin: 20px;
      transition: margin 200ms ease;
      cursor: text;

      &.error {
        color: #f00000; 
      }
    }

    input {
      width: 100%;
      background-color: lightgrey;
      border: 2px solid transparent;
      border-radius: 5px;
      outline: none;
      font-size: 0.9em;
      padding: 25px 10px 10px;
      font-weight: 600;
      color: rgb(75, 71, 71);
      
      &.error {
        border-color: #f00000; 
      }

      &:focus {
        border: 2px solid #534f4d;
        background-color: #e3e8ef;

      }
    }
  }
</style>