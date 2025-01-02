import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Gör servern tillgänglig via ditt nätverk
    hmr: {
      protocol: "ws", // Använd WebSocket-protokoll för HMR
      host: "localhost",
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
