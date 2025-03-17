import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import type { Linter } from "eslint";
import { globalIgnores } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:readable-tailwind/warning",
    ],
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js"],
        parser: "@typescript-eslint/parser",
      },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
    },
    plugins: ["@typescript-eslint", "readable-tailwind"],
    rules: {
      "tailwindcss/classnames-order": "off",
      "readable-tailwind/multiline": [
        "warn",
        {
          group: "newLine",
          printWidth: 100,
        },
      ],
    },
  }),
  js.configs.recommended,
  globalIgnores([".next/*", "node_modules/*"]),
] as Linter.Config[];
