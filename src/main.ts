import '@/assets/css/main.css'

import {createApp} from 'vue'
import piniaPluginPresidedState from 'pinia-plugin-persistedstate'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPresidedState)

app.use(pinia)
app.use(router)

app.mount('#app')
