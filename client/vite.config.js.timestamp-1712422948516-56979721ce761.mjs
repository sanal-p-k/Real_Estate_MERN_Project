// vite.config.js
import react from "file:///D:/real_estate/client/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///D:/real_estate/client/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false
      }
    }
  },
  plugins: [react()]
});
export {
    vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWFsX2VzdGF0ZVxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHJlYWxfZXN0YXRlXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcmVhbF9lc3RhdGUvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjp7XG4gICAgcHJveHkgOiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsT0FBTyxXQUFXO0FBQ3pRLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQU87QUFBQSxJQUNMLE9BQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
