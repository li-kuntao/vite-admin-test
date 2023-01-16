<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox, ElTree } from 'element-plus'
// import SelectMore from '@/components/SelectMore/index.vue'
import { organizationManage, generalManage } from '@/api'

const isSort = ref(false)
const ruleFormRef = ref<FormInstance>()
// const dialogFormRef = ref<FormInstance>()
const generalTreeRef = ref<InstanceType<typeof ElTree>>()
const ruleForm: Record<string, any> = reactive({
  dialog: false,
  isAdd: false,
  form: {
    id: '',
    name: '',
    code: '',
    parentId: '',
  },
})
const rules = reactive<FormRules>({
  name: [{ required: true, message: '组织机构名称不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '组织机构编码不能为空', trigger: 'blur' }],
})
interface Tree {
  id: number
  name: string
  code: string
  children?: Tree[]
}
const defaultProps = {
  children: 'children',
  label: 'name',
}
const currentGenaralId = ref(0)
const treeData = ref<Tree[]>([])
const generalTree = ref<Tree[]>([])
const relatedGeneralList = ref<any[]>([])
// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 获取全宗树结构
const viewGeneralTree = () => {
  generalManage.viewGeneralTree().then((res: any) => {
    if (res.success) {
      generalTree.value = [...res.data]
    }
  })
}
// 获取组织机构树结构
const getGeneralTree = () => {
  organizationManage.getOrganizationTree().then((res: any) => {
    if (res.success) {
      treeData.value = [...res.data]
    }
  })
}
// 切换组织机构排序
const toggleTreeSort = () => {
  if (isSort.value) {
    organizationManage
      .updateOrganizationTree(treeData.value)
      .then((res: any) => {
        if (res.success) {
          isSort.value = false
          ElMessage.success(res.message)
        }
      })
  } else {
    isSort.value = true
  }
}
// 点击组织机构树节点
const handleNodeClick = (data: Tree, node: any) => {
  // console.log(data, node)
  currentGenaralId.value = data.id
  ruleForm.isAdd = false
  ruleForm.form = {
    id: data.id,
    name: data.name,
    code: data.code,
    parentId: node.parent.id ? node.parent.id : '0',
  }
  resetForm(ruleFormRef.value)
  // 获取组织机构全宗关联
  organizationManage.getOrganizationGeneral(data.id).then((res: any) => {
    if (res.success) {
      relatedGeneralList.value = [...res.data]
      generalTreeRef.value!.setCheckedKeys([...res.data], false)
    }
  })
}
// 新增组织机构
const addEditOrganization = (val: boolean, row: any) => {
  ruleForm.isAdd = true
  ruleForm.form = {
    id: '0',
    name: '',
    code: '',
    parentId: row.id,
  }
  resetForm(ruleFormRef.value)
  relatedGeneralList.value = []
  generalTreeRef.value!.setCheckedKeys([], false)
}
// 删除组织机构
const deleteGeneral = (row: any) => {
  // 二次确认删除
  ElMessageBox.confirm(`确定要删除 "${row.name}" 吗？`, '提示', {
    type: 'error',
    confirmButtonClass: 'el-button--danger',
    closeOnClickModal: false,
  })
    .then(() => {
      organizationManage.deleteOrganization(row.id).then((res: any) => {
        if (res.success) {
          ElMessage.success(res.message)
          getGeneralTree()
        }
      })
    })
    .catch(() => {})
}
// 保存组织机构
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const param = { ...ruleForm.form }
      if (ruleForm.isAdd) {
        // 新增
        organizationManage.addOrganization(param).then((res: any) => {
          if (res.success) {
            getGeneralTree()
          }
        })
      } else {
        // 编辑
        organizationManage
          .updateOrganization(ruleForm.form.id, param)
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
// 删除当前关联全宗
// const deleteRelatedGeneral = (index: number) => {
//   relatedGeneralList.value.splice(index, 1)
//   generalTreeRef.value!.setCheckedKeys(
//     relatedGeneralList.value.map((itm: any) => {
//       return itm.id
//     }),
//     false
//   )
// }
// 全宗勾选
// const checkedChange = (data, checked: any) => {
//   relatedGeneralList.value = checked.checkedNodes.map((itm: any) => {
//     return {
//       id: itm.id,
//       name: itm.name,
//       code: itm.code
//     }
//   })
// }
// 保存关联全宗
const saveRelatedGeneral = () => {
  organizationManage
    .updateOrganizationGeneral(
      currentGenaralId.value,
      generalTreeRef.value!.getCheckedKeys()
    )
    .then((res: any) => {
      if (res.success) {
        ElMessage.success(res.message)
      }
    })
}
onBeforeMount(() => {
  getGeneralTree()
  viewGeneralTree()
})
</script>

<template>
  <div class="organization-manage">
    <el-card>
      <el-row :gutter="10">
        <el-col :span="5">
          <el-card class="tree-card">
            <div class="tree-head clearfix">
              <span class="font-16 fl">组织机构列表</span>
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
                        @click.stop="addEditOrganization(true, data)"
                        title="添加组织机构"
                        class="fr"
                        style="color: #67c23a"
                      >
                        <CirclePlus />
                      </el-icon>
                      <el-icon
                        v-if="currentGenaralId === data.id"
                        @click.stop="deleteGeneral(data)"
                        title="删除组织机构"
                        class="fr"
                        style="color: #f56c6c"
                      >
                        <Remove />
                      </el-icon>
                      <!-- <el-icon
                        v-if="currentGenaralId === data.id"
                        @click.stop="addEditOrganization(false, data, node)"
                        title="编辑组织机构"
                        class="fr"
                        style="color: #e6a23c"
                      >
                        <Edit />
                      </el-icon> -->
                    </span>
                  </template>
                </el-tree>
                <el-empty v-else description="暂无组织机构数据" />
              </el-scrollbar>
            </div>
          </el-card>
        </el-col>
        <el-col :span="19">
          <el-card class="form-card">
            <div class="general-list">
              <el-form
                ref="ruleFormRef"
                :model="ruleForm.form"
                :rules="rules"
                label-width="110px"
              >
                <el-form-item label="组织机构名称" prop="name">
                  <el-input
                    v-model="ruleForm.form.name"
                    palceholder="请输入组织机构名称"
                    maxlength="32"
                    show-word-limit
                  />
                </el-form-item>
                <el-form-item label="组织机构编码" prop="code">
                  <el-input
                    v-model="ruleForm.form.code"
                    palceholder="请输入组织机构编码"
                    maxlength="32"
                    show-word-limit
                  />
                </el-form-item>
                <el-form-item>
                  <el-button @click="resetForm(ruleFormRef)">重 置</el-button>
                  <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >保 存</el-button
                  >
                </el-form-item>
              </el-form>
              <!-- <div class="act-btn">
                <el-button type="primary" @click="saveRelatedGeneral">保 存</el-button>
              </div>
              <div class="related-list">
                <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
                  <ul class="infinite-list" v-if="relatedGeneralList.length">
                    <li
                      v-for="(item, index) in relatedGeneralList"
                      :key="item.id"
                      class="infinite-list-item"
                      @click="deleteRelatedGeneral(index)"
                    >
                      <label>
                        <el-icon><Select /></el-icon>
                      </label>
                      {{ item.name }} ({{ item.code }})
                    </li>
                  </ul>
                  <el-empty v-else description="暂无全宗数据" />
                </el-scrollbar>
              </div> -->
            </div>
            <div class="arrow-btn">
              <el-icon><Operation /></el-icon>
            </div>
            <div class="general-tree">
              <div class="act-btn">
                <el-button type="primary" @click="saveRelatedGeneral"
                  >保 存</el-button
                >
              </div>
              <div class="related-list">
                <el-scrollbar height="100%" wrap-class="scrollbar-wrapper">
                  <el-tree
                    v-if="generalTree.length"
                    style="padding: 10px"
                    ref="generalTreeRef"
                    :data="generalTree"
                    show-checkbox
                    default-expand-all
                    node-key="id"
                    :props="defaultProps"
                  />
                </el-scrollbar>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <!-- 组织机构弹框 -->
    <!-- <el-dialog
      v-model="ruleForm.dialog"
      :title="ruleForm.isAdd ? '新建组织机构' : '编辑组织机构'"
      width="30%"
      :close-on-click-modal="false"
      align-center
    >
      <el-form ref="dialogFormRef" :model="ruleForm.form" :rules="rules" label-width="120px">
        <el-form-item label="组织机构名称" prop="form.name">
          <el-input
            v-model="ruleForm.form.name"
            palceholder="请输入组织机构名称"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="组织机构编码" prop="form.code">
          <el-input
            v-model="ruleForm.form.code"
            palceholder="请输入组织机构编码"
            maxlength="32"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="ruleForm.dialog = false">取 消</el-button>
        <el-button type="primary" @click="submitForm(dialogFormRef)">保 存</el-button>
      </template>
    </el-dialog> -->
  </div>
</template>

<style lang="scss" scoped>
.organization-manage {
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
.organization-manage {
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

        .general-tree,
        .general-list {
          width: 30%;
          height: 100%;
          border: 2px dashed #dcdfe6;
          border-radius: 5px;

          .act-btn {
            text-align: right;
            margin: 10px 15px 0 0;
          }

          .related-list {
            height: calc(100% - 44px);
          }
        }

        .arrow-btn {
          margin: 0 20px;

          .el-icon {
            font-size: 30px;
            color: #409eff;
          }
        }

        .general-list {
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;

          .act-btn {
            text-align: right;
            margin: 10px 15px 0 0;
          }

          .related-list {
            height: calc(100% - 44px);
          }

          .infinite-list {
            padding: 10px;

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
      }
    }
  }
}
</style>
