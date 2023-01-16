<script lang="ts" setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTagsStore } from '@/store/tags'

const route = useRoute()
const router = useRouter()
const tags = useTagsStore()
// 关闭单个标签
const closeTags = (index: number) => {
  // const delItem = tags.list[index]
  tags.delTagsItem(index)
  const item: any = tags.list[index] ? tags.list[index] : tags.list[index - 1]
  if (item) {
    router.push({ name: item.name })
  }
}
watch(
  () => route.name,
  (newVal) => {
    if (newVal) {
      if (tags.list.findIndex((itm) => itm.name === newVal) === -1) {
        tags.setTagsItem({
          name: route.name,
          meta: route.meta,
        })
      }
    }
  },
  { immediate: true }
)
// 关闭全部标签
// const closeAll = () => {
//   tags.clearTags()
//   router.push('/')
// }
// 关闭其他标签
// const closeOther = () => {
//   const curItem = tags.list.filter((item: any) => {
//     return item.path === route.path
//   })
//   tags.closeTagsOther(curItem)
// }
// const handleTags = (command: string) => {
//   return command === 'other' ? closeOther() : closeAll()
// }
const toggleTag = (item: any) => {
  if (item.name !== route.name) {
    router.push({ name: item.name })
  }
}
</script>
<template>
  <div v-if="tags.show" class="tags">
    <ul>
      <li
        v-for="(item, index) in tags.list"
        :key="index"
        class="tags-li"
        :class="{ active: item.name === route.name }"
        @click="toggleTag(item)"
      >
        <span class="tags-li-title">{{ item.meta.title }}</span>
        <el-icon
          v-if="item.name != tags.list[0].name"
          :size="12"
          class="tags-li-icon"
          @click.stop="closeTags(index)"
        >
          <Close />
        </el-icon>
      </li>
    </ul>
    <!--<div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="small" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>-->
  </div>
</template>

<style lang="scss" scoped>
.tags {
  position: relative;
  height: 40px;
  overflow: hidden;
  background: #fff;
  padding: 0 20px;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 7px 5px 7px 0;
  border-radius: 3px;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
  height: 26px;
  line-height: 24px;
  border: 1px solid #c8c9cc;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #606266;

  // transition: all 0.3s ease-in;
  &:last-child {
    margin: 7px 0;
  }

  &:hover {
    background: #f4f4f5;
  }

  .tags-li-title {
    float: left;

    // max-width: 80px;
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    margin-right: 5px;
    color: #606266;
  }

  .tags-li-icon {
    width: 16px;
    height: 16px;
    padding: 2px;
    border-radius: 50%;
    margin: 4px 0;

    &:hover {
      color: #fff;
      background: #909399;
    }
  }

  &.active {
    color: #fff;
    border: 1px solid #409eff;
    background-color: #409eff;

    .tags-li-title {
      color: #fff;
    }

    .tags-li-icon {
      &:hover {
        background: #79bbff;
      }
    }
  }
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgb(0 0 0 / 10%);
  z-index: 10;
}
</style>
