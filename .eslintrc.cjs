/*
 * @Author: likuntao
 * @Date: 2023-01-09 15:43:25
 * @LastEditors: likuntao
 * @LastEditTime: 2023-01-13 16:37:27
 * @FilePath: \vite-vue3-admind:\工作\项目代码\vite-vue3-test\WebCode\.eslintrc.cjs
 * @Description:
 *
 * Copyright (c) 2023 by li-kuntao 15811515011@163.com, All Rights Reserved.
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['node_modules', 'dist', 'public'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
