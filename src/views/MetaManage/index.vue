<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import SelectMore from '@/components/SelectMore/index.vue'
import { metaManage } from '@/api'

const metaQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const metaTotalCount = ref(0)
const metaFormQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const metaFormTotalCount = ref(0)
const metaLoding = ref(false)
const metaFormLoding = ref(false)
const metaTableData = ref([])
const metaFormTableData = ref([])
const metaRef = ref<FormInstance>()
const metaFormRef = ref<FormInstance>()
const metaForm = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    key: '',
    desc: '',
  },
})
const metaRules = reactive<FormRules>({
  key: [{ required: true, message: '元数据键值不能为空', trigger: 'blur' }],
  desc: [{ required: true, message: '元数据名称不能为空', trigger: 'blur' }],
})
const metaFormRules = reactive<FormRules>({
  name: [{ required: true, message: '表单名称不能为空', trigger: 'blur' }],
  metas: [{ required: true, message: '关联元数据不能为空', trigger: 'change' }],
})
const metaFormData = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    name: '',
    metas: [],
  },
})
// 获取元数据列表
const getMetaList = () => {
  metaLoding.value = true
  const param = {
    params: metaQuery,
  }
  metaManage.getMetaList(param).then((res: any) => {
    if (res.success) {
      metaTableData.value = res.data.records
      metaQuery.index = res.data.pageIndex
      metaQuery.size = res.data.pageSize
      metaTotalCount.value = res.data.totalCount
      metaLoding.value = false
    }
  })
}
// 元数据查询
const metaHandleSearch = () => {
  metaQuery.index = 1
  metaQuery.size = 20
  getMetaList()
}
// 分页
const metaPageChange = (val: number) => {
  metaQuery.index = val
  getMetaList()
}
const metaSizeChange = (val: number) => {
  metaQuery.size = val
  getMetaList()
}
// 重置元数据
const resetMeta = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑元数据
const addEditMeta = (val: boolean, row?: any) => {
  metaForm.isAdd = val
  metaForm.form = row ? { ...row } : {}
  metaForm.dialog = true
  resetMeta(metaRef.value)
}
// 删除元数据
const deleteMeta = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.desc}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      metaManage.deleteMeta(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getMetaList()
        }
      })
    })
    .catch(() => {})
}
// 保存元数据
const saveMeta = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (metaForm.isAdd) {
        // 新增
        param = {
          id: 0,
          key: metaForm.form.key,
          desc: metaForm.form.desc,
        }
        metaManage.addMeta(param).then((res: any) => {
          if (res.success) {
            metaForm.dialog = false
            getMetaList()
          }
        })
      } else {
        // 编辑
        param = {
          id: metaForm.form.id,
          key: metaForm.form.key,
          desc: metaForm.form.desc,
        }
        metaManage.updateMeta(metaForm.form.id, param).then((res: any) => {
          if (res.success) {
            metaForm.dialog = false
            getMetaList()
          }
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 获取元数据表单列表
const getMetaFormList = () => {
  metaFormLoding.value = true
  const param = {
    params: metaFormQuery,
  }
  metaManage.getMetaFormList(param).then((res: any) => {
    if (res.success) {
      metaFormTableData.value = res.data.records
      metaFormQuery.index = res.data.pageIndex
      metaFormQuery.size = res.data.pageSize
      metaFormTotalCount.value = res.data.totalCount
      metaFormLoding.value = false
    }
  })
}
// 元数据表单查询
const metaFormHandleSearch = () => {
  metaFormQuery.index = 1
  metaFormQuery.size = 20
  getMetaFormList()
}
// 分页
const metaFormPageChange = (val: number) => {
  metaFormQuery.index = val
  getMetaFormList()
}
const metaFormSizeChange = (val: number) => {
  metaFormQuery.size = val
  getMetaFormList()
}
// 重置元数据表单
const resetMetaForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑元数据表单
const addEditMetaForm = (val: boolean, row?: any) => {
  metaFormData.isAdd = val
  metaFormData.form = row ? { ...row } : {}
  metaFormData.form.metas = metaFormData.form.metas
    ? metaFormData.form.metas
    : []
  metaFormData.dialog = true
  resetMetaForm(metaFormRef.value)
}
// 删除元数据表单
const deleteMetaForm = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      metaManage.deleteMetaForm(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getMetaFormList()
        }
      })
    })
    .catch(() => {})
}
// 保存元数据表单
const saveMetaForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (metaFormData.isAdd) {
        // 新增
        param = {
          id: 0,
          name: metaFormData.form.name,
          metas: metaFormData.form.metas,
        }
        metaManage.addMetaForm(param).then((res: any) => {
          if (res.success) {
            metaFormData.dialog = false
            getMetaFormList()
          }
        })
      } else {
        // 编辑
        param = {
          id: metaFormData.form.id,
          name: metaFormData.form.name,
          metas: metaFormData.form.metas,
        }
        metaManage
          .updateMetaForm(metaFormData.form.id, param)
          .then((res: any) => {
            if (res.success) {
              metaFormData.dialog = false
              getMetaFormList()
            }
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
onBeforeMount(() => {
  getMetaList()
  getMetaFormList()
})
</script>

<template>
  <div class="meta-manage">
    <el-tabs type="border-card">
      <el-tab-pane label="元数据">
        <div class="search-section clearfix">
          <el-button type="primary" class="fl" @click="addEditMeta(true)">
            <el-icon><Coin /></el-icon>新建
          </el-button>
          <el-input
            v-model="metaQuery.term"
            placeholder="请输入元数据名称"
            class="fr"
            clearable
            @keyup.enter="metaHandleSearch"
          >
            <template #append>
              <el-button @click="metaHandleSearch">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <el-table
          :loading="metaLoding"
          :data="metaTableData"
          stripe
          height="calc(100% - 92px)"
        >
          <el-table-column prop="key" label="元数据键值" />
          <el-table-column prop="desc" label="元数据名称" />
          <el-table-column label="操作" width="240">
            <template #default="scope">
              <span
                @click.prevent="addEditMeta(false, scope.row)"
                class="operate-btn"
              >
                <el-icon color="#409EFF"><EditPen /></el-icon>编辑
              </span>
              <span @click.prevent="deleteMeta(scope.row)" class="operate-btn">
                <el-icon color="#F56C6C"><Delete /></el-icon>删除
              </span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="metaQuery.index"
          :page-size="metaQuery.size"
          :total="metaTotalCount"
          @size-change="metaSizeChange"
          @current-change="metaPageChange"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="元数据表单">
        <div class="search-section clearfix">
          <el-button type="primary" class="fl" @click="addEditMetaForm(true)">
            <el-icon><Tickets /></el-icon>新建
          </el-button>
          <el-input
            v-model="metaFormQuery.term"
            placeholder="请输入表单名称"
            class="fr"
            clearable
            @keyup.enter="metaFormHandleSearch"
          >
            <template #append>
              <el-button @click="metaFormHandleSearch">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <el-table
          :loading="metaFormLoding"
          :data="metaFormTableData"
          stripe
          height="calc(100% - 92px)"
        >
          <el-table-column prop="name" label="表单名称" />
          <el-table-column prop="metas" label="关联元数据">
            <template #default="scope">
              <el-tag
                style="margin-right: 4px"
                v-for="item in scope.row.metas || []"
                :key="item.id"
                disable-transitions
              >
                {{ item.desc }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="240">
            <template #default="scope">
              <span
                @click.prevent="addEditMetaForm(false, scope.row)"
                class="operate-btn"
              >
                <el-icon color="#409EFF"><EditPen /></el-icon>编辑
              </span>
              <span
                @click.prevent="deleteMetaForm(scope.row)"
                class="operate-btn"
              >
                <el-icon color="#F56C6C"><Delete /></el-icon>删除
              </span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="metaFormQuery.index"
          :page-size="metaFormQuery.size"
          :total="metaFormTotalCount"
          @size-change="metaFormSizeChange"
          @current-change="metaFormPageChange"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
    <!-- 元数据弹框 -->
    <el-dialog
      v-model="metaForm.dialog"
      :title="metaForm.isAdd ? '新建元数据' : '编辑元数据'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="metaRef"
        :model="metaForm.form"
        :rules="metaRules"
        label-width="100px"
      >
        <el-form-item label="元数据键值" prop="key">
          <el-input
            v-model="metaForm.form.key"
            placeholder="请输入元数据键值"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="元数据名称" prop="desc">
          <el-input
            v-model="metaForm.form.desc"
            placeholder="请输入元数据名称"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="metaForm.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveMeta(metaRef)">保 存</el-button>
      </template>
    </el-dialog>
    <!-- 元数据表单弹框 -->
    <el-dialog
      v-model="metaFormData.dialog"
      :title="metaFormData.isAdd ? '新建元数据表单' : '编辑元数据表单'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="metaFormRef"
        :model="metaFormData.form"
        :rules="metaFormRules"
        label-width="100px"
      >
        <el-form-item label="表单名称" prop="name">
          <el-input
            v-model="metaFormData.form.name"
            placeholder="请输入表单名称"
          />
        </el-form-item>
        <el-form-item label="关联元数据" prop="metas">
          <SelectMore
            style="width: 100%"
            :isMultiple="true"
            v-model:selectedData="metaFormData.form.metas"
            :apiMethodName="metaManage.getMetaList"
            desc="desc"
            placeholderName="关联元数据"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="metaFormData.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveMetaForm(metaFormRef)"
          >保 存</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.meta-manage {
  height: 100%;

  .search-section {
    padding: 0 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.meta-manage {
  .el-tabs--border-card {
    height: 100%;
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
}
</style>
