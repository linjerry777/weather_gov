import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        "vue",
        "vue-router",
        "pinia",
      ],
      dirs: [
        "./src/utils/**",
        "./src/api/**",
        "./src/type/**",
        "./src/components/**",
        "./src/store/**",
        "./src/router/**",
        "./src/views/**",
      ],
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/auto-import.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets/',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]'
      }
    }
  }
});
