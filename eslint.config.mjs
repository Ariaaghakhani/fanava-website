// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      'vue/require-prop-types': 0,
      'vue/require-default-prop': 0,
      'vue/no-mutating-props': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-reserved-component-names': 0, 
      'vue/v-on-event-hyphenation': 'off',
      'vue/require-explicit-emits': 'error',
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
    },
  },
]).prepend([
  {
    ignores: [
      'public/**',
      'dist/**',
      '.output/**',
      '.nuxt/**',
      'node_modules/**',
      'venv/**',
      'build/**',
      'general-chart/**',
      '*.yaml',
    ],
  },
])
