import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        service: resolve(__dirname, "src/service/index.html"),
        pricing: resolve(__dirname, "src/pricing/index.html"),
        flow: resolve(__dirname, "src/flow/index.html"),
        faq: resolve(__dirname, "src/faq/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },
});
