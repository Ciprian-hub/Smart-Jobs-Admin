import {defineStore} from 'pinia'
import axiosClient from "../../axios.js";

export const useUsersStore = defineStore('users', {
    state: () => {
        return {
            users: {
                seeker: [],
                employers: []
            },
            usersCount: null,
            chartOptions: {
                labels: [],
                chart: {
                    width: 300,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter:
                        function (seriesName, opts) {
                            return seriesName + " - " + opts.w.globals.series[opts.seriesIndex]
                        }
                },
                title: {
                    text: 'Gradient Donut with custom Start-angle'
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }

        }
    },
    actions: {
        async getUsersCount() {
            axiosClient.get('/users-count')
                .then(({data}) => {
                    this.users.employers = data.employers
                    this.users.seeker = data.seekers
                    this.chartOptions.labels.push(...Object.keys(data))
                    console.log(this.chartOptions.labels)
                    return data
                    // loading.value = false
                })
        },
        // async getAllUsersP(){
        //     axiosClient.get('/users')
        //         .then((response) => {
        //             this.users = response.data
        //         })
        // }
    },
    getters: {
        getSeekers(state) {
            return state.users.seeker
        },
        getEmployers(state) {
            return state.users.employers
        },
        formatUsersForDonut(state){
            return [
                state.users.seeker,
                state.users.employers
            ]
        },
        getChartOptions(state) {
            return state.chartOptions
        }
    }

})