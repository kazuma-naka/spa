import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest"; // Add Jest plugin

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/__tests__/**/*.{js,jsx}", "**/*.{test,spec}.{js,jsx}"], // Apply Jest to test files
    plugins: { jest: pluginJest }, // Use Jest plugin
    languageOptions: {
      globals: {
        ...globals.jest, // Add Jest globals like describe, it, expect
      },
    },
    rules: {
      ...pluginJest.configs.recommended.rules, // Use recommended Jest rules
      "react/react-in-jsx-scope": "off", // Your existing React rule
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
