module.exports = {
  'globals': {
    '__PATH_PREFIX__': true, 
  },
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'react-app',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
  },
};
