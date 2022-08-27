import { render, screen } from '@testing-library/vue'
import Button from './Button.vue'

describe('Button', () => {
  it('should have the correct label', () => {
    const label = 'My button'
    render(Button, { props: { label } })
    screen.getByText(label)
  })
})
