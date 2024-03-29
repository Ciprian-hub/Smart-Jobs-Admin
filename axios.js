import axios from "axios";
import store from "./src/store/index.js";
import router from "./src/router/index.js";


const axiosClient = axios.create({
    // baseURL: `${import.meta.env.VITE_API_BASE_URL}`
    baseURL: 'http://localhost:8000/api'
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config
})
axiosClient.interceptors.request.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        store.commit('setToken', null)
        router.push({name: 'login'})
    }
    throw error
})
export default axiosClient