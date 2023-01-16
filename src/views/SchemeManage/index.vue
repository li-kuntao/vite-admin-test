<script lang="ts" setup>
import { ref, reactive, onBeforeMount, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { treeDataGetNode } from '@/utils'
import { schemeConfig } from '@/api'

interface Tree {
  id: number
  name: string
  fold: boolean
  children?: Tree[]
}
interface Catalog {
  id: number
  name: string
  code: string
}
const schemeQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const schemeTotalCount = ref(0)
const schemeLoding = ref(false)
const schemeTableData = ref([])
const schemeRef = ref<FormInstance>()
const schemeRules = reactive<FormRules>({
  name: [{ required: true, message: '方案名称不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '方案编码不能为空', trigger: 'change' }],
})
const schemeData = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    name: '',
    code: '',
  },
})
const catalogQuery = reactive({
  term: '',
  index: 0,
  size: 10,
})
const currenntSchemeId = ref(0)
const schemeCatalogVisible = ref(false)
const treeData = ref<Tree[]>([])
const catalogList = ref<Catalog[]>([])
const infiniteLoading = ref(false)
const noMore = ref(false)
const currentTreeId = ref(0)
const infiniteDisabled = computed(() => infiniteLoading.value || noMore.value)
const allTreeData = computed(() => treeDataGetNode(treeData.value, false))
// 获取方案列表
const getSchemeList = () => {
  schemeLoding.value = true
  const param = {
    params: schemeQuery,
  }
  schemeConfig.getSchemeList(param).then((res: any) => {
    if (res.success) {
      schemeTableData.value = res.data.records
      schemeQuery.index = res.data.pageIndex
      schemeQuery.size = res.data.pageSize
      schemeTotalCount.value = res.data.totalCount
      schemeLoding.value = false
    }
  })
}
// 方案查询
const schemeHandleSearch = () => {
  schemeQuery.index = 1
  schemeQuery.size = 20
  getSchemeList()
}
// 分页
const schemePageChange = (val: number) => {
  schemeQuery.index = val
  getSchemeList()
}
const schemeSizeChange = (val: number) => {
  schemeQuery.size = val
  getSchemeList()
}
// 重置方案
const resetScheme = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑方案
const addEditScheme = (val: boolean, row: any) => {
  schemeData.isAdd = val
  schemeData.form = { ...row }
  schemeData.dialog = true
  resetScheme(schemeRef.value)
}
// 删除方案
const deleteScheme = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      schemeConfig.deleteScheme(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getSchemeList()
        }
      })
    })
    .catch(() => {})
}
// 保存方案
const saveScheme = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (schemeData.isAdd) {
        // 新增
        param = {
          id: 0,
          name: schemeData.form.name,
          code: schemeData.form.code,
        }
        schemeConfig.addScheme(param).then((res: any) => {
          if (res.success) {
            schemeData.dialog = false
            getSchemeList()
          }
        })
      } else {
        // 编辑
        param = {
          id: schemeData.form.id,
          name: schemeData.form.name,
          code: schemeData.form.code,
        }
        schemeConfig
          .updateScheme(schemeData.form.id, param)
          .then((res: any) => {
            if (res.success) {
              schemeData.dialog = false
              getSchemeList()
            }
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 获取目录列表
const getCatalogList = () => {
  const param = {
    params: catalogQuery,
  }
  infiniteLoading.value = true
  schemeConfig.getCatalogList(param).then((res: any) => {
    if (res.success) {
      infiniteLoading.value = false
      catalogList.value = [...catalogList.value, ...res.data.records]
      if (res.data.pageIndex * res.data.pageSize >= res.data.totalCount) {
        noMore.value = true
      }
    }
  })
}
// 查询目录列表
const searchCatalogList = () => {
  catalogQuery.index = 1
  const param = {
    params: catalogQuery,
  }
  infiniteLoading.value = true
  schemeConfig.getCatalogList(param).then((res: any) => {
    if (res.success) {
      infiniteLoading.value = false
      catalogList.value = [...res.data.records]
      if (res.data.pageIndex * res.data.pageSize >= res.data.totalCount) {
        noMore.value = true
      }
    }
  })
}
// 目录懒加载
const catalogLoad = () => {
  catalogQuery.index++
  getCatalogList()
}
// 关联目录
const relateCatalog = (row: any) => {
  currenntSchemeId.value = row.id
  schemeConfig.getCatalogSchemeTree(row.id).then((res: any) => {
    if (res.success) {
      treeData.value = [...res.data]
      schemeCatalogVisible.value = true
    }
  })
}
// 添加到树结构
const addTreeNode = (item: any) => {
  if (allTreeData.value.findIndex((itm) => itm.id === item.id) === -1) {
    currentTreeId.value = 0
    treeData.value.push({
      ...item,
      fold: false,
    })
  }
}
// 点击树节点
const handleNodeClick = (data: Tree) => {
  currentTreeId.value = data.id
}
// 移除目录
const removeCatalog = (node: Node, data: Tree) => {
  const parent = { ...node.parent }
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  treeData.value = [...treeData.value]
}
// 更新树结构
const saveCatalogTree = () => {
  if (!treeData.value.length) {
    ElMessage.warning('关联目录树结构不能为空！')
  } else {
    schemeConfig
      .updateCatalogSchemeTree(currenntSchemeId.value, treeData.value)
      .then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          schemeCatalogVisible.value = false
        }
      })
  }
}
onBeforeMount(() => {
  getSchemeList()
})
</script>
<template>
  <div class="scheme-manage">
    <el-card>
      <div class="search-section clearfix">
        <el-button
          type="primary"
          class="fl"
          @click="addEditScheme(true, { metas: [] })"
        >
          <el-icon><Memo /></el-icon>新建
        </el-button>
        <el-input
          v-model="schemeQuery.term"
          placeholder="请输入方案名称"
          class="fr"
          clearable
          @keyup.enter="schemeHandleSearch"
        >
          <template #append>
            <el-button @click="schemeHandleSearch">
              <el-icon><Search /></el-icon>
            </el-button>
          </template>
        </el-input>
      </div>
      <el-table
        :loading="schemeLoding"
        :data="schemeTableData"
        stripe
        height="calc(100% - 92px)"
      >
        <el-table-column prop="name" label="方案名称" />
        <el-table-column prop="code" label="方案编码" />
        <el-table-column label="操作" width="240">
          <template #default="scope">
            <span @click.prevent="relateCatalog(scope.row)" class="operate-btn">
              <el-icon color="#67C23A"><Share /></el-icon>关联目录
            </span>
            <span
              @click.prevent="addEditScheme(false, scope.row)"
              class="operate-btn"
            >
              <el-icon color="#409EFF"><EditPen /></el-icon>编辑
            </span>
            <span @click.prevent="deleteScheme(scope.row)" class="operate-btn">
              <el-icon color="#F56C6C"><Delete /></el-icon>删除
            </span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="schemeQuery.index"
        :page-size="schemeQuery.size"
        :total="schemeTotalCount"
        @size-change="schemeSizeChange"
        @current-change="schemePageChange"
      >
      </el-pagination>
    </el-card>
    <!-- 方案弹框 -->
    <el-dialog
      v-model="schemeData.dialog"
      :title="schemeData.isAdd ? '新建方案' : '编辑方案'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="schemeRef"
        :model="schemeData.form"
        :rules="schemeRules"
        label-width="100px"
      >
        <el-form-item label="方案名称" prop="name">
          <el-input
            v-model="schemeData.form.name"
            placeholder="请输入方案名称"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="方案编码" prop="code">
          <el-input
            v-model="schemeData.form.code"
            placeholder="请输入方案编码"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="schemeData.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveScheme(schemeRef)"
          >保 存</el-button
        >
      </template>
    </el-dialog>
    <!-- 方案目录弹框 -->
    <el-dialog
      class="scheme-catalog-dialog"
      v-model="schemeCatalogVisible"
      title="关联目录"
      width="40%"
      :close-on-click-modal="false"
      align-center
    >
      <el-row style="position: relative">
        <el-col :span="12" class="pr-15">
          <div class="catalog-head">
            <el-input
              v-model="catalogQuery.term"
              placeholder="请输入目录名称"
              @keyup.enter="searchCatalogList"
              clearable
            >
              <template #append>
                <el-button @click="searchCatalogList">
                  <el-icon><Search /></el-icon>
                </el-button>
              </template>
            </el-input>
          </div>
          <div class="catalog-list">
            <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
              <ul
                v-infinite-scroll="catalogLoad"
                :infinite-scroll-disabled="infiniteDisabled"
                class="infinite-list"
              >
                <li
                  v-for="item in catalogList"
                  :key="item.id"
                  class="infinite-list-item"
                  @click="addTreeNode(item)"
                >
                  <label
                    v-if="
                      allTreeData.findIndex((itm) => itm.id === item.id) !== -1
                    "
                  >
                    <el-icon><Select /></el-icon>
                  </label>
                  {{ item.name }} ({{ item.code }})
                </li>
              </ul>
              <p v-if="infiniteLoading">加载中...</p>
              <p v-if="noMore">没有更多了</p>
            </el-scrollbar>
          </div>
        </el-col>
        <div class="arrow-btn">
          <el-icon><DArrowRight /></el-icon>
        </div>
        <el-col :span="12" class="pl-15">
          <div class="tree-head clearfix">
            <span class="font-16 fl">方案列表</span>
            <el-button
              class="fr"
              size="default"
              type="danger"
              @click="treeData = []"
            >
              清空方案目录
            </el-button>
          </div>
          <div class="tree-list">
            <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
              <el-tree
                v-if="treeData.length"
                style="padding-right: 10px"
                :data="treeData"
                :expand-on-click-node="false"
                draggable
                highlight-current
                node-key="id"
                default-expand-all
                @node-click="handleNodeClick"
              >
                <template #default="{ node, data }">
                  <el-icon
                    class="collapse-icon"
                    @click="data.fold = !data.fold"
                  >
                    <component :is="data.fold ? 'CaretRight' : 'CaretBottom'" />
                  </el-icon>
                  <span class="custom-tree-node clearfix">
                    <span class="title-name fl" :title="data.name">{{
                      data.name
                    }}</span>
                    <el-icon
                      v-if="currentTreeId === data.id"
                      title="删除目录"
                      class="fr"
                      style="color: #f56c6c"
                      @click="removeCatalog(node, data)"
                    >
                      <Remove />
                    </el-icon>
                  </span>
                </template>
              </el-tree>
              <el-empty v-else description="暂无关联目录" />
            </el-scrollbar>
          </div>
        </el-col>
      </el-row>
      <template #footer>
        <el-button @click="schemeCatalogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveCatalogTree">保 存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.scheme-manage {
  height: 100%;

  .search-section {
    padding: 0 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.scheme-manage {
  .el-card {
    height: 100%;

    .el-card__body {
      height: 100%;
      padding: 10px;

      .search-section {
        .el-button--primary {
          margin: 2px 0;
        }

        .el-input {
          width: auto;
        }
      }
    }
  }

  .scheme-catalog-dialog {
    .el-dialog__body {
      padding: 15px 20px;
    }

    .catalog-head {
      margin: 0 20px 10px 10px;
    }

    .tree-head {
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #dcdfe6;

      .el-button--danger {
        padding: 5px 7px;
        margin-top: 1px;
      }
    }

    .catalog-list {
      height: 400px;

      .infinite-list {
        padding-right: 10px;

        .infinite-list-item {
          position: relative;
          height: 38px;
          line-height: 38px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          cursor: pointer;
          border-radius: 6px;
          background: #ecf5ff;
          color: #409eff;
          margin-bottom: 6px;

          label {
            position: absolute;
            right: -14px;
            top: -10px;
            width: 36px;
            height: 26px;
            line-height: 26px;
            background: #67c23a;
            text-align: center;
            transform: rotate(45deg);

            .el-icon {
              color: #fff;
              font-size: 12px;
              margin-top: 13px;
              transform: rotate(-45deg);
            }
          }
        }
      }

      p {
        height: 38px;
        line-height: 38px;
        text-align: center;
        color: #909399;
      }
    }

    .arrow-btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .el-icon {
        font-size: 30px;
        color: #409eff;
      }
    }

    .tree-list {
      height: 400px;

      .el-tree {
        .el-tree-node__content {
          .el-tree-node__expand-icon {
            font-size: 0;
          }

          .el-tree-node__label {
            position: relative;
            width: calc(100% - 12px);

            .collapse-icon {
              position: absolute;
              left: -12px;
              top: 7px;
              font-size: 16px;
            }

            .custom-tree-node {
              width: 100%;

              .title-name {
                width: calc(100% - 24px);
                padding-left: 3px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .el-icon {
                font-size: 16px;
                margin: 7px 8px 7px 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
