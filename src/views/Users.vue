<template>
  <div>
      Users
   <div>
     Pinia
      <pre>
      {{useUsers.users}}
    </pre>
   </div>

  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import {useUsersStore} from "../store/useUsersStore.js";

//pinia
const useUsers = useUsersStore()

// vuex
const usersData = computed(() => store.state.users)

function getAllUsersV(){
  store.dispatch('getUsersAllUsersV')
}

onMounted(() => {
  getAllUsersV()
  useUsers.getAllUsersP()
})

</script>

<style lang="scss" scoped>

</style>