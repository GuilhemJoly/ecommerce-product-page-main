import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/Scss-variables/_colors.scss";
                        @import "./src/Scss-variables/_mixins.scss";
                        @import "./src/Scss-variables/_typography.scss";`,
      },
    },
  },
});
