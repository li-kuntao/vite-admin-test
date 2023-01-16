<!--
 * @Author: likuntao
 * @Date: 2022-10-17 16:01:04
 * @LastEditors: likuntao
 * @LastEditTime: 2022-12-29 13:47:51
 * @FilePath: \WebCoded:\工作\项目代码\vite-vue3-admin\src\components\SelectMore\index.vue
 * @Description:
 *
 * Copyright (c) 2022 by li-kuntao 15811515011@163.com, All Rights Reserved.
-->
<script lang="ts" setup>
import { ref, onMounted, onBeforeUpdate, computed } from 'vue'

/**
 * @description: 组件属性
 * @param {*} isMultiple 是否多选
 * @param {*} selectedData 选定值
 * @param {*} apiMethodName 请求方法
 * @param {*} desc 展示字段
 * @param {*} placeholderName 占位符
 * @param {*} collapseTags 是否折叠tag
 * @param {*} clearable 是否可以清空
 */
const props = defineProps<{
  isMultiple: boolean
  selectedData: any
  apiMethodName: any
  desc: string
  placeholderName: string
  collapseTags?: boolean
  clearable?: boolean
}>()
const emits = defineEmits(['update:selectedData'])
const listVisible = ref(false)
const dataList = ref<any[]>([])
const dataIsLoad = ref(false)
const dataNoMore = ref(false)
const dataPageIndex = ref(0)
const dataSearchVal = ref('')
const selectMore = ref<any>(null)
// 禁用数据滚动
const disableDataSelect = computed(() => dataIsLoad.value || dataNoMore.value)

onMounted(() => {
  if (props.isMultiple) {
    dataList.value = [...props.selectedData]
  } else {
    dataList.value = props.selectedData ? [props.selectedData] : []
  }
})
onBeforeUpdate(() => {
  // 解决数据更新不加载(只在下拉列表不显示执行)
  if (!listVisible.value) {
    if (props.isMultiple) {
      dataList.value = [...props.selectedData]
    } else {
      dataList.value = props.selectedData ? [props.selectedData] : []
    }
  }
})
/* watch(
  () => props.selectedData,
  (newVal) => {
    nextTick(() => {
      if (props.isMultiple) {
        if (newVal) {
          let tagStr = ''
          const tagsParentNode = selectMore.value.$el.getElementsByClassName('el-select__tags')[0]
          const tagsNode = selectMore.value.$el.getElementsByClassName('el-select-tags-wrapper')[0]
          if (tagsNode) {
            tagsParentNode.removeChild(tagsNode)
          }
          if (props.collapseTags) {
            if (newVal.length > 1) {
              tagStr = `<span class="el-select-tags-wrapper has-prefix">
                  <span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
                    <span class="el-tag__content">
                      <span class="el-select__tags-text">${newVal[0][props.desc]}</span>
                    </span>
                    <span class="el-icon el-tag__close" onclick="closeCurrentTag(${
                      newVal[0].id
                    })">x</span>
                  </span>
                  <span class="el-tag el-tag--info el-tag--default el-tag--light">
                    <span class="el-tag__content">
                      <span class="el-select__tags-text">'+ '${newVal.length - 1}</span>
                    </span>
                  </span>
                </span>`
              tagsParentNode.insertAdjacentHTML('afterbegin', tagStr)
            } else {
              tagStr = `<span class="el-select-tags-wrapper has-prefix">
                  <span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
                    <span class="el-tag__content">
                      <span class="el-select__tags-text">${newVal[0][props.desc]}</span>
                    </span>
                    <san class="el-icon el-tag__close" onclick="closeCurrentTag(${
                      newVal[0].id
                    })">x</span>
                  </span>
                </span>`
              tagsParentNode.insertAdjacentHTML('afterbegin', tagStr)
            }
          } else {
            newVal.forEach((item: any) => {
              tagStr += `<span class="el-tag is-closable el-tag--info el-tag--default el-tag--light"><span class="el-tag__content"><span class="el-select__tags-text">${
                item[props.desc]
              }</span></span><span class="el-icon el-tag__close" onclick="closeCurrentTag(${
                item.id
              })">x</span></span>`
            })
            tagStr = `<span class="el-select-tags-wrapper has-prefix">${tagStr}</span>`
            tagsParentNode.insertAdjacentHTML('afterbegin', tagStr)
          }
        }
      } else {
        const inputNode = selectMore.value.$el.getElementsByClassName('el-input__inner')[0]
        inputNode.value = newVal ? newVal[props.desc] : ''
      }
    })
  },
  { deep: true, immediate: true }
) */
// 关闭当前选中标签
/* const closeCurrentTag = (em: any) => {
  const tagList = [...props.selectedData]
  tagList.splice(
    tagList.findIndex((itm: any) => itm.id === em),
    1
  )
  emits('update:selectedData', tagList)
} */
// 赋值给顶层window
// window.closeCurrentTag = (em: any) => closeCurrentTag(em)
/**
 * @description: 查询数据
 * @param {*} term 检索内容
 * @param {*} page 当前页数
 * @param {*} size 每页显示条数
 * @return {*}
 */
const queryDataList = (term: string, page: number, size: number) => {
  const param = {
    params: {
      term,
      page,
      size,
    },
  }
  props.apiMethodName(param).then((res: any) => {
    if (res.success) {
      dataList.value = [...dataList.value, ...res.data.records]
      if (res.data.pageIndex * res.data.pageSize >= res.data.totalCount) {
        // 数据加载完毕禁用加载select
        dataNoMore.value = true
      }
      dataIsLoad.value = false
    }
  })
}
// 数据懒加载
const dataLoadMore = () => {
  dataIsLoad.value = true
  setTimeout(() => {
    dataPageIndex.value++
    queryDataList(dataSearchVal.value, dataPageIndex.value, 10)
  }, 1000)
}
// 数据列表显示
const dataVisibleChange = (val: boolean) => {
  listVisible.value = val
  if (val) {
    dataSearchVal.value = ''
    dataList.value = []
    dataPageIndex.value = 1
    dataIsLoad.value = false
    dataNoMore.value = false
    queryDataList(dataSearchVal.value, dataPageIndex.value, 10)
  }
}
// 数据搜索
const filterDataSearch = (val: string) => {
  dataSearchVal.value = val
  dataList.value = []
  dataPageIndex.value = 1
  dataIsLoad.value = false
  dataNoMore.value = false
  queryDataList(val, dataPageIndex.value, 10)
}
// 所选数据改变
const selectedChange = (val: any) => {
  emits('update:selectedData', val)
}
</script>

<template>
  <el-select
    style="width: 100%"
    ref="selectMore"
    popper-class="max-select-list"
    :multiple="isMultiple"
    filterable
    remote
    :model-value="selectedData"
    value-key="id"
    :remote-method="filterDataSearch"
    @change="selectedChange"
    :placeholder="'请选择' + placeholderName"
    @visible-change="dataVisibleChange"
    :collapse-tags="collapseTags"
    :clearable="clearable ? clearable : false"
  >
    <el-option
      v-infinite-scroll="dataLoadMore"
      :infinite-scroll-immediate="false"
      :infinite-scroll-disabled="disableDataSelect"
      v-for="item in dataList"
      :key="item.id"
      :label="item[desc]"
      :value="item"
    >
    </el-option>
    <p v-if="dataIsLoad">加载中...</p>
    <p v-if="dataNoMore">没有更多了</p>
  </el-select>
</template>

<style lang="scss">
.max-select-list {
  .el-select-dropdown__wrap {
    max-height: 220px;

    p {
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
