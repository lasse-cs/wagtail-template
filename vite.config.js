import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    publicDir: false,
    resolve: {
        alias: {
            "@": resolve(__dirname, "src/static_src/js"),
        },
    },
    build: {
        outDir: resolve(__dirname, "src/static_built/js"),
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/static_src/js/main.js"),
            },
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                manualChunks: {
                },
            },
        },
    },
});