<script lang="ts" setup>
import { useRoute } from 'vue-router'

const userInfo = JSON.parse(sessionStorage.getItem('userInfo') as string)
const route = useRoute()
</script>

<template>
  <div class="external-page">
    <el-card>
      <iframe
        height="100%"
        width="100%"
        :src="`${String(route.name)}?userid=${userInfo.id}`"
        frameborder="0"
      />
    </el-card>
  </div>
</template>

<style lang="scss">
.external-page {
  height: 100%;

  .el-card {
    height: 100%;

    .el-card__body {
      height: 100%;
      padding: 10px;
    }
  }
}
</style>
