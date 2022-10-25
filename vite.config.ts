import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import customMediaPostCss from 'postcss-custom-media'
import nestingPostCss from 'postcss-nesting'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        customMediaPostCss({ importFrom: 'src/features/common/global-variables.css' }),
        nestingPostCss
      ]
    }
  }
})
