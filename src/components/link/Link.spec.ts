import { render, screen } from '@testing-library/vue'
import { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import link from './Link.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: defineComponent({ template: `<div></div>` }),
      name: 'login'
    }
  ]
})

const setup = () =>
  render(link, {
    props: {
      link: '/'
    },
    slots: { default: 'My Link' },
    global: { plugins: [router] }
  })

describe('link', () => {
  it('should render link', () => {
    setup()
    screen.getByText('My Link')
  })
})
