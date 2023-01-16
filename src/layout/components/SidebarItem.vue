<script lang="ts" setup>
import { useRouter } from 'vue-router'
// import { useCommonStore } from '@/store/common'
// import { isExternal } from '@/utils/validate'

interface currentItem {
  name?: string
  meta?: any
  path: string
  children?: any
}
defineProps<{
  subItem: currentItem
}>()
const router = useRouter()
const toggleMenuItem = (item: currentItem) => {
  router.push({ name: item.name })
  // const common = useCommonStore()
  // const externalFunc = (val: string) => {
  //   return isExternal(val)
  // }
  // if (isExternal(item.path)) {
  //   外链
  //   sessionStorage.setItem(
  //     'currentUrlData',
  //     JSON.stringify({
  //       isExternal: true,
  //       name: item.name,
  //       meta: item.meta,
  //       path: item.path
  //     })
  //   )
  //   common.setUrlData({
  //     isExternal: true,
  //     name: item.name,
  //     meta: item.meta,
  //     path: item.path
  //   })
  // } else {
  //   sessionStorage.setItem(
  //     'currentUrlData',
  //     JSON.stringify({
  //       isExternal: false,
  //       name: item.name,
  //       meta: item.meta,
  //       path: item.path
  //     })
  //   )
  //   common.setUrlData({
  //     isExternal: false,
  //     name: item.name,
  //     meta: item.meta,
  //     path: item.path
  //   })
  // }
}
</script>
<template>
  <el-menu-item
    v-if="!subItem.children || subItem.children.length === 0"
    :index="subItem.name"
    @click="toggleMenuItem(subItem)"
  >
    <el-icon v-if="subItem.meta.icon">
      <component :is="subItem.meta.icon" />
    </el-icon>
    <template #title>{{ subItem.meta.title }}</template>
  </el-menu-item>
  <el-sub-menu v-else :index="subItem.path">
    <template #title>
      <el-icon v-if="subItem.meta.icon">
        <component :is="subItem.meta.icon" />
      </el-icon>
      <span>{{ subItem.meta.title }}</span>
    </template>
    <SidebarItem
      v-for="item in subItem.children"
      :key="item.path"
      :subItem="item"
    />
  </el-sub-menu>
</template>
