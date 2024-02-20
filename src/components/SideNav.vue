<script setup>
import router from "../router/index.js";

const routes = router.options.routes[1].children

</script>

<template>
  <div class="text-[#A6ABC8] w-[240px] min-w-[240px] bg-[#F1F2F7]">
    <div class="flex items-center justify-center py-3 h-[50px] border-b-[1px] text-indigo-400">
      LoGO
    </div>
    <div class="mt-16">
      <div v-for="route in routes" class="flex px-5">
        <router-link :to="{name: `${route.name}`}"
                     class="w-full flex items-center transition-all px-3 py-2 my-1 font-light rounded-lg text-sm hover:bg-[#E4E7F4] hover:text-[#5A6ACF]">
          <div v-html="route.icon"/>
          <div class="ml-2">
            {{ route.path.charAt(0).toUpperCase() + route.path.slice(1) }}
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #5A6ACF;
  background: #E4E7F4;
}
</style>