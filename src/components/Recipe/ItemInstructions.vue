<template>
  <div class="border-2 m-4 [&>p]:py-2 [&>ul>li]:text-xl py-5 my-6 px-3">
    <h2 class="text-4xl py-4 font-bold">Instructions</h2>
    <ol>
      <li v-for="(step, index) in instructions" :key="index" class="text-xl">
        Step {{ index + 1 }} : {{ step }}
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps(['instructions'])
</script>

<style scoped></style>
