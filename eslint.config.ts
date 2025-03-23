import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true, // プロジェクトのルートとして設定
  ignorePatterns: ['node_modules/', 'dist/'], // 除外するディレクトリ
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off', // Next.js では不要
    'react-hooks/rules-of-hooks': 'error', // フックのルールを厳格に適用
    'react-hooks/exhaustive-deps': 'warn', // 依存配列のチェック
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
