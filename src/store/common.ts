/*
 * @Author: likuntao
 * @Date: 2023-01-09 17:01:41
 * @LastEditors: likuntao
 * @LastEditTime: 2023-01-10 15:39:07
 * @FilePath: \vite-vue3-admind:\工作\项目代码\vite-vue3-test\WebCode\src\store\common.ts
 * @Description:
 *
 * Copyright (c) 2023 by li-kuntao 15811515011@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
// import type { urlInfo } from '@/types/common'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      currentUrlData: sessionStorage.getItem('currentUrlData')
        ? JSON.parse(sessionStorage.getItem('currentUrlData') as string)
        : {},
    }
  },
  getters: {},
  actions: {
    setUrlData(data: any) {
      this.currentUrlData = data
    },
  },
})
