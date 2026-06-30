import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: served at https://umair-jm.github.io/academic/ so base and the
// router basename both carry the "/academic" prefix.
export default defineConfig({
  base: "/academic/",
  plugins: [react()],
});
