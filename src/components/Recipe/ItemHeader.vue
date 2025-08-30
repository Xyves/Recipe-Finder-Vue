<template>
  <div class="border-2 m-4 [&>p]:py-2 flex justify-around">
    <p class="text-lg">Servings: {{ servings }}</p>
    <p class="text-lg">
      Difficulty:
      <span
        :class="{
          'text-green-500': difficulty === 'Easy',
          'text-yellow-500': difficulty === 'Medium',
          'text-red-500': difficulty === 'Hard',
        }"
      >
        {{ difficulty }}
      </span>
    </p>
    <p class="text-lg">Cook Time: {{ cookTimeMinutes }} minutes</p>
  </div>
</template>

<script setup>
defineProps(['servings', 'difficulty', 'cookTimeMinutes'])
</script>

<style scoped></style>
