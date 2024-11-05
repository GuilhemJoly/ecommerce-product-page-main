import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

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
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@customHooks': path.resolve(__dirname, 'src/customHooks'),
      '@datas': path.resolve(__dirname, 'src/datas'),
      '@typescript': path.resolve(__dirname, 'src/typescript'),
      '@Ui': path.resolve(__dirname, 'src/components/UI'),
    }
  }
});
