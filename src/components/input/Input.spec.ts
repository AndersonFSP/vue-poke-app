import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
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

const setup = (props?: Props) => ({
  ...render(Input, { props: { label: 'Label', id: 'input', ...props } }),
  input: screen.getByTestId('input')
})

describe('Input', () => {
  it('should have the correct text value', async () => {
    const { input } = setup()
    const text = 'any text value'
    await fireEvent.update(input, text)

    expect(input).toHaveValue(text)
  })

  it('should have the correct label', () => {
    const label = 'My Label'
    setup({ label })
    screen.getByLabelText(label)
  })

  it('should have the active label when input is value', async () => {
    setup({ modelValue: 'value' })

    const inputLabel = screen.getByTestId('input-label')
    expect(inputLabel).toHaveClass('active')
  })

  it.each([
    { status: StatusType.Error, classes: 'input error' },
    { status: StatusType.Default, classes: 'input' }
  ])('should have the correct class $status status', ({ status, classes }) => {
    const { input } = setup({ status })
    expect(input).toHaveClass(classes)
  })

  it('should have a helper text when status is error', async () => {
    const message = 'required Input'
    const { rerender } = setup({ status: StatusType.Default, message })

    expect(screen.queryByTestId('input-text')).not.toBeInTheDocument()

    rerender({ status: StatusType.Error, message })
    await waitFor(() => {
      expect(screen.queryByTestId('input-text')).toHaveTextContent(message)
    })
  })
})
