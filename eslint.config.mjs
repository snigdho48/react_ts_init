import globals from 'globals';
import react from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
      tsPlugin,
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    ignores: [
      '.config/*',
      'dist/*',
      'node_modules/*',
      'public/*',
      'src/*',
      'tailwind.config.js',
      '*.json',
      '*.md',
      '*.yml',
      '*.yaml',
      '*.lock',
      '*.lock.json',
      '*.lock.yaml',
      '*.lock.yml',
      '*.lock.lock',
      '*.lock.lock.json',
      '*.lock.lock.yaml',
      '*.lock.lock.yml',
      '*.lock.lock.lock',
    ],

    rules: {
      // ... any rules you want
      semi: 'error',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'react/react-in-jsx-scope': 'warn',
    },
  },
];
