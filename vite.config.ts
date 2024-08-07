import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import solidPlugin from "vite-plugin-solid";
import path from "node:path";

export default defineConfig({
  plugins: [
    solidPlugin(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    }
  }
});
