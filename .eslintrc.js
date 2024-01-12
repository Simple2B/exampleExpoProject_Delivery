// module.exports = {
//   root: true,
//   extends: ["universe/native"],
//   rules: {
//     // Note: you must disable the base rule as it can report incorrect errors
//     "no-unused-vars": "off",
//     "@typescript-eslint/no-unused-vars": "error",
//     "import/order": "off",
//   },
// };

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // enable parsing latest ECMAScript
    sourceType: 'module', // allow use of imports
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    '@react-native-community',
  ],
  rules: {
    // here add any ESlint rules to overwrite those
    // from the recommended extensions
  },
};

// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
