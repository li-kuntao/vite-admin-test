<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import SelectMore from '@/components/SelectMore/index.vue'
import { generalManage, dictionaryManage } from '@/api'

const isSort = ref(false)
const ruleFormRef = ref<FormInstance>()
const ruleForm: Record<string, any> = reactive({
  isAdd: false,
  form: {
    id: '',
    name: '',
    code: '',
    icon: '',
    parentId: '',
    // sort: '',
    archiveTypes: [],
  },
})
const rules = reactive<FormRules>({
  name: [{ required: true, message: '全宗名称不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '全宗编码不能为空', trigger: 'blur' }],
  archiveTypes: [
    { required: true, message: '关联档案类别不能为空', trigger: 'change' },
  ],
})
interface Tree {
  id: number
  name: string
  children?: Tree[]
}
const currentGenaralId = ref(0)
const treeData = ref<Tree[]>([])
// 获取全宗树结构
const getGeneralTree = () => {
  generalManage.getGeneralTree().then((res: any) => {
    if (res.success) {
      treeData.value = [...res.data]
    }
  })
}
// 切换全宗排序
const toggleTreeSort = () => {
  if (isSort.value) {
    generalManage.updateGeneralTree(treeData.value).then((res: any) => {
      if (res.success) {
        isSort.value = false
        ElMessage.success(res.message)
      }
    })
  } else {
    isSort.value = true
  }
}
// 重置规则
const resetCode = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 点击全宗树节点
const handleNodeClick = (data: Tree) => {
  currentGenaralId.value = data.id
  ruleForm.isAdd = false
  generalManage.getGeneral(data.id).then((res: any) => {
    if (res.success) {
      // for (const key in ruleForm.form) {
      //   if (key) {
      //     ruleForm.form[key] = res.data[key]
      //   }
      // }
      ruleForm.form = { ...res.data }
      resetCode(ruleFormRef.value)
    }
  })
}
// 添加全宗
const addGeneral = (val: any) => {
  ruleForm.isAdd = true
  // for (const key in ruleForm.form) {
  //   if (key) {
  //     ruleForm.form[key] = key === 'archiveTypes' ? [] : ''
  //   }
  // }
  ruleForm.form = {}
  ruleForm.form.id = 0
  ruleForm.form.parentId = val.id
  resetCode(ruleFormRef.value)
}
// 删除全宗
const deleteGeneral = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      generalManage.deleteGeneral(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getGeneralTree()
        }
      })
    })
    .catch(() => {})
}
// 保存
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      let param = {}
      if (ruleForm.isAdd) {
        // 新增
        param = {
          id: '0',
          name: ruleForm.form.name,
          code: ruleForm.form.code,
          parentId: ruleForm.form.parentId,
          archiveTypes: ruleForm.form.archiveTypes,
        }
        generalManage.addGeneral(param).then((res: any) => {
          if (res.success) {
            getGeneralTree()
          }
        })
      } else {
        // 编辑
        param = {
          id: ruleForm.form.id,
          name: ruleForm.form.name,
          code: ruleForm.form.code,
          parentId: ruleForm.form.parentId,
          archiveTypes: ruleForm.form.archiveTypes,
        }
        generalManage
          .updateGeneral(ruleForm.form.id, param)
          .then((res: any) => {
            if (res.success) {
              getGeneralTree()
            }
          })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
onBeforeMount(() => {
  getGeneralTree()
})
</script>

<template>
  <div class="general-manage">
    <el-card>
      <el-row :gutter="10">
        <el-col :span="5">
          <el-card class="tree-card">
            <div class="tree-head clearfix">
              <span class="font-16 fl">全宗列表</span>
              <el-button
                class="fr"
                :type="isSort ? 'primary' : 'info'"
                size="small"
                text
                bg
                @click="toggleTreeSort"
                :disabled="!treeData.length"
              >
                {{ isSort ? '保存' : '排序' }}
              </el-button>
            </div>
            <div class="tree-list">
              <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
                <el-tree
                  v-if="treeData.length"
                  :data="treeData"
                  :expand-on-click-node="false"
                  :draggable="isSort"
                  default-expand-all
                  highlight-current
                  node-key="id"
                  @node-click="handleNodeClick"
                >
                  <template #default="{ data }">
                    <span class="custom-tree-node clearfix">
                      <span class="title-name fl" :title="data.name">{{
                        data.name
                      }}</span>
                      <el-icon
                        v-if="currentGenaralId === data.id"
                        @click.stop="addGeneral(data)"
                        title="添加全宗"
                        class="fr"
                        style="color: #67c23a"
                      >
                        <CirclePlus />
                      </el-icon>
                      <el-icon
                        v-if="currentGenaralId === data.id"
                        @click.stop="deleteGeneral(data)"
                        title="删除全宗"
                        class="fr"
                        style="color: #f56c6c"
                      >
                        <Remove />
                      </el-icon>
                    </span>
                  </template>
                </el-tree>
                <el-empty v-else description="暂无关联全宗数据" />
              </el-scrollbar>
            </div>
          </el-card>
        </el-col>
        <el-col :span="19">
          <el-card class="form-card">
            <el-form
              style="width: 50%"
              ref="ruleFormRef"
              :model="ruleForm.form"
              :rules="rules"
              label-width="120px"
            >
              <el-row>
                <el-col :span="12">
                  <el-form-item label="全宗名称" prop="name">
                    <el-input
                      v-model="ruleForm.form.name"
                      palceholder="请输入全宗名称"
                      maxlength="32"
                      show-word-limit
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="全宗编码" prop="code">
                    <el-input
                      v-model="ruleForm.form.code"
                      palceholder="请输入全宗编码"
                      maxlength="32"
                      show-word-limit
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="关联档案类别">
                    <SelectMore
                      :isMultiple="true"
                      v-model:selectedData="ruleForm.form.archiveTypes"
                      :apiMethodName="dictionaryManage.getArchieveTypeList"
                      desc="name"
                      placeholderName="关联档案类别"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row style="margin-top: 30px; justify-content: center">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                  >保 存</el-button
                >
                <el-button @click="resetForm(ruleFormRef)">清 空</el-button>
              </el-row>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.general-manage {
  height: 100%;

  .tree-head {
    line-height: 24px;
    padding: 10px 8px;
    border-bottom: 1px solid #dcdfe6;
  }

  .tree-list {
    height: calc(100% - 45px);
    padding-right: 10px;
  }
}
</style>

<style lang="scss">
.general-manage {
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
        padding: 10px 0;

        .el-tree-node__label {
          display: inline-flex;
          width: calc(100% - 26px);

          .custom-tree-node {
            display: inline-flex;
            width: 100%;

            .title-name {
              width: calc(100% - 44px);
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .el-icon {
              font-size: 16px;
              margin: 7px 4px 7px 0;

              &:last-child {
                margin: 7px 8px 7px 0;
              }
            }
          }
        }
      }
    }

    &.tree-card {
      .el-card__body {
        padding: 0;

        .tree-head {
          .el-button--small {
            font-size: 14px;
          }
        }
      }
    }

    &.form-card {
      .el-card__body {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
