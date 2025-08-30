<template>
  <li v-for="star in 5" :key="star" class="relative list-none inline-block">
    <!-- Empty star (always gray) -->
    <StarIcon size="32" fill="lightgray" />

    <!-- Full or half star -->
    <StarIcon
      v-if="star <= Math.floor(itemRating)"
      size="32"
      class="absolute top-0 left-0"
      :class="star <= itemRating ? 'text-yellow-400' : 'text-gray-300'"
      fill="yellow"
    />
    <StarIcon
      v-else-if="star - itemRating <= 0.5"
      size="32"
      class="absolute top-0 left-0"
      fill="yellow"
      :class="star <= itemRating ? 'text-yellow-400' : 'text-yellow-300'"
      style="clip-path: inset(0 50% 0 0)"
    />
  </li>
</template>

<script setup>
import { StarIcon } from 'lucide-vue-next'

defineProps(['itemRating'])
</script>

<style scoped></style>
