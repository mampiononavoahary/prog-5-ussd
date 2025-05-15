import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node, // Ou globals.browser selon ton cas
    },
    ...js.configs.recommended, // ✅ Utilise la bonne config ici
  },
  {
    files: ["**/*.ts"],
    ...tseslint.configs.recommended,
  },
]);

