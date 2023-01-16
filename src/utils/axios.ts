import axios, {
  type AxiosInstance,
  AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import $router from '@/router'

const http: AxiosInstance = axios.create({
  // baseURL,
  // timeout: 20000 // 请求超时 20s
})
const httpDownload: AxiosInstance = axios.create({
  // baseURL,
  responseType: 'blob',
  // timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent
    const $config: any = config
    if ($config.url.indexOf('/api/users/login') === -1) {
      // token校验(除了登录)
      const token = sessionStorage.getItem('authority')
      if (token) {
        $config.headers.Authorization = `Bearer ${token}`
      }
    }
    if (process.env.NODE_ENV === 'development') {
      // 开发环境跨域处理
      $config.url = `/dev${config.url}`
    }
    return $config
  },
  (error: AxiosError) => {
    // do something with request error
    // console.log(error); // for debug
    return Promise.reject(error)
  }
)
httpDownload.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent
    const $config: any = config
    const token = sessionStorage.getItem('authority')
    if (token) {
      $config.headers.Authorization = `Bearer ${token}`
    }
    if (process.env.NODE_ENV === 'development') {
      // 开发环境跨域处理
      $config.url = `/dev${config.url}`
    }
    return $config
  },
  (error: AxiosError) => {
    // do something with request error
    // console.log(error); // for debug
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
http.interceptors.response.use(
  (response: AxiosResponse) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     */
    const res = response.data
    if (response.status === 200) {
      // if the custom code is not 200, it is judged as an error.
      if (!res.success) {
        ElMessage({
          message: res.message || 'Error',
          type: 'error',
          duration: 3 * 1000,
        })
      }
    }
    return res
  },
  (error: AxiosError) => {
    const $error: any = error
    if ($error.response.status === 401) {
      // to re-Login
      if (document.getElementsByClassName('expire-box').length === 0) {
        // 防止出现多次弹框
        ElMessageBox.confirm('登录已过期，请重新登录！', '提示', {
          customClass: 'expire-box',
          confirmButtonText: '确定',
          showClose: false,
          showCancelButton: false,
          closeOnClickModal: false,
          type: 'warning',
        }).then(() => {
          sessionStorage.clear() // 清除缓存
          $router.push({ path: '/' })
        })
      }
    }
    return Promise.reject($error)
  }
)
httpDownload.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const $error: any = error
    if ($error.response.status === 401) {
      // to re-Login
      if (document.getElementsByClassName('expire-box').length === 0) {
        // 防止出现多次弹框
        ElMessageBox.confirm('登录已过期，请重新登录！', '提示', {
          customClass: 'expire-box',
          confirmButtonText: '确定',
          showClose: false,
          showCancelButton: false,
          closeOnClickModal: false,
          type: 'warning',
        }).then(() => {
          sessionStorage.clear() // 清除缓存
          $router.push({ path: '/' })
        })
      }
    }
    return Promise.reject($error)
  }
)

export { http, httpDownload }
