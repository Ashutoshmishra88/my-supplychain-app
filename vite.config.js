import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-supplychain-app/",
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
