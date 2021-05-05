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
  plugins: [],
  extends: [
    'airbnb-base',
  ],

  rules: {
    'no-underscore-dangle': [
      'error',
      { allow: ['_id', '__filename', '__dirname'] },
    ],
  },
};
