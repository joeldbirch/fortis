module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  parser: "babel-eslint",
  rules: {
    strict: 0,
    semi: ["error", "never"],
    'no-console': process.env.NODE_ENV === `production` ? `error` : `off`,
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `off`,
    quotes: [`error`, `backtick`],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
  }]
  },
}
