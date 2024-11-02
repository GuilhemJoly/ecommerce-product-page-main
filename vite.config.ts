import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/Styles/abstracts/_colors.scss";
                        @import "./src/Styles/abstracts/_mixins.scss";
                        @import "./src/Styles/base/_typography.scss";`,
      },
    },
  },
});
