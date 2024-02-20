import {defineStore} from 'pinia'
import axiosClient from "../../axios.js";
import {logout} from "./actions.js";

export const useJobsStore = defineStore('jobs', {
    state: () => {
        return {
            jobs: {
                series: [{
                    name: "Jobs",
                    data: []
                }],
            }
        }
    },
    actions: {
        async getJobsData() {
            axiosClient.get('/jobs')
                .then((response) => {
                    response.data[0].forEach(e => {
                        this.jobs.series[0].data.push(e.count)
                    })
                    return response
                })
        }
    }

})