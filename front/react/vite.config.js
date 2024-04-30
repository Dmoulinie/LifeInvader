import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// alias for assets folder
// https://vitejs.dev/config/#resolve-alias
import path from 'path'
const root = process.cwd()
const resolve = (p) => path.resolve(root, p)
const assets = resolve('src/assets')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': assets,
    },
  },
})
