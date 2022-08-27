module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'prettier'
  ],

  plugins: ['prettier'],

  rules: {
    camelcase: 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    semi: ['error', 'never'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],
    'prettier/prettier': 'error'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
