import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// require("dotenv").config();

export default defineConfig({
  plugins: [react()],
  preview: {
    port: (process.env.PORT as unknown as number) || 3000,
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: (process.env.PORT as unknown as number) || 3000,
  },
});
