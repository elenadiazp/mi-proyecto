import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        form: resolve(__dirname, "./src/formulario.html"), // Otra página
      },
    },
  },
  base: "./",
});