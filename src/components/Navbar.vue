<template>
  <header class="flex justify-between py-6 bg-inherit [&>*]:text-white text-2xl">
    <p class="lg:ml-16 sm:ml-2">Halvia</p>
    <ul class="list-none flex gap-20 mr-30">
      <RouterLink to="/"><li>Home</li></RouterLink>
      <RouterLink to="/categories"><li>Categories</li></RouterLink>
      <button @click="goRandom" class="text-white px-4 py-2 rounded">Random</button>
    </ul>
  </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const generateRandomNumber = () => {
  // returns a number between 1 and 49
  return Math.floor(Math.random() * 49) + 1
}

const goRandom = () => {
  let randomId
  do {
    randomId = generateRandomNumber()
  } while (randomId === Number(route.params.id)) // avoid repeating current ID

  router.push(`/item/${randomId}`)
}
</script>

<style scoped></style>
