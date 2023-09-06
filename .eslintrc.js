module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["import", "react-hooks"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_", "destructuredArrayIgnorePattern": "^_" }
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { "prefer": "type-imports", "fixStyle": "inline-type-imports" }
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/restrict-template-expressions": "off"
  }
}
