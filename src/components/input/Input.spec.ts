import { render } from '@testing-library/vue'
import Input from './Input.vue'
import '@testing-library/jest-dom'

const setup = () => render(Input)

describe('Input', () => {
  it('should render with', () => {
    setup()
    expect('').toBeInTheDocument()
  })
})
