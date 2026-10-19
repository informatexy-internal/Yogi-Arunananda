import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH is set in CI from actions/configure-pages: "/<repo>" on the temporary
// github.io project URL, "" once a custom domain (public/CNAME) is configured.
export default defineConfig(({ mode }) => {
  const { BASE_PATH } = loadEnv(mode, ".", "");
  const base = BASE_PATH ? `${BASE_PATH.replace(/\/$/, "")}/` : "/";
  return {
    plugins: [react()],
    base,
    build: { target: ["es2020", "safari14", "chrome87", "firefox78", "edge88"] },
  };
});
