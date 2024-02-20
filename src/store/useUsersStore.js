import {defineStore} from 'pinia'
import axiosClient from "../../axios.js";

export const useUsersStore = defineStore('users', {
    state: () => {
        return {
            users: [],
            usersCount: null
        }
    },
    actions: {
        async getUsersCount() {
            axiosClient.get('/users-count')
                .then(({data}) => {
                    this.usersCount = data
                    // loading.value = false
                })
        },
        async getAllUsersP(){
            axiosClient.get('/users')
                .then((response) => {
                    this.users = response.data
                })
        }
    }

})