module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'prettier',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    camelcase: 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    "vue/multi-word-component-names": 'off',
    "vue/multiline-html-element-content-newline": 'off',
    semi: ["error", "never"],
  }
}
