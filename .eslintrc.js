module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': [1],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
