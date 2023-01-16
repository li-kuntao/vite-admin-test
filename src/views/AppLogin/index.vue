<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import Layout from '@/layout/index.vue'
import { userOperate } from '@/api'

const router = useRouter()
const param = reactive({
  account: 'admin',
  password: '!bjca2019',
  user: '',
  key: '',
})
const tabName = ref('pwd')
const userList = ref<any[]>([])
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  user: [{ required: true, message: '请选择证书', trigger: 'change' }],
  key: [{ required: true, message: '请输入证书口令', trigger: 'blur' }],
})
const loginLoading = ref(false)
const certIniteError = ref(false)
// 初始化证书
const certInit = () => {
  window.initCertFunc(
    () => {
      window.SOF_GetUserList((data: any) => {
        const usrlst = data.retVal
        if (usrlst !== '') {
          const index = usrlst.indexOf('&&&')
          const strOneUser = usrlst.substring(0, index)
          const strName = strOneUser.substring(0, strOneUser.indexOf('||'))
          const strUniqueID = strOneUser.substring(
            strOneUser.indexOf('||') + 2,
            strOneUser.length
          )
          userList.value = [{ id: strUniqueID, name: strName }]
          param.user = strUniqueID
        }
      })
    },
    () => {
      ElMessage.error('没有正确安装证书应用环境或者证书应用环境已经损坏！')
      certIniteError.value = true
    }
  )
}
onBeforeMount(() => {
  certInit()
})
// 登录
const loginSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginLoading.value = true
      userOperate.passwordLogin(param).then((res: any) => {
        if (res.success) {
          sessionStorage.setItem('authority', res.data.token) // token
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.user)) // userInfo
          const constantRoutes = [
            {
              path: '/ArchiveTable',
              component: Layout,
              children: [
                {
                  path: 'index',
                  name: 'ArchiveTable',
                  meta: {
                    title: '预归档列表',
                    icon: 'Grid',
                  },
                  component: () => import('@/views/ArchiveTable/index.vue'),
                },
              ],
            },
          ]
          router.push({ name: constantRoutes[0].children[0].name })
        } else {
          loginLoading.value = false
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">电子档案管理系统</div>
      <el-form
        ref="ruleFormRef"
        :model="param"
        :rules="rules"
        label-width="0px"
      >
        <el-tabs v-model="tabName">
          <el-tab-pane label="账号密码登录" name="pwd">
            <el-form-item :prop="tabName === 'pwd' ? 'account' : ''">
              <el-input
                v-model="param.account"
                size="default"
                placeholder="请输入账号"
                @keyup.enter="loginSubmit(ruleFormRef)"
              >
                <template #prepend>
                  <el-icon>
                    <Avatar />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item :prop="tabName === 'pwd' ? 'password' : ''">
              <el-input
                v-model="param.password"
                size="default"
                type="password"
                placeholder="请输入密码"
                @keyup.enter="loginSubmit(ruleFormRef)"
              >
                <template #prepend>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="证书登录" name="ukey" :loading="certIniteError">
            <el-form-item :prop="tabName === 'ukey' ? 'user' : ''">
              <span class="pre-icon">
                <el-icon>
                  <UserFilled />
                </el-icon>
              </span>
              <el-select
                :teleported="false"
                class="key-select"
                v-model="param.user"
                size="default"
                placeholder="请选择证书"
              >
                <el-option
                  v-for="(item, index) in userList"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item :prop="tabName === 'ukey' ? 'key' : ''">
              <el-input
                v-model="param.key"
                size="default"
                type="password"
                placeholder="请输入证书口令"
                @keyup.enter="loginSubmit(ruleFormRef)"
              >
                <template #prepend>
                  <el-icon>
                    <Key />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div class="login-btn">
        <el-button
          :disabled="certIniteError && tabName === 'ukey'"
          :loading="loginLoading"
          @click="loginSubmit(ruleFormRef)"
        >
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/login-bg.jpg');
  background-size: 100% 100%;

  .ms-title {
    width: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    color: #909399;

    // border-bottom: 1px solid #dcdfe6;
  }

  :deep(.el-tabs) {
    .el-tabs__header {
      margin-bottom: 0;

      .el-tabs__nav-wrap {
        margin: 0 20px;

        .el-tabs__nav-scroll {
          margin: 0 !important;

          .el-tabs__nav {
            width: 100%;

            .el-tabs__item {
              width: 50%;
              height: 48px;
              line-height: 48px;
              padding: 0;
              text-align: center;
              font-size: 16px;
              color: #a8abb2;

              &.is-active {
                color: #409eff;
              }
            }
          }
        }
      }
    }

    .el-tabs__content {
      padding: 30px 30px 20px;
    }
  }

  :deep(.el-select.key-select) {
    flex: 1;

    .el-input__wrapper {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .el-popper {
      left: 0 !important;
    }
  }

  .pre-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    border-radius: 4px 0 0 4px;
    padding: 0 20px;
    color: #909399;
    font-size: 14px;
    background: #f5f7fa;
    border-right: 0;
    box-shadow: 1px 0 0 0 #dcdfe6 inset, 0 1px 0 0 #dcdfe6 inset,
      0 -1px 0 0 #dcdfe6 inset;
  }

  .login-btn {
    text-align: center;
    padding: 0 30px 38px;

    button {
      width: 100%;
      height: 36px;
      margin-bottom: 10px;
      background: linear-gradient(to right, #2276ff, #00a5ff);
      color: #fff;
      border: none;
    }
  }
}

.ms-login {
  width: 480px;
  border-radius: 5px;
  background: rgb(255 255 255 / 58%);
  overflow: hidden;
}
@media (min-width: 1920px) {
  .ms-login {
    transform: scale(1.5);
  }
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
