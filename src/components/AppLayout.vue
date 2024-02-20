
<template>
  <div class="h-full  flex">
    <SideNav class="transition-all" :class="{'-ml-[240px]' : !sidebarOpen}"/>
    <div class="w-full">
      <NavBar @toggle-sidebar="toggleSidebar"/>
      <main class="p-6 min-h-[100vh]">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import SideNav from "./SideNav.vue";
import NavBar from "./NavBar.vue";
import {ref} from "vue";

const sidebarOpen = ref(true)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}


</script>

<style scoped>

</style>