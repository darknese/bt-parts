module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    '../../.eslintrc.json',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/valid-attribute-name': 'off',
        'vue/valid-model-definition': 'off',
        'vue/valid-v-slot': [
          'error',
          {
            allowModifiers: true,
          },
        ],
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'no-undef': 'off',
        'import/no-mutable-exports': 'off',
        'vue/valid-attribute-name': 'off',
        'vue/valid-model-definition': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
}
