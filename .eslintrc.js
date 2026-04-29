module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2, { "SwitchCase": 1 }],
  },
  overrides: [
    {
      // 1. Enforce semicolons for JS files
      files: ["*.js", "*.jsx"],
      rules: {
        "semi": ["error", "always"]
      }
    },
    {
      // 2. Disable semicolons for TS files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/semi": ["error", "never"]
      }
    }
  ]
}
