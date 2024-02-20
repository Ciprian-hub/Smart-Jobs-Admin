import {createApp} from 'vue'
import { createPinia } from 'pinia'
import router from "./router/index.js";
import store from "./store/index.js";
import './index.css'
import './style.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";


const pinia = createPinia()
const app = createApp(App)
app
    .use(VueApexCharts)
    .use(pinia)
    .use(store)
    .use(router)
    .mount('#app')
