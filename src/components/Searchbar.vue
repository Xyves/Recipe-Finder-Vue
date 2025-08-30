<template>
  <div class="w-full flex mt-6 justify-center flex-col">
    <div class="flex justify-center">
      <input
        type="text"
        class="border-2 border-white h-10 py-1 px-1 rounded-md w-1/3 text-white"
        v-model="inputValue"
      />
      <button class="bg-red-600 h-10 px-3 rounded-lg mx-2 active:bg-red-700">
        <SearchIcon color="white" />
      </button>
    </div>
    <div
      class="bg-purple-400 w-1/3 mx-auto px-4 py-5 flex flex-col"
      v-if="results && results.length"
    >
      <SearchItem
        v-for="result in results"
        key="result.id"
        :id="result.id"
        :name="result.name"
        :rating="result.rating"
        :reviewCount="result.reviewCount"
        :servings="result.servings"
        :tags="result.tags"
        :cookTimeMinutes="result.cookTimeMinutes"
        :caloriesPerServing="result.caloriesPerServing"
        :difficulty="result.difficulty"
        :image="result.image"
        :ingrediens="result.ingrediens"
        :instructions="result.instructions"
        :onGo="gotoItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import SearchItem from './SearchItem.vue'
import { useRouter } from 'vue-router'
const inputValue = ref('')
const results = ref([])
let debounceTimer = null
const router = useRouter()
watch(inputValue, async (newValue, oldValue) => {
  if (!newValue) {
    results.value = []
    return
  }
  clearTimeout(debounceTimer)

  // set new timer (1s)
  debounceTimer = setTimeout(() => {
    fetchData(newValue)
  }, 500)
})

function gotoItem(id: number) {
  router.push({
    name: 'RecipeItemView',
    params: { id: id }, // only pass the id in the URL
  })
}
const fetchData = async (value) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${value}&limit=5`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json() // 👈 parse JSON
    console.log(data)
    results.value = data.recipes || []
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped></style>
