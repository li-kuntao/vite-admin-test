<script lang="ts" setup>
import { ref, reactive, onBeforeMount, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { codeManage } from '@/api'

const codeQuery = reactive({
  term: '',
  index: 1,
  size: 20,
})
const elementList = [
  { elementField: 0, name: '固定值', constantValue: '', dateFormat: '' },
  { elementField: 1, name: '自增值', constantValue: '', dateFormat: '' },
  { elementField: 2, name: '保存期限', constantValue: '', dateFormat: '' },
  { elementField: 3, name: '创建时间', constantValue: '', dateFormat: '' },
  { elementField: 4, name: '创建人账号', constantValue: '', dateFormat: '' },
  { elementField: 5, name: '所属部门编号', constantValue: '', dateFormat: '' },
  { elementField: 6, name: '全宗编号', constantValue: '', dateFormat: '' },
]
const codeTotalCount = ref(0)
const codeLoding = ref(false)
const codeTableData = ref([])
const codeRef = ref<FormInstance>()
const codeRules = reactive<FormRules>({
  name: [{ required: true, message: '规则名称不能为空', trigger: 'blur' }],
  elements: [
    { required: true, message: '关联元素不能为空', trigger: 'change' },
  ],
})
const codeData = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: 0,
    name: '',
    elements: [],
  },
})
const tagName = computed(() => (val: number) => {
  const nameIndex = elementList.findIndex(
    (itm: any) => itm.elementField === val
  )
  return elementList[nameIndex].name
})
// 获取规则列表
const getCodeList = () => {
  codeLoding.value = true
  const param = {
    params: codeQuery,
  }
  codeManage.getCodeRuleList(param).then((res: any) => {
    if (res.success) {
      codeTableData.value = res.data.records
      codeQuery.index = res.data.pageIndex
      codeQuery.size = res.data.pageSize
      codeTotalCount.value = res.data.totalCount
      codeLoding.value = false
    }
  })
}
// 规则查询
const codeHandleSearch = () => {
  codeQuery.index = 1
  codeQuery.size = 20
  getCodeList()
}
// 分页
const codePageChange = (val: number) => {
  codeQuery.index = val
  getCodeList()
}
const codeSizeChange = (val: number) => {
  codeQuery.size = val
  getCodeList()
}
// 重置规则
const resetCode = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 新增、编辑规则
const addEditCode = (val: boolean, row?: any) => {
  codeData.isAdd = val
  codeData.form = row ? { ...row } : {}
  codeData.form.elements = codeData.form.elements ? codeData.form.elements : []
  codeData.dialog = true
  resetCode(codeRef.value)
}
// 删除规则
const deleteCode = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      codeManage.deleteCodeRule(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getCodeList()
        }
      })
    })
    .catch(() => {})
}
// 保存规则
const saveCode = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (codeData.isAdd) {
        // 新增
        param = {
          id: 0,
          name: codeData.form.name,
          elements: codeData.form.elements,
        }
        codeManage.addCodeRule(param).then((res: any) => {
          if (res.success) {
            codeData.dialog = false
            getCodeList()
          }
        })
      } else {
        // 编辑
        param = {
          id: codeData.form.id,
          name: codeData.form.name,
          elements: codeData.form.elements,
        }
        codeManage.updateCodeRule(codeData.form.id, param).then((res: any) => {
          if (res.success) {
            codeData.dialog = false
            getCodeList()
          }
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
onBeforeMount(() => {
  getCodeList()
})
</script>
<template>
  <div class="code-manage">
    <el-card>
      <div class="search-section clearfix">
        <el-button type="primary" class="fl" @click="addEditCode(true)">
          <el-icon><Reading /></el-icon>新建
        </el-button>
        <el-input
          v-model="codeQuery.term"
          placeholder="请输入规则名称"
          class="fr"
          clearable
          @keyup.enter="codeHandleSearch"
        >
          <template #append>
            <el-button @click="codeHandleSearch">
              <el-icon><Search /></el-icon>
            </el-button>
          </template>
        </el-input>
      </div>
      <el-table
        :loading="codeLoding"
        :data="codeTableData"
        stripe
        height="calc(100% - 92px)"
      >
        <el-table-column prop="name" label="规则名称" />
        <el-table-column label="关联元素">
          <template #default="scope">
            <el-tag
              style="margin-right: 4px"
              v-for="item in scope.row.elements || []"
              :key="item.elementField"
              disable-transitions
            >
              {{ tagName(item.elementField) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="240">
          <template #default="scope">
            <span
              @click.prevent="addEditCode(false, scope.row)"
              class="operate-btn"
            >
              <el-icon color="#409EFF"><EditPen /></el-icon>编辑
            </span>
            <span @click.prevent="deleteCode(scope.row)" class="operate-btn">
              <el-icon color="#F56C6C"><Delete /></el-icon>删除
            </span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="codeQuery.index"
        :page-size="codeQuery.size"
        :total="codeTotalCount"
        @size-change="codeSizeChange"
        @current-change="codePageChange"
      >
      </el-pagination>
    </el-card>
    <!-- 规则弹框 -->
    <el-dialog
      v-model="codeData.dialog"
      :title="codeData.isAdd ? '新建规则' : '编辑规则'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form
        ref="codeRef"
        :model="codeData.form"
        :rules="codeRules"
        label-width="100px"
      >
        <el-form-item label="规则名称" prop="name">
          <el-input
            v-model="codeData.form.name"
            placeholder="请输入规则名称"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="关联元素" prop="elements">
          <el-select
            v-model="codeData.form.elements"
            multiple
            value-key="elementField"
            placeholder="请选择关联元素"
            style="width: 100%"
          >
            <el-option
              v-for="item in elementList"
              :key="item.elementField"
              :label="item.name"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="固定值"
          v-if="codeData.form.elements.findIndex((itm: any) => itm.elementField === 0) !== -1"
        >
          <el-input
            v-model="codeData.form.elements[codeData.form.elements.findIndex((itm: any) => itm.elementField === 0)]['constantValue']"
            placeholder="请输入固定值"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="日期格式"
          v-if="codeData.form.elements.findIndex((itm: any) => itm.elementField === 3) !== -1"
        >
          <el-input
            v-model="codeData.form.elements[codeData.form.elements.findIndex((itm: any) => itm.elementField === 0)]['dateFormat']"
            placeholder="请输入日期格式"
            clearable
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="codeData.dialog = false">取 消</el-button>
        <el-button type="primary" @click="saveCode(codeRef)">保 存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.code-manage {
  height: 100%;

  .search-section {
    padding: 0 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.code-manage {
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
