<template>
   <label :for="id">
    <span :class="[spanClasses, state]">{{ label }}</span>
    <input 
      :class="['input', state]" 
      :type="type" 
      :id="id" 
      :value="modelValue" 
      @focus="focusInput"
      @blur="blurInput"
      @input="onInput($event.target.value)"
      autocomplete
    >
    <p v-if="hasError" class="message">{{ message }}</p>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { StatusType } from './types'


@Options({
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    message: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false,
      default: StatusType.Default,
      validator(value: StatusType) {
        return [StatusType.Default, StatusType.Error].includes(value)
      }
    },
    modelValue: {
      type: String,
    }
  },
  emits: ['update:modelValue']
})
export default class Input extends Vue {
  public label?: string
  public type!: string
  public modelValue!: string
  public status!: StatusType
  public message?: string 

  private active = false

  get spanClasses() {
    return  { 
      'active': this.active,
    }
  }
  
  get state() {
   return {
     [StatusType.Default]: '',
     [StatusType.Error]: 'error',
    }[this.status]
  } 

  get hasError() {
    return this.status === StatusType.Error
  }

  public focusInput() {
    this.active = true
  }

  public blurInput() {
    this.active = this.modelValue ? true : false
  }

  public onInput(value: string) {
    this.$emit('update:modelValue', value)
  }

  mounted() {
    if (this.modelValue) this.active = true
  }
}
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