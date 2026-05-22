import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  basePath: import.meta.dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];
