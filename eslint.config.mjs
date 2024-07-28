import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptESLintParser from "@typescript-eslint/parser";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {
    ignores: ["**/node_modules/**", "**/dist-electron/**", "**/.vscode/**", "postcss.config.js", "tailwind.config.js"],
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("prettier"),
  {
    plugins: {
      ...compat.plugins("solid")
    },
    languageOptions: {
      parser: typescriptESLintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    }
  }
];