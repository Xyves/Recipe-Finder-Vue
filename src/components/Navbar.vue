<template>
  <header class="flex justify-between py-6 bg-inherit [&>*]:text-white text-2xl">
    <p class="lg:ml-16 sm:ml-2">Halvia</p>
    <ul class="list-none flex gap-20 mr-30">
      <RouterLink to="/"><li>Home</li></RouterLink>
      <RouterLink to="/categories"><li>Categories</li></RouterLink>
      <RouterLink to="/random"><li>Random</li></RouterLink>
    </ul>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
