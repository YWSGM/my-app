module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": 1,
    "no-unused-vars": 0
  },
};
