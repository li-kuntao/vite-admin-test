<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { ElTable, ElMessage, ElMessageBox } from 'element-plus'
import { useCommonStore } from '@/store/common'
// import { archiveTable } from '@/api'

const common = useCommonStore()
const router = useRouter()
const query = reactive({
  archiveName: '', // 文件名称
  pageIndex: 1,
  pageSize: 20,
  sort: '',
  isAsc: false,
})
const archiveTableData = ref([])
const totalCount = ref(0)
const loading = ref(false)
const isEdit = ref(false)
const multipleSelection = ref<[]>([])
const archiveTableRef = ref<InstanceType<typeof ElTable>>()
const archiveVisible = ref(false)
const reorganizeVisible = ref(false)
const treeData = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const searchForm: Record<string, string> = reactive({
  name: '',
  number: '',
  resourceType: '',
  type: '',
  status: '',
  depart: '',
  limit: '',
})
const archiveForm: Record<string, string | number> = reactive({
  name: '',
  resourceType: '',
  type: '',
  docNumber: '',
  createUser: '',
  createDateTime: '',
  year: '',
  fileCount: 0,
  remark: '',
})
// 检索预归档列表
const searchArchiveList = () => {
  loading.value = true
  // archiveTable.searchArchiveList(query).then((res: any) => {
  //   if (res.success) {
  //     archiveTableData.value = res.data.records
  //     query.pageIndex = res.data.pageIndex
  //     query.pageSize = res.data.pageSize
  //     totalCount.value = res.data.totalCount
  //     loading.value = false
  //   }
  // })
}
// 多选操作
const handleSelectionChange = (val: []) => {
  multipleSelection.value = val
}
// 清空多选
const clearSelectedVal = (rows?: []) => {
  if (rows) {
    rows.forEach((row) => {
      archiveTableRef.value!.toggleRowSelection(row, false)
    })
  } else {
    archiveTableRef.value!.clearSelection()
  }
}
// 查询操作
const handleSearch = () => {
  query.pageIndex = 1
  query.pageSize = 20
  searchArchiveList()
}
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val
  searchArchiveList()
}
const handleSizeChange = (val: number) => {
  query.pageSize = val
  searchArchiveList()
}
// 查看
const viewArchive = (row: any) => {
  sessionStorage.setItem(
    'currentUrlData',
    JSON.stringify({
      isExternal: false,
      name: 'DocDetail',
      meta: { title: '文档详情' },
      path: '/ArchiveTable/DocDetail',
    })
  )
  common.setUrlData({
    isExternal: false,
    name: 'DocDetail',
    meta: { title: '文档详情' },
    path: '/ArchiveTable/DocDetail',
  })
  router.push({
    path: '/ArchiveTable/DocDetail',
    query: {
      archiveId: row.id,
    },
  })
}
// 删除
const handleDelete = () => {
  // 二次确认删除
  ElMessageBox.confirm('确定要删除吗？', '提示', {
    type: 'warning',
  })
    .then(() => {
      ElMessage.success('删除成功')
    })
    .catch(() => {})
}
// 新增、编辑
const handleArchive = (addOrEdit: boolean, row: any) => {
  // console.log('row-===', row)
  isEdit.value = addOrEdit
  for (const key in archiveForm) {
    if (key) {
      archiveForm[key] = row[key]
    }
  }
  archiveVisible.value = true
}
// 保存
const saveArchive = () => {
  archiveVisible.value = false
  ElMessage.success('修改第行成功')
  // Object.keys(form).forEach((item) => {
  //   tableData.value[idx][item] = form[item]
  // })
}
// 批量删除
const batchDelete = () => {
  ElMessageBox.confirm('确认要批量删除此文件吗?', '批量删除', {
    confirmButtonText: '确 认',
    cancelButtonText: '取 消',
    type: 'error',
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '已删除完成',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
onBeforeMount(() => {
  searchArchiveList()
})
</script>

<template>
  <div class="archive-search">
    <el-card>
      <el-card class="search-card" style="height: 106px; margin-bottom: 15px">
        <el-form :model="searchForm">
          <el-row :gutter="10" style="margin-bottom: 12px">
            <el-col :span="6">
              <el-form-item label="文件名称">
                <el-input
                  v-model="searchForm.name"
                  placeholder="请输入文件名称"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="档案编号">
                <el-input
                  v-model="searchForm.number"
                  placeholder="请输入文件名称"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="档案类别">
                <el-select
                  style="width: 100%"
                  v-model="searchForm.resourceType"
                  placeholder="请选择档案类别"
                  clearable
                >
                  <el-option label="电子文件" value="1" />
                  <el-option label="OA上传" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="档案状态">
                <el-select
                  style="width: 100%"
                  v-model="searchForm.status"
                  placeholder="请选择档案状态"
                  clearable
                >
                  <el-option label="电子文件" value="1" />
                  <el-option label="OA上传" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="责任部门">
                <el-select
                  style="width: 100%"
                  v-model="searchForm.depart"
                  placeholder="请选择责任部门"
                  clearable
                >
                  <el-option label="电子文件" value="1" />
                  <el-option label="OA上传" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="保管期限">
                <el-select
                  style="width: 100%"
                  v-model="searchForm.limit"
                  placeholder="请选择保管期限"
                  clearable
                >
                  <el-option label="电子文件" value="1" />
                  <el-option label="OA上传" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="载体形式">
                <el-select
                  style="width: 100%"
                  v-model="searchForm.type"
                  placeholder="请选择载体形式"
                  clearable
                >
                  <el-option label="电子文件" value="1" />
                  <el-option label="OA上传" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <el-button type="primary" @click="handleSearch">查 询</el-button>
              <el-button type="info">重 置</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <el-tabs type="border-card" style="height: calc(100% - 121px)">
        <el-tab-pane label="文书档案（100）">
          <div class="container">
            <el-row style="margin-left: 10px">
              <el-button>
                <el-icon><Menu /></el-icon>导出
              </el-button>
              <el-button type="primary">
                <el-icon><Reading /></el-icon>借阅
              </el-button>
              <el-button type="danger" @click="batchDelete">
                <el-icon><Delete /></el-icon>批量删除
              </el-button>
            </el-row>
            <div class="selected-section">
              <el-icon><InfoFilled /></el-icon>
              已选择
              <span class="number">{{ multipleSelection.length }}</span>
              项
              <span class="clear" @click="clearSelectedVal()">清空</span>
            </div>
            <el-table
              ref="archiveTableRef"
              :data="archiveTableData"
              border
              stripe
              @selection-change="handleSelectionChange"
              height="calc(100% - 148px)"
            >
              <el-table-column type="selection" width="60" />
              <el-table-column prop="name" label="文档名称" />
              <el-table-column prop="resourceType" label="文件来源" />
              <el-table-column prop="code" label="文件编号" />
              <el-table-column prop="fileCount" label="文件数量" />
              <el-table-column prop="recordType" label="载体形式" />
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
              <el-table-column label="操作" width="240">
                <template #default="scope">
                  <el-button
                    size="small"
                    text
                    bg
                    type="primary"
                    @click="handleArchive(true, scope.row)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="success"
                    @click="viewArchive(scope.row)"
                  >
                    查看
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="danger"
                    @click="handleDelete"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
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
        </el-tab-pane>
        <el-tab-pane label="会计档案（132）">
          <div class="container">
            <el-row style="margin-left: 10px">
              <el-button>
                <el-icon><Menu /></el-icon>导出
              </el-button>
              <el-button type="primary">
                <el-icon><Reading /></el-icon>借阅
              </el-button>
              <el-button type="danger" @click="batchDelete">
                <el-icon><Delete /></el-icon>批量删除
              </el-button>
            </el-row>
            <div class="selected-section">
              <el-icon><InfoFilled /></el-icon>
              已选择
              <span class="number">{{ multipleSelection.length }}</span>
              项
              <span class="clear" @click="clearSelectedVal()">清空</span>
            </div>
            <el-table
              ref="archiveTableRef"
              :data="archiveTableData"
              border
              stripe
              @selection-change="handleSelectionChange"
              height="calc(100% - 148px)"
            >
              <el-table-column type="selection" width="60" />
              <el-table-column prop="name" label="文档名称" />
              <el-table-column prop="resourceType" label="文件来源" />
              <el-table-column prop="code" label="文件编号" />
              <el-table-column prop="fileCount" label="文件数量" />
              <el-table-column prop="recordType" label="载体形式" />
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
              <el-table-column label="操作" width="240">
                <template #default="scope">
                  <el-button
                    size="small"
                    text
                    bg
                    type="primary"
                    @click="handleArchive(true, scope.row)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="success"
                    @click="viewArchive(scope.row)"
                  >
                    查看
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="danger"
                    @click="handleDelete"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
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
        </el-tab-pane>
        <el-tab-pane label="资历档案（104）">
          <div class="container">
            <div style="margin-left: 10px">
              <el-button>
                <el-icon><Menu /></el-icon>导出
              </el-button>
              <el-button type="primary">
                <el-icon><Reading /></el-icon>借阅
              </el-button>
              <el-button type="danger" @click="batchDelete">
                <el-icon><Delete /></el-icon>批量删除
              </el-button>
            </div>
            <div class="selected-section">
              <el-icon><InfoFilled /></el-icon>
              已选择
              <span class="number">{{ multipleSelection.length }}</span>
              项
              <span class="clear" @click="clearSelectedVal()">清空</span>
            </div>
            <el-table
              ref="archiveTableRef"
              :data="archiveTableData"
              border
              stripe
              @selection-change="handleSelectionChange"
              height="calc(100% - 148px)"
            >
              <el-table-column type="selection" width="60" />
              <el-table-column prop="name" label="文档名称" />
              <el-table-column prop="resourceType" label="文件来源" />
              <el-table-column prop="code" label="文件编号" />
              <el-table-column prop="fileCount" label="文件数量" />
              <el-table-column prop="recordType" label="载体形式" />
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
              <el-table-column label="操作" width="240">
                <template #default="scope">
                  <el-button
                    size="small"
                    text
                    bg
                    type="primary"
                    @click="handleArchive(true, scope.row)"
                  >
                    编辑
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="success"
                    @click="viewArchive(scope.row)"
                  >
                    查看
                  </el-button>
                  <el-button
                    size="small"
                    text
                    bg
                    type="danger"
                    @click="handleDelete"
                  >
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
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
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 归档弹框 -->
    <el-dialog
      v-model="archiveVisible"
      :title="isEdit ? '编辑文件' : '新建文件'"
      width="40%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form :model="archiveForm" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="文件名称" prop="name">
              <el-input
                v-model="archiveForm.name"
                placeholder="请输入文件名称"
                maxlength="20"
                show-word-limit
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文件来源" prop="resourceType">
              <el-select
                style="width: 100%"
                v-model="archiveForm.resourceType"
                placeholder="请选择文件来源"
                clearable
              >
                <el-option label="电子文件" value="1" />
                <el-option label="OA上传" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="文件形式" prop="type">
              <el-select
                style="width: 100%"
                v-model="archiveForm.type"
                placeholder="请选择文件形式"
                clearable
              >
                <el-option label="纸质" value="1" />
                <el-option label="电子" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文件编号" prop="docNumber">
              <el-input
                v-model="archiveForm.docNumber"
                placeholder="请输入文件编号"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="创建人">
              <el-input
                v-model="archiveForm.createUser"
                placeholder="请输入创建人"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间">
              <el-date-picker
                style="width: 100%"
                v-model="archiveForm.createDateTime"
                type="datetime"
                placeholder="请选择创建时间"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="年度" prop="year">
              <el-date-picker
                style="width: 100%"
                v-model="archiveForm.year"
                type="year"
                placeholder="请选择年度"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="页数">
              <el-input
                type="number"
                v-model="archiveForm.fileCount"
                placeholder="请输入页数"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="备注">
          <el-input type="textarea" :rows="3" v-model="archiveForm.remark" />
        </el-form-item>
      </el-form>
      <el-upload
        class="upload-demo"
        drag
        :limit="50"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
      >
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div class="el-upload__text">
          将文件拖拽至此或点击添加（最多可添加50个文件）
        </div>
        <!-- <template #tip>
          <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template> -->
      </el-upload>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="archiveVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveArchive">保 存</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 整编弹框 -->
    <el-dialog
      v-model="reorganizeVisible"
      title="整编"
      width="40%"
      :close-on-click-modal="false"
      align-center
    >
      <el-tree :data="treeData" draggable default-expand-all node-key="id" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="reorganizeVisible = false">取 消</el-button>
          <el-button type="primary">保 存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.archive-search {
  height: 100%;

  .collapse-form {
    text-align: center;
    border: 2px dashed #dcdfe6;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .container {
    height: 100%;
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
.archive-search {
  .el-card {
    height: 100%;

    .el-card__body {
      height: 100%;
      padding: 10px;
    }

    &.search-card {
      .el-card__body {
        padding: 10px 20px;

        .el-form-item {
          margin-bottom: 0;
        }
      }
    }

    .el-tabs--border-card {
      border: none;
      box-shadow: 0 0 12px rgb(0 0 0 / 12%);

      .el-tabs__header {
        border-bottom-color: #f4f4f4;

        .el-tabs__item {
          border: none;
          margin-top: 2px;
          color: #606266;
          border-radius: 6px 6px 0 0;
          margin-right: 3px;

          &:hover {
            color: #909399;
          }

          &.is-active {
            color: #606266;
          }
        }
      }

      .el-tabs__content {
        height: calc(100% - 42px);
        padding-bottom: 10px;

        .el-tab-pane {
          height: 100%;
        }
      }
    }
  }
}
</style>
