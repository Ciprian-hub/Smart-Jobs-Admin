import {defineStore} from 'pinia'
import axiosClient from "../../axios.js";

export const useApplicationsStore = defineStore('applications', {
    state: () => {
        return {
            applications: {}
        }
    },
    actions: {
        async getApplications() {
            axiosClient.get('/applications')
                .then(({data}) => {
                    console.log(data)
                    return data
                })
        }
    },
    getters: {

    }
})