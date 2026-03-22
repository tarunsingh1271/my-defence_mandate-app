import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function normalizeBasePath(rawBase?: string) {
  if (!rawBase) return '/'

  const withLeadingSlash = rawBase.startsWith('/') ? rawBase : `/${rawBase}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineConfig({
  plugins: [
    react()
  ],
  // Default to root for Docker/local hosting and allow override for subpath deployments.
  base: normalizeBasePath(process.env.VITE_BASE_PATH),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})