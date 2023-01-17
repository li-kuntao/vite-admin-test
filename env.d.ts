/*
 * @Author: likuntao
 * @Date: 2023-01-09 17:01:41
 * @LastEditors: likuntao
 * @LastEditTime: 2023-01-17 11:17:19
 * @FilePath: \vite-admin-test\env.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by li-kuntao 15811515011@163.com, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare interface Window {
  initCertFunc: any
  SOF_GetUserList: any
}

declare module 'video.js'

declare module 'nprogress'
