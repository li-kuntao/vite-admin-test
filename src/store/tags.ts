import { defineStore } from 'pinia'
import type { TagInfo } from '@/types/tags'

export const useTagsStore = defineStore('tags', {
  state: () => {
    return {
      list: [] as TagInfo[],
    }
  },
  getters: {
    show: (state) => {
      return state.list.length > 0
    },
  },
  actions: {
    delTagsItem(index: number) {
      this.list.splice(index, 1)
    },
    setTagsItem(data: any) {
      this.list.push(data)
    },
    clearTags() {
      this.list = []
    },
    closeTagsOther(data: any) {
      this.list = data
    },
    // closeCurrentTag(data: any) {
    //   for (let i = 0, len = this.list.length; i < len; i++) {
    //     const item = this.list[i] as any
    //     if (item.name === data.$route.fullPath) {
    //       if (i < len - 1) {
    //         data.$router.push(this.list[i + 1].path as string)
    //       } else if (i > 0) {
    //         data.$router.push(this.list[i - 1].path as string)
    //       } else {
    //         data.$router.push('/')
    //       }
    //       this.list.splice(i, 1)
    //       break
    //     }
    //   }
    // }
  },
})
