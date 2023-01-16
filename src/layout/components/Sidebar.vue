<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useSidebarStore } from '@/store/sidebar'
import SidebarItem from './SidebarItem.vue'

const route = useRoute()
const sidebar = useSidebarStore()
</script>
<template>
  <div class="sidebar">
    <div class="logo-title">
      <img src="@/assets/images/logo.png" />
      <span class="title">电子档案管理系统</span>
    </div>
    <el-scrollbar
      wrap-class="scrollbar-wrapper"
      style="height: calc(100% - 60px)"
    >
      <el-menu
        class="sidebar-el-menu"
        :collapse="sidebar.collapse"
        :default-active="route.name"
        background-color="#324157"
        style="border-right: none"
        text-color="#fff"
        active-text-color="#fff"
      >
        <template v-for="item in sidebar.menuList" :key="item.path">
          <el-sub-menu
            v-if="item.children.length > 1 || item.meta"
            :index="item.path"
          >
            <template #title>
              <el-icon v-if="item.meta.icon">
                <component :is="item.meta.icon" />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <SidebarItem
              v-for="itm in item.children"
              :key="itm.path"
              :subItem="itm"
            />
          </el-sub-menu>
          <SidebarItem v-else :key="item.path" :subItem="item.children[0]" />
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #324157;

  .logo-title {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: bolder;
    color: #fff;
    background: #0070c1;

    img {
      width: 40px;
      height: 40px;
      margin: 10px 12px;
    }

    .title {
      vertical-align: top;
    }
  }
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 240px;
}

.sidebar > ul {
  height: 100%;
}
</style>
<style lang="scss">
.sidebar {
  .sidebar-el-menu {
    .el-menu-item {
      &.is-active {
        background: #646d7d;
      }
    }
  }
}
</style>
