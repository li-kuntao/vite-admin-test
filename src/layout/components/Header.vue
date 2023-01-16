<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import { useSidebarStore } from '@/store/sidebar'
import { useTagsStore } from '@/store/tags'

const username = JSON.parse(
  sessionStorage.getItem('userInfo') as string
).realName
const sidebar = useSidebarStore()
const tags = useTagsStore()
// 侧边栏折叠
const collapseChange = () => {
  sidebar.handleCollapse()
}
onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChange()
  }
})
// 用户名下拉菜单选择事件
const router = useRouter()
const handleCommand = (command: string) => {
  if (command === 'loginOut') {
    // 二次确认
    ElMessageBox.confirm(`确定要登出当前用户吗？`, '提示', {
      type: 'warning',
    })
      .then(() => {
        sessionStorage.clear()
        tags.clearTags()
        router.push('/')
      })
      .catch(() => {})
  } else if (command === 'user') {
    // router.push("/user");
  }
}
</script>

<template>
  <div class="header clearfix">
    <!-- 折叠按钮 -->
    <!--<div class="header-logo fl">
      <img src="@/assets/images/logo.png"/>
    </div>
    <div class="header-title fl">后台管理系统</div>-->
    <div class="collapse-btn fl" @click="collapseChange">
      <el-icon>
        <Expand v-if="sidebar.collapse" />
        <Fold v-else />
      </el-icon>
    </div>
    <div class="header-right fr">
      <div class="header-user-con">
        <!-- 消息中心 -->
        <!--<div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            &lt;!&ndash;<router-link to="/tabs">&ndash;&gt;
            <i class="el-icon-bell"></i>
            &lt;!&ndash;</router-link>&ndash;&gt;
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>-->
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="@/assets/images/avatar.png" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <!--<el-dropdown-item command="user">个人中心</el-dropdown-item>-->
              <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #0070c1;
  font-size: 22px;
  color: #fff;

  .header-logo {
    height: 60px;

    img {
      width: 40px;
      height: 40px;
      margin: 10px 12px;
    }
  }

  .header-title {
    width: 176px;
    line-height: 60px;
  }
}

.collapse-btn {
  height: 60px;
  padding: 19px 21px;
  cursor: pointer;
}

.header-right {
  padding-right: 30px;
}

.header-user-con {
  display: flex;
  height: 60px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
