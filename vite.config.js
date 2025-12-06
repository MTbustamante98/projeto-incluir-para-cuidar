import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base:
    import.meta.NODE_ENV === "production"
      ? "/projeto-incluir-para-cuidar-REACT/"
      : "/",
});
