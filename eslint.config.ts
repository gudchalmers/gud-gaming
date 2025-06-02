import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import type { Linter } from "eslint";
import { globalIgnores } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.config({
    parser: "@typescript-eslint/parser",
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:better-tailwindcss/recommended-warn",
      "next/core-web-vitals",
      "next/typescript",
    ],
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js"],
        parser: "@typescript-eslint/parser",
      },
    ],
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/globals.css",
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
    },
    plugins: ["@typescript-eslint", "better-tailwindcss"],
    rules: {
      "better-tailwindcss/multiline": [
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
