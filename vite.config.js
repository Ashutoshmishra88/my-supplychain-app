// filepath: c:\Users\Ashutosh Mishra\Desktop\my-supplychain-app\vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-supplychain-app/",
});
