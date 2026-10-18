import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the root of a custom domain (GitHub Pages + CNAME), so base is "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: { target: ["es2020", "safari14", "chrome87", "firefox78", "edge88"] },
});
