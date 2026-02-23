import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { allowedHosts: ["maegan-excludable-janessa.ngrok-free.dev"] }, // add your ngrok domain here ]
});
