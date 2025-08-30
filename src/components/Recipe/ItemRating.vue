<template>
  <div class="flex text-2xl py-10 justify-center items-center">
    <p>Rating: {{ rating }} / 5 &nbsp;</p>
    <p class="mr-5">({{ reviewCount }}) reviews</p>
    <StarsReview :itemRating="rating" />
  </div>
</template>

<script setup>
import StarsReview from '../StarsReview.vue'

defineProps(['reviewCount', 'rating'])
</script>

<style scoped></style>
