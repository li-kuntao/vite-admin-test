<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { schemeConfig } from '@/api'

const catalogQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const catalogTotalCount = ref(0)
const catalogLoding = ref(false)
const catalogTableData = ref([])
const catalogRef = ref<FormInstance>()
const catalogRules = reactive<FormRules>({
  name: [{ required: true, message: '目录名称不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '目录编码不能为空', trigger: 'blur' }],
})
const catalogData = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    name: '',
    code: '',
  },
})
// 获取目录列表
const getCatalogList = () => {
  catalogLoding.value = true
  const param = {
    params: catalogQuery,
  }
  schemeConfig.getCatalogList(param).then((res: any) => {
    if (res.success) {
      catalogTableData.value = res.data.records
      catalogQuery.index = res.data.pageIndex
      catalogQuery.size = res.data.pageSize
      catalogTotalCount.value = res.data.totalCount
      catalogLoding.value = false
    }
  })
}
// 目录查询
const catalogHandleSearch = () => {
  catalogQuery.index = 1
  catalogQuery.size = 20
  getCatalogList()
}
// 分页
const catalogPageChange = (val: number) => {
  catalogQuery.index = val
  getCatalogList()
}
const catalogSizeChange = (val: number) => {
  catalogQuery.size = val
  getCatalogList()
}
// 重置目录
const resetCatalog = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑目录
const addEditCatalog = (val: boolean, row: any) => {
  catalogData.isAdd = val
  catalogData.form = { ...row }
  catalogData.dialog = true
  resetCatalog(catalogRef.value)
}
// 删除目录
const deleteCatalog = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      schemeConfig.deleteCatalog(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getCatalogList()
        }
      })
    })
    .catch(() => {})
}
// 保存目录
const saveCatalog = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (catalogData.isAdd) {
        // 新增
        param = {
          id: 0,
          name: catalogData.form.name,
          code: catalogData.form.code,
        }
        schemeConfig.addCatalog(param).then((res: any) => {
          if (res.success) {
            catalogData.dialog = false
            getCatalogList()
          }
        })
      } else {
        // 编辑
        param = {
          id: catalogData.form.id,
          name: catalogData.form.name,
          code: catalogData.form.code,
        }
        schemeConfig
          .updateCatalog(catalogData.form.id, param)
          .then((res: any) => {
            if (res.success) {
              catalogData.dialog = false
              getCatalogList()
            }
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
onBeforeMount(() => {
  getCatalogList()
})
</script>
<template>
  <div class="catalog-manage">
    <el-card>
      <div class="search-section clearfix">
        <el-button
          type="primary"
          class="fl"
          @click="addEditCatalog(true, { metas: [] })"
        >
          <el-icon><Reading /></el-icon>新建
        </el-button>
        <el-input
          v-model="catalogQuery.term"
          placeholder="请输入目录名称"
          class="fr"
          clearable
          @keyup.enter="catalogHandleSearch"
        >
          <template #append>
            <el-button @click="catalogHandleSearch">
              <el-icon><Search /></el-icon>
            </el-button>
          </template>
        </el-input>
      </div>
      <el-table
        :loading="catalogLoding"
        :data="catalogTableData"
        stripe
        height="calc(100% - 92px)"
      >
        <el-table-column prop="name" label="目录名称" />
        <el-table-column prop="code" label="目录编码" />
        <el-table-column label="操作" width="240">
          <template #default="scope">
            <span
              @click.prevent="addEditCatalog(false, scope.row)"
              class="operate-btn"
            >
              <el-icon color="#409EFF"><EditPen /></el-icon>编辑
            </span>
            <span @click.prevent="deleteCatalog(scope.row)" class="operate-btn">
              <el-icon color="#F56C6C"><Delete /></el-icon>删除
            </span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="catalogQuery.index"
        :page-size="catalogQuery.size"
        :total="catalogTotalCount"
        @size-change="catalogSizeChange"
        @current-change="catalogPageChange"
      >
      </el-pagination>
    </el-card>
    <!-- 目录弹框 -->
    <el-dialog
      v-model="catalogData.dialog"
      :title="catalogData.isAdd ? '新建目录' : '编辑目录'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="catalogRef"
        :model="catalogData.form"
        :rules="catalogRules"
        label-width="100px"
      >
        <el-form-item label="目录名称" prop="name">
          <el-input
            v-model="catalogData.form.name"
            placeholder="请输入表单名称"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="目录编码" prop="code">
          <el-input
            v-model="catalogData.form.code"
            placeholder="请输入目录编码"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="catalogData.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveCatalog(catalogRef)"
          >保 存</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.catalog-manage {
  height: 100%;

  .search-section {
    padding: 0 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.catalog-manage {
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
}
</style>
