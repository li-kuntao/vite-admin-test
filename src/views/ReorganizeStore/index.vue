<script lang="ts" setup>
import { ref, reactive, onBeforeMount, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElTable, ElMessage, ElMessageBox, ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { useCommonStore } from '@/store/common'
import {
  archiveManage,
  archiveFileManage,
  generalManage,
  dictionaryManage,
  metaManage,
} from '@/api'
import SelectMore from '@/components/SelectMore/index.vue'

interface Tree {
  id: number
  name: string
  archiveTypes?: any
  children?: Tree[]
}
const uploadTree = ref<InstanceType<typeof ElTree>>()
const relatedTreeData = ref<Tree[]>([])
const common = useCommonStore()
const router = useRouter()
const arrangeDate = ref(null)
const query: Record<string, any> = reactive({
  archiveName: null,
  archiveCode: null,
  fondId: null,
  archiveTypeId: null,
  formatTypeId: null,
  arrangeDateFrom: null,
  arrangeDateTo: null,
  approvalStatus: null,
  pageIndex: 1,
  pageSize: 20,
  sort: null,
  isAsc: false,
})
const archiveTableData = ref([])
const totalCount = ref(0)
const loading = ref(false)
const uploadLoading = ref(false)
const downloadVisible = ref(false)
const archiveTypeList = ref<any[]>([])
const metaList = ref<any[]>([])
const currentCatalogId = ref()
const currentArchieveId = ref()
const archiveRef = ref<FormInstance>()
const uploadRef = ref<FormInstance>()
const multipleSelection = ref<any[]>([])
const archiveTableRef = ref<InstanceType<typeof ElTable>>()
const treeData = ref<Tree[]>([])
const archiveRules = reactive<FormRules>({
  name: [{ required: true, message: '档案名称不能为空', trigger: 'blur' }],
  archiveType: [
    { required: true, message: '档案类别不能为空', trigger: 'change' },
  ],
  formatType: [
    { required: true, message: '载体形式不能为空', trigger: 'change' },
  ],
})
const uploadRules = reactive<FormRules>({
  name: [{ required: true, message: '文件名称不能为空', trigger: 'blur' }],
  resourceType: [
    { required: true, message: '文件来源不能为空', trigger: 'change' },
  ],
  sourceCode: [
    { required: true, message: '文件编号不能为空', trigger: 'blur' },
  ],
  fileYear: [{ required: true, message: '年度不能为空', trigger: 'change' }],
})
const shortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
const archiveForm: Record<string, any> = reactive({
  isAdd: false,
  visible: false,
  info: {
    id: null,
    name: null,
    archiveType: null,
    formatType: null,
    writeDate: null,
    retentionPeriod: null,
    securityClassification: null,
    inventoryLcation: null,
    totalPages: null,
    remark: '',
    fondId: null,
  },
  metas: [],
})
const uploadForm: Record<string, any> = reactive({
  visible: false,
  isAdd: false,
  form: {
    id: null,
    name: null,
    resourceType: null,
    sourceCode: null,
    fileYear: null,
    remark: '',
  },
})
const fileList = ref<any[]>([])
const archiveCode = ref('')
watch(
  () => archiveForm.info.formatType,
  (newVal) => {
    if (newVal && archiveForm.visible) {
      metaManage.getMetaByCarrierType(newVal.id).then((res: any) => {
        if (res.success) {
          metaList.value = res.data.map((itm: any) => {
            return {
              name: itm.desc,
              metaId: itm.id,
              metaValue: '',
            }
          })
        }
      })
    }
  }
)
// 浏览全宗树结构
const viewGeneralTree = () => {
  generalManage.viewGeneralTree().then((res: any) => {
    if (res.success) {
      treeData.value = res.data
    }
  })
}
// 检索整编库库档案
const searchGeneralStoreArchive = () => {
  loading.value = true
  const param = { ...query }
  param.archiveTypeId = param.archiveTypeId ? param.archiveTypeId.id : null
  param.formatTypeId = param.formatTypeId ? param.formatTypeId.id : null
  param.approvalStatus = param.approvalStatus ? param.approvalStatus : null
  param.arrangeDateFrom =
    arrangeDate.value === null ? null : arrangeDate.value[0]
  param.arrangeDateTo = arrangeDate.value === null ? null : arrangeDate.value[1]
  archiveManage.searchGeneralStoreArchive(param).then((res: any) => {
    if (res.success) {
      archiveTableData.value = res.data.records
      query.pageIndex = res.data.pageIndex
      query.pageSize = res.data.pageSize
      totalCount.value = res.data.totalCount
      loading.value = false
    }
  })
}
// 点击组织机构树节点
const handleNodeClick = (data: Tree) => {
  query.pageIndex = 1
  query.pageSize = 20
  query.fondId = data.id
  query.archiveName = null
  query.archiveCode = null
  query.archiveTypeId = null
  query.formatTypeId = null
  arrangeDate.value = null
  query.arrangeDateFrom = null
  query.arrangeDateTo = null
  query.approvalStatus = null
  archiveTypeList.value = data.archiveTypes || []
  searchGeneralStoreArchive()
}
// 多选操作
const handleSelectionChange = (val: []) => {
  multipleSelection.value = val.map((itm: any) => {
    return itm.id
  })
}
// 清空多选
const clearSelectedVal = () => {
  if (multipleSelection.value.length && query.fondId) {
    archiveTableRef.value!.clearSelection()
  }
}
// 查询操作
const handleSearch = () => {
  query.pageIndex = 1
  query.pageSize = 20
  searchGeneralStoreArchive()
}
// 重置
const resetSearch = () => {
  query.archiveName = null
  query.archiveCode = null
  query.archiveTypeId = null
  query.formatTypeId = null
  arrangeDate.value = null
  query.arrangeDateFrom = null
  query.arrangeDateTo = null
  query.approvalStatus = null
}
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val
  searchGeneralStoreArchive()
}
const handleSizeChange = (val: number) => {
  query.pageSize = val
  searchGeneralStoreArchive()
}
// 查看
const viewArchive = (row: any) => {
  sessionStorage.setItem(
    'currentUrlData',
    JSON.stringify({
      isExternal: false,
      name: 'ReorganizeStoreDetail',
      meta: { title: '文档详情' },
      path: '/ReorganizeStore/DocDetail',
    })
  )
  common.setUrlData({
    isExternal: false,
    name: 'ReorganizeStoreDetail',
    meta: { title: '文档详情' },
    path: '/ReorganizeStore/DocDetail',
  })
  router.push({
    path: '/ReorganizeStore/DocDetail',
    query: {
      archiveId: row.id,
    },
  })
}
// 删除
const handleDelete = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 ${row.name} 吗？`, '提示', {
    type: 'error',
  })
    .then(() => {
      archiveManage.batchDeleteArchive([row.id]).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          searchGeneralStoreArchive()
        }
      })
    })
    .catch(() => {})
}
// 重置规则
const resetCode = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 导出下载
const exportDownload = (fileName: string, url: string) => {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
}
const exportReorganizeFile = (row: any) => {
  downloadVisible.value = true
  archiveManage.downloadArchiveInfo(row.id).then((res: any) => {
    if (res.data) {
      const fileName = window.decodeURIComponent(
        res.headers['content-disposition'].split('=')[1].split(';')[0]
      )
      const url = window.URL.createObjectURL(new Blob([res.data]))
      exportDownload(fileName, url)
      downloadVisible.value = false
    }
  })
}
// 点击目录树节点
const handleCatalogClick = (data: Tree, node: any) => {
  if (data.children) {
    currentCatalogId.value = data.id
    uploadForm.isAdd = true
    fileList.value = []
    uploadForm.form = { resourceType: 0 }
    resetCode(uploadRef.value)
  } else {
    archiveFileManage.getArchiveFileInfo(data.id).then((res: any) => {
      if (res.success) {
        currentCatalogId.value = node.parent.id || null
        uploadForm.isAdd = false
        fileList.value = []
        uploadForm.form = { ...res.data }
        resetCode(uploadRef.value)
      }
    })
  }
}
// 移除目录文件
const removeCatalog = (node: Node, data: Tree) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 ${data.name} 吗？`, '提示', {
    type: 'error',
  })
    .then(() => {
      archiveFileManage.batchDeleteArchiveFile([data.id]).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          const parent = { ...node.parent }
          const children: Tree[] = parent.data.children || parent.data
          const index = children.findIndex((d) => d.id === data.id)
          children.splice(index, 1)
          relatedTreeData.value = [...relatedTreeData.value]
          currentCatalogId.value = null
          uploadTree.value!.setCurrentKey()
        }
      })
    })
    .catch(() => {})
}
// 上传超出钩子
const handleExceed = (file: any) => {
  fileList.value = file
}
// 上传改变
const uploadChanged = (file: any) => {
  fileList.value = [file.raw]
}
// 上传
const uploadFile = (row: any) => {
  currentArchieveId.value = row.id
  archiveManage.getArchiveInfo(row.id).then((res: any) => {
    if (res.success) {
      relatedTreeData.value = [...res.data.content] || []
      currentCatalogId.value = null
      uploadForm.isAdd = true
      uploadForm.form = { resourceType: 0 }
      uploadLoading.value = false
      uploadForm.visible = true
      nextTick(() => {
        uploadTree.value!.setCurrentKey()
      })
      resetCode(uploadRef.value)
    }
  })
}
// 保存上传文件
const saveUpload = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (currentCatalogId.value) {
    await formEl.validate((valid) => {
      if (valid) {
        if (uploadForm.isAdd) {
          // 新增
          if (fileList.value.length === 0) {
            ElMessage.error('请上传文件文件！')
          } else {
            const fd = new FormData()
            fd.append('id', '0')
            fd.append('name', uploadForm.form.name)
            fd.append('resourceType', uploadForm.form.resourceType)
            fd.append('sourceCode', uploadForm.form.sourceCode)
            fd.append('fileYear', uploadForm.form.fileYear)
            fd.append(
              'remark',
              uploadForm.form.remark ? uploadForm.form.remark : ''
            )
            fd.append('archiveId', currentArchieveId.value)
            fd.append('catalogId', currentCatalogId.value)
            fd.append('file', fileList.value[0])
            uploadLoading.value = true
            archiveFileManage.addArchiveFile(fd).then((res: any) => {
              if (res.success) {
                uploadLoading.value = false
                archiveManage
                  .getArchiveInfo(currentArchieveId.value)
                  .then((resp: any) => {
                    if (resp.success) {
                      relatedTreeData.value = [...resp.data.content] || []
                      currentCatalogId.value = null
                      uploadTree.value!.setCurrentKey()
                    }
                  })
              }
            })
          }
        } else {
          // 编辑
          const param = {
            id: uploadForm.form.id,
            name: uploadForm.form.name,
            resourceType: uploadForm.form.resourceType,
            sourceCode: uploadForm.form.sourceCode,
            fileYear: uploadForm.form.fileYear,
            remark: uploadForm.form.remark ? uploadForm.form.remark : '',
          }
          archiveFileManage
            .updateArchiveFileInfo(uploadForm.form.id, param)
            .then((res: any) => {
              if (res.success) {
                archiveManage
                  .getArchiveInfo(currentArchieveId.value)
                  .then((resp: any) => {
                    if (resp.success) {
                      relatedTreeData.value = [...resp.data.content] || []
                      currentCatalogId.value = null
                      uploadTree.value!.setCurrentKey()
                    }
                  })
              }
            })
        }
      }
    })
  } else {
    ElMessage.error('请选择关联目录！')
  }
}
// 新增、编辑
const handleArchive = (addOrEdit: boolean, row?: any) => {
  archiveForm.isAdd = addOrEdit
  archiveCode.value = ''
  if (archiveForm.isAdd) {
    archiveForm.info = {
      id: null,
      fondId: query.fondId,
      securityClassification: 0,
    }
    metaList.value = []
    archiveForm.metas = []
    archiveForm.visible = true
    resetCode(archiveRef.value)
  } else {
    archiveForm.info = { ...row }
    archiveForm.metas = []
    if (archiveForm.info.formatType) {
      metaManage
        .getMetaByCarrierType(archiveForm.info.formatType.id)
        .then((res: any) => {
          if (res.success) {
            archiveManage.getArchiveMetas(row.id).then((resp: any) => {
              if (resp.success) {
                metaList.value = res.data.map((itm: any) => {
                  const valueIndex = resp.data.findIndex(
                    (em: any) => Number(em.id) === Number(itm.id)
                  )
                  return {
                    name: itm.desc,
                    metaId: itm.id,
                    metaValue:
                      valueIndex !== -1 ? resp.data[valueIndex].value : '',
                  }
                })
                archiveForm.visible = true
                resetCode(archiveRef.value)
              }
            })
          }
        })
    }
  }
}
// 预览档案编号
const viewArchiveCode = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      const param = { ...archiveForm.info }
      param.formatType = {
        id: param.formatType.id,
        name: param.formatType.name,
      }
      param.writeDate = param.writeDate ? param.writeDate : null
      param.retentionPeriod = param.retentionPeriod
        ? param.retentionPeriod
        : null
      param.totalPages = param.totalPages ? param.totalPages : null
      param.remark = param.remark ? param.remark : ''
      archiveManage.getPreviewCode(param).then((res: any) => {
        if (res.success) {
          archiveCode.value = res.data
        }
      })
    }
  })
}
// 保存
const saveArchive = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      if (archiveForm.isAdd) {
        // 新增
        const param = {
          info: { ...archiveForm.info },
          metas: metaList.value.map((itm: any) => {
            return {
              metaId: itm.metaId,
              metaValue: itm.metaValue,
            }
          }),
        }
        param.info.formatType = {
          id: param.info.formatType.id,
          name: param.info.formatType.name,
        }
        param.info.writeDate = param.info.writeDate
          ? param.info.writeDate
          : null
        param.info.retentionPeriod = param.info.retentionPeriod
          ? param.info.retentionPeriod
          : null
        param.info.totalPages = param.info.totalPages
          ? param.info.totalPages
          : null
        archiveManage.addArchive(param).then((res: any) => {
          if (res.success) {
            archiveForm.visible = false
            searchGeneralStoreArchive()
          }
        })
      } else {
        // 编辑
        const param = {
          info: { ...archiveForm.info },
          metas: metaList.value.map((itm: any) => {
            return {
              metaId: itm.metaId,
              metaValue: itm.metaValue,
            }
          }),
        }
        param.info.formatType = {
          id: param.info.formatType.id,
          name: param.info.formatType.name,
        }
        param.info.writeDate = param.info.writeDate
          ? param.info.writeDate
          : null
        param.info.retentionPeriod = param.info.retentionPeriod
          ? param.info.retentionPeriod
          : null
        param.info.totalPages = param.info.totalPages
          ? param.info.totalPages
          : null
        archiveManage
          .updateArchive(archiveForm.info.id, param)
          .then((res: any) => {
            if (res.success) {
              archiveForm.visible = false
              searchGeneralStoreArchive()
            }
          })
      }
    }
  })
}
// 批量删除
const batchDelete = () => {
  ElMessageBox.confirm('确认要批量删除档案吗?', '批量删除', {
    confirmButtonText: '确 认',
    cancelButtonText: '取 消',
    type: 'error',
  })
    .then(() => {
      archiveManage
        .batchDeleteArchive(multipleSelection.value)
        .then((res: any) => {
          if (res.success) {
            ElMessage.success(res.message)
            searchGeneralStoreArchive()
          }
        })
    })
    .catch(() => {})
}
// 批量归档
const archiveFiles = () => {
  ElMessageBox.confirm('确认要批量归档档案吗?', '批量归档', {
    confirmButtonText: '确 认',
    cancelButtonText: '取 消',
    type: 'warning',
  })
    .then(() => {
      archiveManage.batchArchive(multipleSelection.value).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          searchGeneralStoreArchive()
        }
      })
    })
    .catch(() => {})
}
onBeforeMount(() => {
  viewGeneralTree()
  // searchGeneralStoreArchive()
})
</script>

<template>
  <div class="reorganize-store">
    <el-card>
      <el-row :gutter="15">
        <el-col :span="4">
          <el-card class="organization-card">
            <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
              <el-tree
                v-if="treeData.length"
                :data="treeData"
                :expand-on-click-node="false"
                default-expand-all
                highlight-current
                node-key="id"
                @node-click="handleNodeClick"
              >
                <template #default="{ data }">
                  <span class="custom-tree-node">
                    <span class="title-name" :title="data.name">{{
                      data.name
                    }}</span>
                  </span>
                </template>
              </el-tree>
              <el-empty v-else description="暂无全宗数据" />
            </el-scrollbar>
          </el-card>
        </el-col>
        <el-col :span="20">
          <el-card class="search-card mb-15" style="height: 58px">
            <el-form
              :model="query"
              style="display: inline-block; width: calc(100% - 150px)"
            >
              <el-row :gutter="6">
                <el-col :span="4">
                  <el-form-item label="档案名称">
                    <el-input
                      v-model="query.archiveName"
                      placeholder="请输入文档案名称"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="档案类别">
                    <SelectMore
                      :isMultiple="false"
                      v-model:selectedData="query.archiveTypeId"
                      :apiMethodName="dictionaryManage.getArchieveTypeList"
                      desc="name"
                      placeholderName="档案类别"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="载体形式">
                    <SelectMore
                      :isMultiple="false"
                      v-model:selectedData="query.formatTypeId"
                      :apiMethodName="dictionaryManage.getCarrierTypeList"
                      desc="name"
                      placeholderName="载体形式"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="编码名称">
                    <el-input
                      v-model="query.archiveCode"
                      placeholder="编码名称"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="归档时间">
                    <el-date-picker
                      style="width: 100%"
                      v-model="arrangeDate"
                      value-format="YYYY-MM-DD"
                      type="daterange"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :shortcuts="shortcuts"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="3">
                  <el-form-item label="档案状态">
                    <el-select
                      v-model="query.approvalStatus"
                      placeholder="档案状态"
                      clearable
                    >
                      <el-option label="审批中" :value="0" />
                      <el-option label="归档驳回" :value="1" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <div class="act-btn t-r">
              <el-button
                :disabled="!query.fondId"
                type="primary"
                @click="handleSearch"
              >
                查 询
              </el-button>
              <el-button
                :disabled="!query.fondId"
                type="info"
                @click="resetSearch"
              >
                重 置
              </el-button>
            </div>
          </el-card>
          <div class="container">
            <div style="margin-left: 10px">
              <el-button
                :disabled="!query.fondId"
                type="success"
                @click="handleArchive(true)"
              >
                <el-icon><DocumentAdd /></el-icon>新增
              </el-button>
              <el-button
                :disabled="!query.fondId || !multipleSelection.length"
                type="danger"
                @click="batchDelete"
              >
                <el-icon><Delete /></el-icon>批量删除
              </el-button>
              <el-button
                type="warning"
                :disabled="!query.fondId || !multipleSelection.length"
                @click="archiveFiles"
              >
                <el-icon><FolderOpened /></el-icon>批量归档
              </el-button>
              <!-- <el-button type="primary">
                <el-icon><Printer /></el-icon>转移
              </el-button>
              <el-button type="info">
                <el-icon><Operation /></el-icon>装盒
              </el-button> -->
            </div>
            <div class="selected-section">
              <el-icon><InfoFilled /></el-icon>
              已选择
              <span class="number">{{ multipleSelection.length }}</span>
              项
              <span class="clear" @click="clearSelectedVal">清空</span>
            </div>
            <el-table
              v-if="archiveTableData.length"
              ref="archiveTableRef"
              :data="archiveTableData"
              border
              stripe
              @selection-change="handleSelectionChange"
              height="calc(100% - 148px)"
            >
              <el-table-column type="selection" width="60" />
              <el-table-column label="档案名称">
                <template #default="scope">
                  <el-button
                    size="default"
                    link
                    type="primary"
                    @click="viewArchive(scope.row)"
                  >
                    {{ scope.row.name }}
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column label="档案类别">
                <template #default="scope">
                  {{ scope.row.archiveType ? scope.row.archiveType.name : '' }}
                </template>
              </el-table-column>
              <el-table-column prop="code" label="档案编号" />
              <el-table-column prop="fileCount" label="档案数量" />
              <el-table-column label="载体形式">
                <template #default="scope">
                  {{ scope.row.formatType ? scope.row.formatType.name : '' }}
                </template>
              </el-table-column>
              <el-table-column prop="createUser" label="创建人" />
              <el-table-column prop="createDateTime" label="创建时间" />
              <!--<el-table-column label="状态" align="center">
                <template #default="scope">
                  <el-tag :type="scope.row.state === '成功'? 'success': scope.row.state === '失败'? 'danger': ''">
                    {{ scope.row.state }}
                  </el-tag>
                </template>
              </el-table-column>-->
              <el-table-column
                prop="remark"
                label="备注"
                show-overflow-tooltip
              />
              <el-table-column label="操作" width="260">
                <template #default="scope">
                  <el-button
                    size="small"
                    text
                    bg
                    type="warning"
                    @click="handleArchive(false, scope.row)"
                  >
                    编 辑
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="danger"
                    @click="handleDelete(scope.row)"
                  >
                    删 除
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="success"
                    @click="uploadFile(scope.row)"
                  >
                    上 传
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="info"
                    @click="exportReorganizeFile(scope.row)"
                  >
                    下 载
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-empty
              v-else
              style="height: calc(100% - 148px)"
              description="暂无数据"
            />
            <el-pagination
              :disabled="!query.fondId"
              background
              layout="total, sizes, prev, pager, next, jumper"
              :current-page="query.pageIndex"
              :page-size="query.pageSize"
              :total="totalCount"
              @size-change="handleSizeChange"
              @current-change="handlePageChange"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- 档案弹框 -->
    <el-dialog
      class="reorganize-dialog"
      v-model="archiveForm.visible"
      :title="archiveForm.isAdd ? '新建档案' : '编辑档案'"
      width="40%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="archiveRef"
        :model="archiveForm.info"
        :rules="archiveRules"
        label-width="100px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="档案名称" prop="name">
              <el-input
                v-model="archiveForm.info.name"
                placeholder="请输入档案名称"
                maxlength="20"
                show-word-limit
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="档案类别" prop="archiveType">
              <el-select
                style="width: 100%"
                value-key="id"
                v-model="archiveForm.info.archiveType"
                placeholder="请选择档案类别"
              >
                <el-option
                  v-for="item in archiveTypeList"
                  :key="item.id"
                  :label="item.name"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="载体形式" prop="formatType">
              <SelectMore
                style="width: 100%"
                :isMultiple="false"
                v-model:selectedData="archiveForm.info.formatType"
                :apiMethodName="dictionaryManage.getCarrierTypeList"
                desc="name"
                placeholderName="载体形式"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="成文日期">
              <el-date-picker
                style="width: 100%"
                v-model="archiveForm.info.writeDate"
                value-format="YYYY-MM-DD HH:mm:ss"
                type="datetime"
                placeholder="请选择成文日期"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="保管期限">
              <el-input
                type="number"
                v-model="archiveForm.info.retentionPeriod"
                placeholder="请输入保管期限"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密级">
              <el-select
                style="width: 100%"
                v-model="archiveForm.info.securityClassification"
                placeholder="请选择密级"
              >
                <el-option label="无" :value="Number(0)" />
                <el-option label="秘密" :value="Number(1)" />
                <el-option label="机密" :value="Number(2)" />
                <el-option label="绝密" :value="Number(3)" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="库存位置">
              <el-input
                v-model="archiveForm.info.inventoryLcation"
                placeholder="请输入库存位置"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="总页数">
              <el-input
                type="number"
                v-model="archiveForm.info.totalPages"
                placeholder="请输入总页数"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="档案编号">
              <el-input
                v-model="archiveCode"
                disabled
                style="width: calc(100% - 50px)"
              ></el-input>
              <el-button
                title="预览"
                style="margin-left: 2px"
                @click="viewArchiveCode(archiveRef)"
              >
                <el-icon><View /></el-icon>
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="meta-section" v-if="metaList.length">
          <el-col :span="12" v-for="(item, index) in metaList" :key="index">
            <el-form-item :label="item.name" label-width="120px">
              <el-input
                v-model="item.metaValue"
                :placeholder="'请输入' + item.name"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="备注">
          <el-input
            type="textarea"
            :rows="3"
            placeholderName="请输入备注"
            v-model="archiveForm.info.remark"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="archiveForm.visible = false">取 消</el-button>
          <el-button type="primary" @click="saveArchive(archiveRef)"
            >保 存</el-button
          >
        </span>
      </template>
    </el-dialog>
    <!-- 文件上传弹框 -->
    <el-dialog
      class="upload-dialog"
      v-model="uploadForm.visible"
      title="文件上传"
      width="50%"
      :close-on-click-modal="false"
      align-center
    >
      <el-row>
        <el-col :span="8" style="padding-right: 20px">
          <el-scrollbar max-height="560px" wrap-class="scrollbar-wrapper">
            <el-tree
              v-if="relatedTreeData.length"
              ref="uploadTree"
              style="padding-right: 10px"
              :data="relatedTreeData"
              :expand-on-click-node="false"
              highlight-current
              node-key="id"
              default-expand-all
              @node-click="handleCatalogClick"
            >
              <template #default="{ node, data }">
                <span class="custom-tree-node clearfix">
                  <el-icon
                    class="fl"
                    style="margin: 7px 2px 7px 0"
                    size="16px"
                    color="#F56C6C"
                    v-if="!data.children"
                  >
                    <Document />
                  </el-icon>
                  <span class="title-name fl" :title="data.name">
                    {{ data.name }}
                  </span>
                  <el-icon
                    v-if="!data.children && uploadForm.form.id === data.id"
                    title="删除文件"
                    class="fr"
                    size="16px"
                    color="#f56c6c"
                    style="margin: 7px 4px"
                    @click="removeCatalog(node, data)"
                  >
                    <Remove />
                  </el-icon>
                </span>
              </template>
            </el-tree>
            <el-empty v-else description="暂无关联目录" />
          </el-scrollbar>
        </el-col>
        <el-col :span="16" class="form-border">
          <div class="arrow-btn">
            <el-icon><DArrowRight /></el-icon>
          </div>
          <div v-if="currentCatalogId">
            <el-form
              ref="uploadRef"
              :model="uploadForm.form"
              :rules="uploadRules"
              label-width="80px"
            >
              <el-form-item label="文件名称" prop="name">
                <el-input
                  v-model="uploadForm.form.name"
                  placeholder="请输入文件名称"
                  maxlength="20"
                  show-word-limit
                />
              </el-form-item>
              <el-form-item label="文件来源" prop="resourceType">
                <el-select
                  :disabled="uploadForm.isAdd"
                  style="width: 100%"
                  v-model="uploadForm.form.resourceType"
                  placeholder="请选择文件来源"
                >
                  <el-option label="电子上传" :value="Number(0)" />
                  <el-option label="翻拍扫描" :value="Number(1)" />
                  <el-option label="三方系统" :value="Number(2)" />
                  <el-option label="其他" :value="Number(3)" />
                </el-select>
              </el-form-item>
              <el-form-item label="文件编号" prop="sourceCode">
                <el-input
                  v-model="uploadForm.form.sourceCode"
                  placeholder="请输入文件编号"
                />
              </el-form-item>
              <el-form-item label="年度" prop="fileYear">
                <el-date-picker
                  style="width: 100%"
                  v-model="uploadForm.form.fileYear"
                  type="year"
                  value-format="YYYY"
                  placeholder="请选择年度"
                />
              </el-form-item>
              <el-form-item label="备注">
                <el-input
                  type="textarea"
                  :rows="3"
                  v-model="uploadForm.form.remark"
                />
              </el-form-item>
            </el-form>
            <el-upload
              v-if="uploadForm.isAdd"
              style="margin-left: 80px"
              drag
              :limit="1"
              :on-exceed="handleExceed"
              :auto-upload="false"
              :on-change="uploadChanged"
              :file-list="fileList"
              action="#"
            >
              <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
              <div class="el-upload__text">将文件拖拽至此或点击添加</div>
              <!-- <template #tip>
                <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
              </template> -->
            </el-upload>
          </div>
          <el-empty v-else description="暂无表单数据" />
        </el-col>
      </el-row>
      <template #footer>
        <el-button @click="uploadForm.visible = false">关 闭</el-button>
        <el-button
          :loading="uploadLoading"
          type="primary"
          @click="saveUpload(uploadRef)"
        >
          保 存
        </el-button>
      </template>
    </el-dialog>
    <!-- 文件上传弹框 -->
    <el-dialog
      v-model="downloadVisible"
      width="420px"
      :close-on-click-modal="false"
      align-center
    >
      <template #header>
        <p style="display: inline-flex; font-size: 18px">
          <el-icon color="#909399" style="margin-right: 2px"><Files /></el-icon>
          <span>正在导出文件</span>
        </p>
      </template>
      <p style="line-height: 58px; font-size: 20px">导出中，请稍等...</p>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.reorganize-store {
  height: 100%;

  .search-card {
    .act-btn {
      display: inline-block;
      width: 150px;
      margin: 2px 0;
    }
  }

  .container {
    height: calc(100% - 71px);
    background: #fff;

    // border: 1px solid #dcdfe6;
    // border-radius: 5px;
    .selected-section {
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      color: #606266;
      background: #ecf5ff;
      padding: 0 20px;
      margin: 10px 0;
      font-size: 16px;

      .el-icon {
        font-size: 18px;
        vertical-align: text-top;
      }

      .number,
      .clear {
        margin: 0 5px;
        color: #409eff;
      }

      .clear {
        cursor: pointer;

        &:hover {
          opacity: 0.68;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.reorganize-store {
  .el-card {
    height: 100%;

    .el-card__body {
      height: 100%;
      padding: 10px;

      .el-row {
        height: 100%;

        .el-col {
          height: 100%;
        }
      }

      .el-tree {
        padding-right: 10px;

        .el-tree-node__label {
          display: inline-flex;
          width: calc(100% - 26px);

          .custom-tree-node {
            display: inline-flex;
            width: 100%;

            .title-name {
              width: 100%;
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }

    &.organization-card {
      .el-card__body {
        padding-right: 0;
      }
    }

    &.search-card {
      .el-card__body {
        padding: 10px 20px;

        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
  }

  .reorganize-dialog {
    .meta-section {
      padding: 18px 18px 0;
      border: 2px dashed #dcdfe6;
      border-radius: 5px;
      margin-bottom: 18px;
    }
  }

  .upload-dialog {
    .el-tree {
      padding-right: 10px;

      .el-tree-node__label {
        display: inline-flex;
        width: calc(100% - 45px);

        .custom-tree-node {
          display: inline-flex;
          width: 100%;

          .title-name {
            width: calc(100% - 30px);
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }

    .arrow-btn {
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translate(-50%, -50%);

      .el-icon {
        font-size: 30px;
        color: #409eff;
      }
    }

    .form-border {
      position: relative;
      padding: 18px 15px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }
  }
}
</style>
