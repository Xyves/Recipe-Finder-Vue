<template>
  <div class="w-full flex my-6 justify-center">
    <input type="text" class="border-2 border-white h-10 py-1 px-1 rounded-md w-1/3 text-white" />
    <button class="bg-red-600 h-10 px-3 rounded-lg mx-2 active:bg-red-700">
      <SearchIcon color="white" />
    </button>
  </div>
</template>

<script setup>
import { SearchIcon } from 'lucide-vue-next'
</script>

<style scoped></style>
