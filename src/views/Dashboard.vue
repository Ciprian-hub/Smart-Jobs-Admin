<template>
  <div>
    <h1 class="text-xl font-semibold text-gray-800 mb-3">
      Dashboard
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <div class="mx-auto shadow rounded-md w-full">
        <div>
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <div v-else>
            <apexchart type="line" height="350" :options="apexdata.chartOptions" :series="jobSore.jobs.series"></apexchart>
          </div>
        </div>
      </div>
      <div class="mx-auto shadow rounded-md w-full">
        <div>
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <div v-else>
            {{ storeUsers.usersCount }} users
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <div class="mx-auto shadow rounded-md w-full">
        <div>
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <div v-else>
            {{ applications }} applications
          </div>
        </div>
      </div>
      <div class="mx-auto shadow rounded-md w-full">
        <div>
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <div v-else>
            latest jobs
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import ApexCharts from 'apexcharts'
import {computed, onMounted, ref} from "vue";
import axiosClient from "../../axios.js";
import {useUsersStore} from "../store/useUsersStore.js";
import {useJobsStore} from "../store/useJobsStore.js"

const apexdata = ref({
  chartOptions: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Jobs Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }
})

console.log(apexdata.value.series)
// pinia
const storeUsers = useUsersStore()
const jobSore = useJobsStore()

//vuex

const loading = ref(false)
const jobs = ref(0)
const users = ref(0)
const applications = ref(0)

function getUsersCountV() {
  loading.value = true
  axiosClient.get('/users-count')
      .then(({data}) => {
        users.value = data
        loading.value = false
      })
}
function getApplications() {
  loading.value = true
  axiosClient.get('/applications')
      .then(({data}) => {
        applications.value = data
        loading.value = false
      })
}

onMounted(() => {
  // getJobs()
  storeUsers.getUsersCount()
  jobSore.getJobsData()
  getUsersCountV()
  getApplications()
})
</script>

<style lang="scss" scoped>

</style>