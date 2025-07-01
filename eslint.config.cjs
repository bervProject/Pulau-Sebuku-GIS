const { globalIgnores } = require('eslint/config')

const globals = require('globals')
const pluginVue = require('eslint-plugin-vue')
const {
  defineConfigWithVueTs,
  vueTsConfigs,
} = require('@vue/eslint-config-typescript')
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = defineConfigWithVueTs(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names': 'warn',
      'global-require': 'warn',
      'no-underscore-dangle': 'warn',
      'class-methods-use-this': 'warn',
      'consistent-return': 'warn',
      'default-case': 'warn',
      'max-len': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      "@typescript-eslint/no-require-imports": 'warn'
    },
  },
  globalIgnores(['**/postcss.config.js', '**/prettier.config.js'])
)
