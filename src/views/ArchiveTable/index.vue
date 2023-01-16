<script lang="ts" setup>
import { ref, reactive, onBeforeMount, watch, computed, nextTick } from 'vue'
// import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElTree, ElTable, ElMessage, ElMessageBox } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
// import { useCommonStore } from '@/store/common'
import { treeDataGetNode, treeDataDeleteNode } from '@/utils'
import {
  archiveManage,
  archiveFileManage,
  dictionaryManage,
  metaManage,
  schemeConfig,
  generalManage,
} from '@/api'
import SelectMore from '@/components/SelectMore/index.vue'

interface Tree {
  id: number
  name: string
  archiveTypes?: any
  children?: any
}
// const common = useCommonStore()
// const router = useRouter()
const query = reactive({
  fileName: '',
  resourceType: null,
  pageIndex: 1,
  pageSize: 20,
  sort: null,
  isAsc: false,
})
const tabList = [
  { code: 'base', name: '基本信息' },
  { code: 'meta', name: '关联元数据' },
  { code: 'menu', name: '关联目录' },
]
const generalTree = ref<InstanceType<typeof ElTree>>()
const currentTab = ref('base')
const archiveTableData = ref([])
const totalCount = ref(0)
const loading = ref(false)
const uploadLoading = ref(false)
const archiveRef = ref<FormInstance>()
const reorganizeRef = ref<FormInstance>()
const archiveRules = reactive<FormRules>({
  name: [{ required: true, message: '文件名称不能为空', trigger: 'blur' }],
  resourceType: [
    { required: true, message: '文件来源不能为空', trigger: 'change' },
  ],
  sourceCode: [
    { required: true, message: '文件编号不能为空', trigger: 'blur' },
  ],
  fileYear: [{ required: true, message: '年度不能为空', trigger: 'change' }],
})
const reorganizeRules = reactive<FormRules>({
  name: [{ required: true, message: '文件名称不能为空', trigger: 'blur' }],
  // archiveType: [{ required: true, message: '文件类别不能为空', trigger: 'change' }],
  // formatType: [{ required: true, message: '载体形式不能为空', trigger: 'change' }]
})
const multipleSelection = ref<any[]>([])
const archiveTableRef = ref<InstanceType<typeof ElTable>>()
const showHighSearch = ref(false)
const treeData = ref<Tree[]>([])
const relatedTreeData = ref<Tree[]>([])
const currentTreeId = ref(0)
const highSearchForm: Record<string, any> = reactive({
  fileName: null,
  resourceType: null,
})
const archiveForm: Record<string, any> = reactive({
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
const reorganizeForm: Record<string, any> = reactive({
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
const fileList = ref<any[]>([])
const metaList = ref<any[]>([])
const archiveTypeList = ref<any[]>([])
const allTreeData = computed(() =>
  treeDataGetNode(relatedTreeData.value, false)
)
watch(
  () => reorganizeForm.info.formatType,
  (newVal) => {
    if (newVal) {
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
// 检索预归档列表
const searchArchiveList = () => {
  loading.value = true
  archiveFileManage.searchPreArchivedFile(query).then((res: any) => {
    if (res.success) {
      archiveTableData.value = res.data.records
      query.pageIndex = res.data.pageIndex
      query.pageSize = res.data.pageSize
      totalCount.value = res.data.totalCount
      loading.value = false
    }
  })
}
// 显示高级检索
const toggleHighSearch = () => {
  highSearchForm.fileName = null
  highSearchForm.resourceType = null
  showHighSearch.value = true
}
const highSearch = () => {
  query.fileName = highSearchForm.fileName
  query.resourceType = highSearchForm.resourceType
    ? highSearchForm.resourceType
    : null
  query.pageIndex = 1
  query.pageSize = 20
  searchArchiveList()
}
// 多选操作
const handleSelectionChange = (val: []) => {
  multipleSelection.value = val
}
// 清空多选
const clearSelectedVal = () => {
  if (multipleSelection.value.length) {
    archiveTableRef.value!.clearSelection()
  }
}
// 查询
const handleSearch = () => {
  query.pageIndex = 1
  query.pageSize = 20
  query.resourceType = null
  searchArchiveList()
}
// 分页
const handlePageChange = (val: number) => {
  query.pageIndex = val
  searchArchiveList()
}
const handleSizeChange = (val: number) => {
  query.pageSize = val
  searchArchiveList()
}
// 查看
/* const viewArchive = (row: any) => {
  sessionStorage.setItem(
    'currentUrlData',
    JSON.stringify({
      isExternal: false,
      name: 'DocDetail',
      meta: { title: '文档详情' },
      path: '/ArchiveTable/DocDetail'
    })
  )
  common.setUrlData({
    isExternal: false,
    name: 'DocDetail',
    meta: { title: '文档详情' },
    path: '/ArchiveTable/DocDetail'
  })
  router.push({
    path: '/ArchiveTable/DocDetail',
    query: {
      archiveId: row.id
    }
  })
} */
// 上传超出钩子
const handleExceed = (file: any) => {
  fileList.value = file
}
// 上传改变
const uploadChanged = (file: any) => {
  fileList.value = [file.raw]
}
// 删除
const handleDelete = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 ${row.name} 吗？`, '提示', {
    type: 'error',
  })
    .then(() => {
      archiveFileManage.batchDeleteArchiveFile([row.id]).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          searchArchiveList()
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
// 新增、编辑
const handleArchive = (addOrEdit: boolean, row?: any) => {
  // for (const key in archiveForm) {
  //   if (key) {
  //     archiveForm[key] = row ? row[key] : ''
  //   }
  // }
  archiveForm.isAdd = addOrEdit
  fileList.value = []
  archiveForm.form = row ? { ...row } : { resourceType: 0 }
  uploadLoading.value = false
  archiveForm.visible = true
  resetCode(archiveRef.value)
}
// 保存
const saveArchive = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      if (archiveForm.isAdd) {
        // 新增
        if (fileList.value.length === 0) {
          ElMessage.error('请上传文件文件！')
        } else {
          const fd = new FormData()
          fd.append('id', '0')
          fd.append('name', archiveForm.form.name)
          fd.append('resourceType', archiveForm.form.resourceType)
          fd.append('sourceCode', archiveForm.form.sourceCode)
          fd.append('fileYear', archiveForm.form.fileYear)
          fd.append(
            'remark',
            archiveForm.form.remark ? archiveForm.form.remark : ''
          )
          fd.append('file', fileList.value[0])
          uploadLoading.value = true
          archiveFileManage.addPreArchivedFile(fd).then((res: any) => {
            if (res.success) {
              uploadLoading.value = false
              archiveForm.visible = false
              searchArchiveList()
            }
          })
        }
      } else {
        // 编辑
        const param = {
          id: archiveForm.form.id,
          name: archiveForm.form.name,
          resourceType: archiveForm.form.resourceType,
          sourceCode: archiveForm.form.sourceCode,
          fileYear: archiveForm.form.fileYear,
          remark: archiveForm.form.remark ? archiveForm.form.remark : '',
        }
        archiveFileManage
          .updateArchiveFileInfo(param.id, param)
          .then((res: any) => {
            if (res.success) {
              archiveForm.visible = false
              searchArchiveList()
            }
          })
      }
    }
  })
}
// 批量删除
const batchDelete = () => {
  ElMessageBox.confirm('确认要批量删除此文件吗?', '批量删除', {
    confirmButtonText: '确 认',
    cancelButtonText: '取 消',
    type: 'error',
  })
    .then(() => {
      archiveFileManage
        .batchDeleteArchiveFile(
          multipleSelection.value.map((itm: any) => {
            return itm.id
          })
        )
        .then((res: any) => {
          if (res.success) {
            ElMessage.success(res.message)
            searchArchiveList()
          }
        })
    })
    .catch(() => {})
}
// 整编
const reorganizeArchive = () => {
  metaList.value = []
  reorganizeForm.info = {}
  reorganizeForm.metas = []
  reorganizeForm.info.id = '0'
  reorganizeForm.info.securityClassification = 0
  reorganizeForm.info.fondId = null
  currentTab.value = 'base'
  reorganizeForm.visible = true
  nextTick(() => {
    generalTree.value!.setCurrentKey()
  })
  resetCode(reorganizeRef.value)
}
// 点击组织机构树节点
const handleNodeClick = (data: Tree) => {
  reorganizeForm.info.fondId = data.id
  if (data.archiveTypes && data.archiveTypes.length) {
    archiveTypeList.value = data.archiveTypes
  } else {
    ElMessage.error('请关联该全宗的文件类别！')
  }
}
// 文件类别所选数据改变
const selectedChange = (val: any) => {
  if (val) {
    schemeConfig.getTreeByArchieveType(val.id).then((res: any) => {
      if (res.success) {
        relatedTreeData.value = [...res.data]
      }
    })
  }
}
// 切换tab签
const toggleTabItem = (item: any) => {
  if (item.code !== 'base') {
    if (reorganizeForm.info.fondId) {
      if (item.code === 'menu') {
        if (archiveTypeList.value && archiveTypeList.value.length) {
          currentTab.value = item.code
        } else {
          ElMessage.error('请关联该全宗的文件类别！')
        }
      } else {
        currentTab.value = item.code
      }
    } else {
      ElMessage.error('请选择全宗目录！')
    }
  } else {
    currentTab.value = item.code
  }
}
// 添加或删除树节点
const toggleTreeNode = (item: any) => {
  if (relatedTreeData.value.length) {
    if (
      allTreeData.value.findIndex(
        (itm: any) => String(itm.id) === String(item.id)
      ) === -1
    ) {
      currentTreeId.value = 0
      const treeLength = relatedTreeData.value.length - 1
      relatedTreeData.value[treeLength].children.push({
        id: item.id,
        name: item.name,
      })
    } else {
      relatedTreeData.value = treeDataDeleteNode(relatedTreeData.value, item.id)
    }
  } else {
    ElMessage.error('请选择文件类别关联目录！')
  }
}
// 是否允许拖拽
const allowDrop = (draggingNode: any, dropNode: any, type: string) => {
  return type === 'inner'
    ? !draggingNode.data.children && dropNode.data.children
    : !draggingNode.data.children && dropNode.level !== 1
}
// 点击目录树节点
const handleCatalogClick = (data: Tree) => {
  if (!data.children) {
    currentTreeId.value = data.id
  }
}
// 移除目录文件
const removeCatalog = (node: Node, data: Tree) => {
  const parent = { ...node.parent }
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  relatedTreeData.value = [...relatedTreeData.value]
}
// 保存整编
const saveReorganize = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      if (reorganizeForm.info.fondId) {
        if (!reorganizeForm.info.formatType) {
          ElMessage.error('请选择载体形式！')
          currentTab.value = 'meta'
          return
        }
        if (!reorganizeForm.info.archiveType) {
          ElMessage.error('请选择文件类别！')
          currentTab.value = 'menu'
          return
        }
        const catalogList = treeDataGetNode(relatedTreeData.value, true)
        const fileCatolog = multipleSelection.value.map((itm: any) => {
          const idIndex = catalogList.findIndex(
            (im) => String(im.id) === String(itm.id)
          )
          if (idIndex === -1) {
            return {
              fileId: itm.id,
              catalogId: null,
            }
          }
          return {
            fileId: itm.id,
            catalogId: Number(catalogList[idIndex].id),
          }
        })
        const param = {
          info: { ...reorganizeForm.info },
          metas: metaList.value.map((itm: any) => {
            return {
              metaId: itm.metaId,
              metaValue: itm.metaValue,
            }
          }),
          files: fileCatolog,
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
        archiveManage.reorganizePreArchived(param).then((res: any) => {
          if (res.success) {
            reorganizeForm.visible = false
            archiveTableRef.value!.clearSelection()
            ElMessage.success(res.message)
          }
        })
      } else {
        ElMessage.error('请选择全宗目录！')
      }
    } else {
      currentTab.value = 'base'
    }
  })
}
onBeforeMount(() => {
  searchArchiveList()
  viewGeneralTree()
})
</script>

<template>
  <div class="archive-table">
    <el-card>
      <el-row style="margin-bottom: 20px">
        <el-col :span="8" :offset="8">
          <el-input
            style="width: calc(100% - 70px); margin-right: 8px"
            v-model="query.fileName"
            size="large"
            placeholder="请输入文件名称"
            @keyup.enter="handleSearch"
          >
            <template #append>
              <el-button size="large" @click="handleSearch">
                <el-icon>
                  <Search />
                </el-icon>
              </el-button>
            </template>
          </el-input>
          <el-button
            v-if="!showHighSearch"
            type="primary"
            link
            @click="toggleHighSearch"
          >
            高级检索
          </el-button>
          <el-button v-else circle title="折叠" @click="showHighSearch = false">
            <el-icon><ArrowUpBold /></el-icon>
          </el-button>
        </el-col>
      </el-row>
      <el-collapse-transition>
        <div class="collapse-form" v-show="showHighSearch">
          <el-form
            size="small"
            :inline="true"
            :model="highSearchForm"
            class="search-form-inline"
          >
            <el-form-item label="文件名称">
              <el-input
                style="width: 140px"
                v-model="highSearchForm.fileName"
                placeholder="请输入文件名称"
              />
            </el-form-item>
            <el-form-item label="文件来源">
              <el-select
                style="width: 140px"
                v-model="highSearchForm.resourceType"
                placeholder="请选择文件来源"
                clearable
              >
                <el-option label="电子上传" value="0" />
                <el-option label="翻拍扫描" value="1" />
                <el-option label="三方系统" value="2" />
                <el-option label="其他" value="3" />
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="载体形式" prop="type">
              <el-select
                style="width: 140px"
                v-model="highSearchForm.type"
                placeholder="请选择载体形式"
                clearable
              >
                <el-option label="纸质" value="1" />
                <el-option label="电子" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="年度" prop="fileYear">
              <el-date-picker
                style="width: 120px"
                v-model="highSearchForm.fileYear"
                type="year"
                placeholder="请选择年度"
              />
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="highSearch">查 找</el-button>
              <el-button type="info" @click="toggleHighSearch">重 置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-transition>
      <div
        class="container"
        :style="{
          height: showHighSearch ? 'calc(100% - 128px)' : 'calc(100% - 60px)',
        }"
      >
        <div style="margin-left: 10px">
          <!-- <el-button :disabled="!archiveTableData.length">
            <el-icon><Menu /></el-icon>导出
          </el-button> -->
          <el-button
            :disabled="!multipleSelection.length"
            type="info"
            @click="reorganizeArchive"
          >
            <el-icon><Operation /></el-icon>整编
          </el-button>
          <el-button type="success" @click="handleArchive(true)">
            <el-icon><DocumentAdd /></el-icon>添加
          </el-button>
          <!-- <el-button type="primary">
            <el-icon><Printer /></el-icon>扫描
          </el-button>
          <el-button type="warning">
            <el-icon><Camera /></el-icon>翻拍
          </el-button> -->
          <el-button
            :disabled="!multipleSelection.length"
            type="danger"
            @click="batchDelete"
          >
            <el-icon><Delete /></el-icon>批量删除
          </el-button>
          <!-- <el-button>
            <el-icon><Camera /></el-icon>OA提取
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
          <el-table-column prop="name" label="文件名称" />
          <el-table-column prop="resourceType" label="文件类型" />
          <el-table-column prop="sourceCode" label="文件编号" />
          <el-table-column prop="filePages" label="文件页数" />
          <el-table-column prop="resourceType" label="载体形式" />
          <el-table-column prop="createUser" label="创建人" />
          <el-table-column prop="createDateTime" label="创建时间" />
          <!--<el-table-column label="状态" align="center">
            <template #default="scope">
              <el-tag :type="scope.row.state === '成功'? 'success': scope.row.state === '失败'? 'danger': ''">
                {{ scope.row.state }}
              </el-tag>
            </template>
          </el-table-column>-->
          <el-table-column prop="remark" label="备注" show-overflow-tooltip />
          <el-table-column label="操作" width="140">
            <template #default="scope">
              <el-button
                size="small"
                text
                bg
                type="primary"
                @click="handleArchive(false, scope.row)"
              >
                编辑
              </el-button>
              <!-- <el-button size="small" text bg type="success" @click="viewArchive(scope.row)">
                查看
              </el-button> -->
              <el-button
                size="small"
                text
                bg
                type="danger"
                @click="handleDelete(scope.row)"
              >
                删除
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
          :disabled="!archiveTableData.length"
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
    </el-card>
    <!-- 文件弹框 -->
    <el-dialog
      v-model="archiveForm.visible"
      :title="archiveForm.isAdd ? '新建文件' : '编辑文件'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="archiveRef"
        :model="archiveForm.form"
        :rules="archiveRules"
        label-width="80px"
      >
        <el-form-item label="文件名称" prop="name">
          <el-input
            v-model="archiveForm.form.name"
            placeholder="请输入文件名称"
            maxlength="20"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="文件来源" prop="resourceType">
          <el-select
            :disabled="archiveForm.isAdd"
            style="width: 100%"
            v-model="archiveForm.form.resourceType"
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
            v-model="archiveForm.form.sourceCode"
            placeholder="请输入文件编号"
          />
        </el-form-item>
        <el-form-item label="年度" prop="fileYear">
          <el-date-picker
            style="width: 100%"
            v-model="archiveForm.form.fileYear"
            type="year"
            value-format="YYYY"
            placeholder="请选择年度"
          />
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            type="textarea"
            :rows="3"
            v-model="archiveForm.form.remark"
          />
        </el-form-item>
      </el-form>
      <el-upload
        v-if="archiveForm.isAdd"
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
      <template #footer>
        <el-button @click="archiveForm.visible = false">取 消</el-button>
        <el-button
          :loading="uploadLoading"
          type="primary"
          @click="saveArchive(archiveRef)"
        >
          保 存
        </el-button>
      </template>
    </el-dialog>
    <!-- 整编弹框 -->
    <el-dialog
      class="reorganize-dialog"
      v-model="reorganizeForm.visible"
      title="整编"
      width="60%"
      :close-on-click-modal="false"
      align-center
    >
      <el-row>
        <el-col :span="5" class="pr-5">
          <el-scrollbar max-height="500px" wrap-class="scrollbar-wrapper">
            <el-tree
              ref="generalTree"
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
                  <span class="title-name" :title="data.name">
                    {{ data.name }}
                  </span>
                </span>
              </template>
            </el-tree>
            <el-empty v-else description="暂无全宗数据" />
          </el-scrollbar>
        </el-col>
        <el-col :span="19" class="pl-15" style="position: relative">
          <div class="arrow-btn">
            <el-icon><DArrowRight /></el-icon>
          </div>
          <div class="tab-section">
            <div class="tab-list">
              <div
                class="tab-item"
                :class="currentTab === item.code ? 'current-tab' : ''"
                v-for="item in tabList"
                :key="item.code"
                @click="toggleTabItem(item)"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="tab-content">
              <el-form
                ref="reorganizeRef"
                :model="reorganizeForm.info"
                :rules="reorganizeRules"
                label-width="100px"
              >
                <el-row v-show="currentTab === 'base'">
                  <el-col :span="12">
                    <el-form-item label="文件名称" prop="name">
                      <el-input
                        v-model="reorganizeForm.info.name"
                        placeholder="请输入文件名称"
                        maxlength="20"
                        show-word-limit
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="库存位置">
                      <el-input
                        v-model="reorganizeForm.info.inventoryLcation"
                        placeholder="请输入库存位置"
                        clearable
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row v-show="currentTab === 'base'">
                  <el-col :span="12">
                    <el-form-item label="成文日期">
                      <el-date-picker
                        style="width: 100%"
                        v-model="reorganizeForm.info.writeDate"
                        value-format="YYYY-MM-DD HH:mm:ss"
                        type="datetime"
                        placeholder="请选择成文日期"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="保管期限(年)">
                      <el-input
                        type="number"
                        v-model="reorganizeForm.info.retentionPeriod"
                        placeholder="请输入保管期限"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row v-show="currentTab === 'base'">
                  <el-col :span="12">
                    <el-form-item label="密级">
                      <el-select
                        style="width: 100%"
                        v-model="reorganizeForm.info.securityClassification"
                        placeholder="请选择密级"
                      >
                        <el-option label="无" :value="Number(0)" />
                        <el-option label="秘密" :value="Number(1)" />
                        <el-option label="机密" :value="Number(2)" />
                        <el-option label="绝密" :value="Number(3)" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="总页数">
                      <el-input
                        type="number"
                        v-model="reorganizeForm.info.totalPages"
                        placeholder="请输入总页数"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item
                  v-show="currentTab === 'base'"
                  label="备注"
                  style="margin-bottom: 0"
                >
                  <el-input
                    type="textarea"
                    :rows="3"
                    placeholderName="请输入备注"
                    v-model="reorganizeForm.info.remark"
                  />
                </el-form-item>
                <div class="meta-info" v-show="currentTab === 'meta'">
                  <el-col :span="12" :offset="6">
                    <el-card class="archive-card">
                      <el-form-item label="载体形式" label-width="70px">
                        <SelectMore
                          style="width: 100%"
                          :isMultiple="false"
                          v-model:selectedData="reorganizeForm.info.formatType"
                          :apiMethodName="dictionaryManage.getCarrierTypeList"
                          desc="name"
                          placeholderName="载体形式"
                        />
                      </el-form-item>
                    </el-card>
                  </el-col>
                  <el-scrollbar
                    max-height="400px"
                    wrap-class="scrollbar-wrapper"
                  >
                    <el-row>
                      <el-col
                        :span="12"
                        v-for="(item, index) in metaList"
                        :key="index"
                      >
                        <el-form-item :label="item.name" label-width="120px">
                          <el-input
                            v-model="item.metaValue"
                            :placeholder="'请输入' + item.name"
                            clearable
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-scrollbar>
                </div>
                <div class="menu-info" v-show="currentTab === 'menu'">
                  <el-col :span="12" :offset="6">
                    <el-card class="archive-card">
                      <el-form-item label="文件类别" label-width="70px">
                        <el-select
                          style="width: 100%"
                          value-key="id"
                          v-model="reorganizeForm.info.archiveType"
                          placeholder="请选择文件类别"
                          @change="selectedChange"
                        >
                          <el-option
                            v-for="item in archiveTypeList"
                            :key="item.id"
                            :label="item.name"
                            :value="item"
                          />
                        </el-select>
                      </el-form-item>
                    </el-card>
                  </el-col>
                  <el-row>
                    <el-col :span="12">
                      <el-scrollbar
                        max-height="400px"
                        wrap-class="scrollbar-wrapper"
                      >
                        <div class="catalog-list">
                          <ul class="infinite-list">
                            <li
                              v-for="item in multipleSelection"
                              :key="item.id"
                              class="infinite-list-item"
                              @click="toggleTreeNode(item)"
                            >
                              <label
                                v-if="
                                  allTreeData.findIndex(
                                    (itm: any) => String(itm.id) === String(item.id)
                                  ) !== -1
                                "
                              >
                                <el-icon><Select /></el-icon>
                              </label>
                              {{ item.name }}
                            </li>
                          </ul>
                        </div>
                      </el-scrollbar>
                    </el-col>
                    <el-col :span="12">
                      <el-scrollbar
                        max-height="400px"
                        wrap-class="scrollbar-wrapper"
                      >
                        <el-tree
                          v-if="relatedTreeData.length"
                          style="padding-right: 10px"
                          :data="relatedTreeData"
                          :expand-on-click-node="false"
                          draggable
                          :allow-drop="allowDrop"
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
                                color="#F56C6C"
                                v-if="!data.children"
                              >
                                <Document />
                              </el-icon>
                              <span
                                class="title-name fl"
                                :title="data.name"
                                style="width: calc(100% - 45px)"
                              >
                                {{ data.name }}
                              </span>
                              <el-icon
                                v-if="currentTreeId === data.id"
                                title="删除文件"
                                class="fr"
                                color="#f56c6c"
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
                  </el-row>
                </div>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- <el-tree :data="treeData" draggable default-expand-all node-key="id" /> -->
      <template #footer>
        <el-button @click="reorganizeForm.visible = false">取 消</el-button>
        <el-button type="primary" @click="saveReorganize(reorganizeRef)"
          >保 存</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.archive-table {
  height: 100%;

  .collapse-form {
    text-align: center;
    border: 2px dashed #dcdfe6;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .container {
    padding: 20px 20px 10px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 5px;

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
.archive-table {
  .search-form-inline {
    padding: 12px;

    .el-form-item {
      margin-right: 12px;
      margin-bottom: 0;

      .el-form-item__label {
        height: 30px;
        line-height: 30px;
      }
    }
  }

  .el-card {
    height: 100%;

    .el-card__body {
      height: 100%;
      padding-bottom: 10px;
    }

    &.archive-card {
      height: auto;
      margin-bottom: 10px;

      .el-card__body {
        height: auto;
        padding: 10px;

        .el-form-item {
          margin-bottom: 0;
        }
      }
    }
  }

  .reorganize-dialog {
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

          .el-icon {
            font-size: 16px;
            margin: 7px 4px;
          }
        }
      }
    }

    .arrow-btn {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);

      .el-icon {
        font-size: 30px;
        color: #409eff;
      }
    }

    .tab-section {
      display: flex;
      height: 100%;
      border: 1px solid #dcdfe6;
      border-radius: 4px;

      .tab-list {
        width: 200px;
        height: 100%;

        .tab-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100% / 3);
          font-size: 18px;
          border-bottom: 1px solid #dcdfe6;
          background: #f4f4f5;
          color: #909399;
          cursor: pointer;

          &:last-child {
            border-bottom: none;
          }

          &.current-tab {
            background: #fff;
            color: #409eff;
          }
        }
      }

      .tab-content {
        flex: 1;
        padding: 15px;
      }
    }

    .catalog-list {
      padding-right: 10px;

      .infinite-list {
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
    }
  }
}
</style>
