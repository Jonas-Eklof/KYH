import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/KYH/javascript-2/my-react-app",
  server: {
    hmr: true, // Aktivera HMR explicit
    watch: {
      usePolling: true, // Tvingar filövervakning med polling
    },
  },
});
