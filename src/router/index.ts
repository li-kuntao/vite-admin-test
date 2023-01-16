import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import Layout from '@/layout/index.vue'
import 'nprogress/nprogress.css' // progress bar style
import { useSidebarStore } from '@/store/sidebar'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const otherRoutes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/AppLogin/index.vue'),
  },
  {
    path: '/ReorganizeStore',
    component: Layout,
    children: [
      {
        path: 'DocDetail',
        name: 'ReorganizeStoreDetail',
        meta: {
          title: '文档详情',
        },
        component: () => import('@/views/ReorganizeStore/DocDetail.vue'),
      },
    ],
  },
  {
    path: '/LongStore',
    component: Layout,
    children: [
      {
        path: 'DocDetail',
        name: 'LongStoreDetail',
        meta: {
          title: '文档详情',
        },
        component: () => import('@/views/LongStore/DocDetail.vue'),
      },
    ],
  },
  {
    path: '/:error*',
    name: 'NotFound',
    component: () => import('@/views/ErrorPage/404.vue'),
  },
]
const constantRoutes = [
  // {
  //   path: '/ArchiveSearch',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ArchiveSearch',
  //       meta: {
  //         title: '归档查询',
  //         icon: 'Search'
  //       },
  //       component: () => import('@/views/ArchiveSearch/index.vue')
  //     }
  //   ]
  // },
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
  {
    path: '/ArchiveSubmit',
    component: Layout,
    meta: {
      title: '档案归档',
      icon: 'Collection',
    },
    children: [
      {
        path: 'ReorganizeStore',
        name: 'ReorganizeStore',
        meta: {
          title: '整编库',
        },
        component: () => import('@/views/ReorganizeStore/index.vue'),
      },
      {
        path: 'LongStore',
        name: 'LongStore',
        meta: {
          title: '长期保存库',
        },
        component: () => import('@/views/LongStore/index.vue'),
      },
    ],
  },
  {
    path: '/SystemManage',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'Setting',
    },
    children: [
      {
        path: 'BaseMessage',
        name: 'BaseMessage',
        meta: {
          title: '基础信息维护',
          icon: 'Coin',
        },
        children: [
          {
            path: 'GeneralManage',
            name: 'GeneralManage',
            meta: {
              title: '全宗维护',
            },
            component: () => import('@/views/GeneralManage/index.vue'),
          },
          {
            path: 'CodeManage',
            name: 'CodeManage',
            meta: {
              title: '编码维护',
            },
            component: () => import('@/views/CodeManage/index.vue'),
          },
          {
            path: 'MetaManage',
            name: 'MetaManage',
            meta: {
              title: '元数据维护',
            },
            component: () => import('@/views/MetaManage/index.vue'),
          },
          {
            path: 'DictionaryManage',
            name: 'DictionaryManage',
            meta: {
              title: '字典维护',
            },
            component: () => import('@/views/DictionaryManage/index.vue'),
          },
          {
            path: 'OrganizationManage',
            name: 'OrganizationManage',
            meta: {
              title: '组织架构维护',
            },
            component: () => import('@/views/OrganizationManage/index.vue'),
          },
        ],
      },
      {
        path: 'SchemeConfig',
        name: 'SchemeConfig',
        meta: {
          title: '方案配置',
          icon: 'FolderOpened',
        },
        children: [
          {
            path: 'CatalogManage',
            name: 'CatalogManage',
            meta: {
              title: '目录管理',
            },
            component: () => import('@/views/CatalogManage/index.vue'),
          },
          {
            path: 'SchemeManage',
            name: 'SchemeManage',
            meta: {
              title: '方案管理',
            },
            component: () => import('@/views/SchemeManage/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/ExternalPage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'http://192.168.126.99:61010/scan/scanner',
        meta: {
          title: '档案扫描',
          icon: 'Printer',
          isExternal: true,
        },
        component: () => import('@/views/ExternalPage/index.vue'),
      },
    ],
  },
  {
    path: '/ExternalPage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'http://192.168.126.99:61010/scan/highbeat',
        meta: {
          title: '档案拍摄',
          icon: 'Camera',
          isExternal: true,
        },
        component: () => import('@/views/ExternalPage/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_UR),
  routes: [...otherRoutes, ...constantRoutes],
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  if (to.path !== '/') {
    if (!sessionStorage.getItem('authority')) {
      next('/')
    } else {
      const sidebar = useSidebarStore()
      sidebar.toggleMenu(constantRoutes)
      next()
    }
  } else {
    next()
  }
  NProgress.done()
})

export default router
