// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'quote-props': [2, "as-needed"],
    'no-shadow': ['error', { 'builtinGlobals': false, hoist: 'never', allow: ['resolve', 'reject', 'done', 'cb'] }],
    'no-param-reassign': ["error", { "props": false }],
    'arrow-body-style': ["error", "always"],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-underscore-dangle': ['error', { 'allow': ["_id"], 'allowAfterThis': true }],
    'consistent-return': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
