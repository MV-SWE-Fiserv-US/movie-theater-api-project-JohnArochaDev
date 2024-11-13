// module.exports = {
//   env: {
//     browser: true,
//     commonjs: true,
//     es2021: true
//   },
//   extends: 'standard',
//   overrides: [
//     {
//       env: {
//         node: true
//       },
//       files: [
//         '.eslintrc.{js,cjs}'
//       ],
//       parserOptions: {
//         sourceType: 'script'
//       }
//     }
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest'
//   },
//   rules: {
//     semi: ['error', 'never']
//   }
// }
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'never'],
    indent: 'off',
    'eol-last': 'off',
    'no-unused-vars': 'off'
  }
}