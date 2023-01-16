/*
 * @Author: likuntao
 * @Date: 2023-01-09 17:01:41
 * @LastEditors: likuntao
 * @LastEditTime: 2023-01-10 15:18:00
 * @FilePath: \vite-vue3-admind:\工作\项目代码\vite-vue3-test\WebCode\src\store\sidebar.ts
 * @Description:
 *
 * Copyright (c) 2023 by li-kuntao 15811515011@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import type { pathInfo } from '@/types/sidebar'

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      collapse: false,
      menuList: [] as pathInfo[],
    }
  },
  getters: {},
  actions: {
    handleCollapse() {
      this.collapse = !this.collapse
    },
    toggleMenu(data: Array<pathInfo>) {
      this.menuList = data
    },
  },
})
