module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style':0,
    "comma-dangle": ["error", "never"],
    "semicolon": [false, "never"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
