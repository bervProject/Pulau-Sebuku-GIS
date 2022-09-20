module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
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
  },
  "settings": {
    "import/resolver": {
      "import/extensions": [
        ".js",
        ".jsx",
        ".mjs",
        ".ts",
        ".tsx",
        ".vue"
      ]
    }
  }
};
