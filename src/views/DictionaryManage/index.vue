<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import SelectMore from '@/components/SelectMore/index.vue'
import { dictionaryManage, schemeConfig, codeManage, metaManage } from '@/api'

const archieveTypeQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const archieveTypeTotalCount = ref(0)
const carrierTypeQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const carrierTypeTotalCount = ref(0)
const archieveTypeLoding = ref(false)
const carrierTypeLoding = ref(false)
const archieveTypeTableData = ref([])
const carrierTypeTableData = ref([])
const archieveTypeRef = ref<FormInstance>()
const carrierTypeRef = ref<FormInstance>()
const archieveType: Record<string, any> = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    name: '',
    catalogScheme: null,
    archiveCodeRule: null,
  },
})
const archieveTypeRules = reactive<FormRules>({
  name: [{ required: true, message: '类别名称不能为空', trigger: 'blur' }],
  catalogScheme: [
    { required: true, message: '关联目录方案不能为空', trigger: 'change' },
  ],
  archiveCodeRule: [
    { required: true, message: '关联编码规则不能为空', trigger: 'change' },
  ],
})
const carrierTypeRules = reactive<FormRules>({
  name: [{ required: true, message: '载体形式名称不能为空', trigger: 'blur' }],
  metaForm: [
    { required: true, message: '关联元数据表单不能为空', trigger: 'change' },
  ],
})
const carrierType: Record<string, any> = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    name: '',
    metaForm: null,
  },
})
// 获取档案类别列表
const getArchieveTypeList = () => {
  archieveTypeLoding.value = true
  const param = {
    params: archieveTypeQuery,
  }
  dictionaryManage.getArchieveTypeList(param).then((res: any) => {
    if (res.success) {
      archieveTypeTableData.value = res.data.records
      archieveTypeQuery.index = res.data.pageIndex
      archieveTypeQuery.size = res.data.pageSize
      archieveTypeTotalCount.value = res.data.totalCount
      archieveTypeLoding.value = false
    }
  })
}
// 档案类别查询
const archieveTypeHandleSearch = () => {
  archieveTypeQuery.index = 1
  archieveTypeQuery.size = 20
  getArchieveTypeList()
}
// 分页
const archieveTypePageChange = (val: number) => {
  archieveTypeQuery.index = val
  getArchieveTypeList()
}
const archieveTypeSizeChange = (val: number) => {
  archieveTypeQuery.size = val
  getArchieveTypeList()
}
// 重置档案类别
const resetArchieveType = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑档案类别
const addEditArchieveType = (val: boolean, row?: any) => {
  archieveType.isAdd = val
  // for (const key in archieveType.form) {
  //   if (key) {
  //     archieveType.form[key] = row ? row[key] : ''
  //   }
  // }
  archieveType.form = row ? { ...row } : {}
  archieveType.dialog = true
  resetArchieveType(archieveTypeRef.value)
}
// 删除档案类别
const deleteArchieveType = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.desc}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      dictionaryManage.deleteArchieveType(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getArchieveTypeList()
        }
      })
    })
    .catch(() => {})
}
// 保存档案类别
const saveArchieveType = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (archieveType.isAdd) {
        // 新增
        param = {
          id: 0,
          name: archieveType.form.name,
          catalogScheme: archieveType.form.catalogScheme,
          archiveCodeRule: archieveType.form.archiveCodeRule,
        }
        dictionaryManage.addArchieveType(param).then((res: any) => {
          if (res.success) {
            archieveType.dialog = false
            getArchieveTypeList()
          }
        })
      } else {
        // 编辑
        param = {
          id: archieveType.form.id,
          name: archieveType.form.name,
          catalogScheme: archieveType.form.catalogScheme,
          archiveCodeRule: archieveType.form.archiveCodeRule,
        }
        dictionaryManage
          .updateArchieveType(archieveType.form.id, param)
          .then((res: any) => {
            if (res.success) {
              archieveType.dialog = false
              getArchieveTypeList()
            }
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 获取载体形式列表
const getCarrierTypeList = () => {
  carrierTypeLoding.value = true
  const param = {
    params: carrierTypeQuery,
  }
  dictionaryManage.getCarrierTypeList(param).then((res: any) => {
    if (res.success) {
      carrierTypeTableData.value = res.data.records
      carrierTypeQuery.index = res.data.pageIndex
      carrierTypeQuery.size = res.data.pageSize
      carrierTypeTotalCount.value = res.data.totalCount
      carrierTypeLoding.value = false
    }
  })
}
// 载体形式查询
const carrierTypeHandleSearch = () => {
  carrierTypeQuery.index = 1
  carrierTypeQuery.size = 20
  getCarrierTypeList()
}
// 分页
const carrierTypePageChange = (val: number) => {
  carrierTypeQuery.index = val
  getCarrierTypeList()
}
const carrierTypeSizeChange = (val: number) => {
  carrierTypeQuery.size = val
  getCarrierTypeList()
}
// 重置载体形式
const resetCarrierType = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑载体形式
const addEditCarrierType = (val: boolean, row?: any) => {
  carrierType.isAdd = val
  // for (const key in carrierType.form) {
  //   if (key) {
  //     carrierType.form[key] = row ? row[key] : ''
  //   }
  // }
  carrierType.form = row ? { ...row } : {}
  carrierType.dialog = true
  resetCarrierType(carrierTypeRef.value)
}
// 删除载体形式
const deleteCarrierType = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      dictionaryManage.deleteCarrierType(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getCarrierTypeList()
        }
      })
    })
    .catch(() => {})
}
// 保存载体形式
const saveCarrierType = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (carrierType.isAdd) {
        // 新增
        param = {
          id: 0,
          name: carrierType.form.name,
          metaForm: carrierType.form.metaForm,
        }
        dictionaryManage.addCarrierType(param).then((res: any) => {
          if (res.success) {
            carrierType.dialog = false
            getCarrierTypeList()
          }
        })
      } else {
        // 编辑
        param = {
          id: carrierType.form.id,
          name: carrierType.form.name,
          metaForm: carrierType.form.metaForm,
        }
        dictionaryManage
          .updateCarrierType(carrierType.form.id, param)
          .then((res: any) => {
            if (res.success) {
              carrierType.dialog = false
              getCarrierTypeList()
            }
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
onBeforeMount(() => {
  getArchieveTypeList()
  getCarrierTypeList()
})
</script>

<template>
  <div class="dictionary-manage">
    <el-tabs type="border-card">
      <el-tab-pane label="档案类别">
        <div class="search-section clearfix">
          <el-button
            type="primary"
            class="fl"
            @click="addEditArchieveType(true)"
          >
            <el-icon><Coin /></el-icon>新建
          </el-button>
          <el-input
            v-model="archieveTypeQuery.term"
            placeholder="请输入档案类别名称"
            class="fr"
            clearable
            @keyup.enter="archieveTypeHandleSearch"
          >
            <template #append>
              <el-button @click="archieveTypeHandleSearch">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <el-table
          :loading="archieveTypeLoding"
          :data="archieveTypeTableData"
          stripe
          height="calc(100% - 92px)"
        >
          <el-table-column prop="name" label="档案类别名称" />
          <el-table-column label="关联方案目录">
            <template #default="scope">
              <el-tag v-if="scope.row.catalogScheme">
                {{ scope.row.catalogScheme.name }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="关联编码规则">
            <template #default="scope">
              <el-tag v-if="scope.row.archiveCodeRule">
                {{ scope.row.archiveCodeRule.name }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="240">
            <template #default="scope">
              <span
                @click.prevent="addEditArchieveType(false, scope.row)"
                class="operate-btn"
              >
                <el-icon color="#409EFF"><EditPen /></el-icon>编辑
              </span>
              <span
                @click.prevent="deleteArchieveType(scope.row)"
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
          :current-page="archieveTypeQuery.index"
          :page-size="archieveTypeQuery.size"
          :total="archieveTypeTotalCount"
          @size-change="archieveTypeSizeChange"
          @current-change="archieveTypePageChange"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="载体形式">
        <div class="search-section clearfix">
          <el-button
            type="primary"
            class="fl"
            @click="addEditCarrierType(true)"
          >
            <el-icon><Tickets /></el-icon>新建
          </el-button>
          <el-input
            v-model="carrierTypeQuery.term"
            placeholder="请输入载体形式名称"
            class="fr"
            clearable
            @keyup.enter="carrierTypeHandleSearch"
          >
            <template #append>
              <el-button @click="carrierTypeHandleSearch">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <el-table
          :loading="carrierTypeLoding"
          :data="carrierTypeTableData"
          stripe
          height="calc(100% - 92px)"
        >
          <el-table-column prop="name" label="载体形式名称" />
          <el-table-column label="关联元数据表单">
            <template #default="scope">
              <el-tag v-if="scope.row.metaForm">
                {{ scope.row.metaForm.name }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="240">
            <template #default="scope">
              <span
                @click.prevent="addEditCarrierType(false, scope.row)"
                class="operate-btn"
              >
                <el-icon color="#409EFF"><EditPen /></el-icon>编辑
              </span>
              <span
                @click.prevent="deleteCarrierType(scope.row)"
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
          :current-page="carrierTypeQuery.index"
          :page-size="carrierTypeQuery.size"
          :total="carrierTypeTotalCount"
          @size-change="carrierTypeSizeChange"
          @current-change="carrierTypePageChange"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
    <!-- 档案类别弹框 -->
    <el-dialog
      v-model="archieveType.dialog"
      :title="archieveType.isAdd ? '新建档案类别' : '编辑档案类别'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="archieveTypeRef"
        :model="archieveType.form"
        :rules="archieveTypeRules"
        label-width="120px"
      >
        <el-form-item label="类别名称" prop="name">
          <el-input
            v-model="archieveType.form.name"
            placeholder="请输入类别名称"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="关联方案目录" prop="catalogScheme">
          <SelectMore
            :isMultiple="false"
            v-model:selectedData="archieveType.form.catalogScheme"
            :apiMethodName="schemeConfig.getSchemeList"
            desc="name"
            placeholderName="关联方案目录"
          />
        </el-form-item>
        <el-form-item label="关联编码规则" prop="archiveCodeRule">
          <SelectMore
            :isMultiple="false"
            v-model:selectedData="archieveType.form.archiveCodeRule"
            :apiMethodName="codeManage.getCodeRuleList"
            desc="name"
            placeholderName="关联编码规则"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="archieveType.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveArchieveType(archieveTypeRef)"
          >保 存</el-button
        >
      </template>
    </el-dialog>
    <!-- 载体形式弹框 -->
    <el-dialog
      v-model="carrierType.dialog"
      :title="carrierType.isAdd ? '新建载体形式' : '编辑载体形式'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="carrierTypeRef"
        :model="carrierType.form"
        :rules="carrierTypeRules"
        label-width="120px"
      >
        <el-form-item label="载体形式名称" prop="name">
          <el-input
            v-model="carrierType.form.name"
            placeholder="请输入载体形式名称"
          />
        </el-form-item>
        <el-form-item label="关联元数据表单" prop="metaForm">
          <SelectMore
            :isMultiple="false"
            v-model:selectedData="carrierType.form.metaForm"
            :apiMethodName="metaManage.getMetaFormList"
            placeholderName="关联元数据表单"
            desc="name"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="carrierType.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveCarrierType(carrierTypeRef)"
          >保 存</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.dictionary-manage {
  height: 100%;

  .search-section {
    padding: 0 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.dictionary-manage {
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
