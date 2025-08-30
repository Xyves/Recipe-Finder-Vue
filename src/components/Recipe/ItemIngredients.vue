<template>
  <div class="border-2 m-4 [&>p]:py-2 [&>ul>li]:text-xl py-5">
    <h2 class="text-4xl px-2 font-bold mb-4">Ingredients</h2>
    <ul>
      <li v-for="(ing, index) in ingredients" :key="index" class="px-4 py-2">{{ ing }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps(['ingredients'])
</script>

<style scoped></style>
