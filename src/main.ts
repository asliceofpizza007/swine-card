import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/** global styles */
import '@scss/styles.scss'

/** element-lus */
import { ElButton, ElSelect } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'

createApp(App)
.use(router)
.use(ElButton)
.use(ElSelect)
.mount('#app')
