<script lang="ts" setup>
import { useSidebarStore } from '@/store/sidebar'
import vHeader from './components/Header.vue'
import vSidebar from './components/Sidebar.vue'
import vTags from './components/Tags.vue'

const sidebar = useSidebarStore()
</script>

<template>
  <div class="layout-container">
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
      <v-header />
      <v-tags></v-tags>
      <div class="content">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <!-- <KeepAlive include="ReorganizeStore"> -->
            <component :is="Component" :key="route.name" />
            <!-- </KeepAlive> -->
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  position: relative;

  .content-box {
    position: absolute;
    left: 240px;
    right: 0;
    top: 0;
    bottom: 0;
    transition: left 0.3s ease-in-out;
    background: #f0f0f0;

    .content {
      height: calc(100% - 100px);
      padding: 16px;
      box-sizing: border-box;
    }
  }

  .content-collapse {
    left: 64px;
  }
}
</style>
