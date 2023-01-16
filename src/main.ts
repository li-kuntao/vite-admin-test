import { createApp } from 'vue'
import { createPinia } from 'pinia'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// a modern alternative to CSS resets
import 'normalize.css/normalize.css'

// self css
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, { locale })
app.use(createPinia())
app.use(router)

app.mount('#app')
