import { render, screen } from '@testing-library/vue'
import Input from './Input.vue'
import { StatusType } from './types'
import '@testing-library/jest-dom'

interface Props {
  id?: string
  label?: string
  type?: string
  message?: string
  status?: StatusType
  modelValue?: string
}

const setup = (props?: Props) =>
  render(Input, { props: { label: 'Input Label', id: 'input', ...props } })

describe('Input', () => {
  it('should have the correct label', () => {
    setup()
    screen.getByLabelText('Input Label')
    expect(screen.getByLabelText('Input Label'))
  })
})
