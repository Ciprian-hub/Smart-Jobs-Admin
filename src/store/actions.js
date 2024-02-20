
import axiosClient from "../../axios.js";

export function login({commit}, userData) {
    return axiosClient.post('/login', userData)
        .then(({data}) => {
            commit('setUser', data.user)
            commit('setToken', data.token)
            return data
        })
        .catch()
}

export function logout({commit}) {
    return axiosClient.post('/logout')
        .then((response) => {
            commit('setToken', null)
            return response
        })
}

export function getUserV({commit}){
    axiosClient.get('/user')
        .then((response) => {
            commit('setUser', response.data)
            return response
        })
}
export function getUsersAllUsersV({commit}){
    axiosClient.get('/users')
        .then((response) => {
            commit('setUsers', response.data)
            return response
        })
}