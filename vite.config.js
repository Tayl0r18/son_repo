import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // 构建后的资源必须从子应用服务加载；部署时设置 VITE_PUBLIC_BASE。
  base: command === 'build' ? (process.env.VITE_PUBLIC_BASE || 'http://localhost:5173/') : '/',
  plugins: [vue(), qiankun('my-vue-app', { useDevMode: true })],
  server: {
    port: 5173,
    strictPort: true,
    origin: 'http://localhost:5173',
    cors: true,
  },
  preview: {
    port: 5173,
    strictPort: true,
    cors: true,
  },
}))
