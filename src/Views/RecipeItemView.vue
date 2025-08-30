<template>
  <div
    v-if="item"
    class="[&>*]:text-white bg-[rgba(46,48,36,0.65)] w-1/3 mx-auto border-1 border-gray-600"
  >
    <h1 class="text-5xl text-center py-8 font-bold">{{ item.name }}</h1>

    <ItemHeader
      :name="item.name"
      :servings="item.servings"
      :difficulty="item.difficulty"
      :cookTimeMinutes="item.cookTimeMinutes"
    />

    <img :src="item.image" alt="Dish Image" class="object-cover px-20" />

    <ItemIngredients :ingredients="item.ingredients" />
    <ItemInstructions :instructions="item.instructions" />
    <ItemRating :reviewCount="item.reviewCount" :rating="item.rating" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ItemIngredients from '../components/Recipe/ItemIngredients.vue'
import ItemInstructions from '../components/Recipe/ItemInstructions.vue'
import ItemRating from '../components/Recipe/ItemRating.vue'
import ItemHeader from '../components/Recipe/ItemHeader.vue'
const route = useRoute()

const id = route.params.id
const item = ref(null)

const fetchItem = async (id: string | number) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    item.value = data || null
  } catch (error) {
    console.error(error)
    item.value = null
  }
}

// Initial fetch
fetchItem(route.params.id)

watch(
  () => route.params.id,
  (newId) => {
    if (newId) fetchItem(newId)
  },
)
</script>
