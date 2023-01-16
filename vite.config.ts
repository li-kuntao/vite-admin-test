/*
 * @Author: likuntao
 * @Date: 2023-01-09 17:01:41
 * @LastEditors: likuntao
 * @LastEditTime: 2023-01-10 15:00:28
 * @FilePath: \vite-vue3-admind:\工作\项目代码\vite-vue3-test\WebCode\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by li-kuntao 15811515011@163.com, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/dev': {
        target: 'http://192.168.126.99:61009',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ''),
      },
    },
  },
})
