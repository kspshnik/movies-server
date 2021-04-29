module.exports = {
  env: {
    browser: false,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      impliedStrict: 'true',
    },
  },
  plugins: [
    'promise',
    'prettier',
    'editorconfig',
    'regexp',
    'ternary',
    'xss',
    'node',
    'jsdoc',
  ],
  extends: [
    'airbnb-base',
    'plugin:regexp/recommended',
    'plugin:editorconfig/all',
    'plugin:ternary/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'xss/no-mixed-html': 'error',
    'xss/no-location-href-assign': 'error',
    'no-underscore-dangle': [
      'error',
      { allow: ['_id', '__filename', '__dirname'] },
    ],
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
  },
};
