const js = require("@eslint/js");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      "eqeqeq": ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "no-unreachable": "error",
      "no-duplicate-case": "error"
    }
  }
];