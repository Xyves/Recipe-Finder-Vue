<template>
  <button class="py-1 border-2 text-start" @click="onGoItem">
    {{ name }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: number | string
  name: string
  rating?: number
  reviewCount?: number
  servings?: number
  tags?: string[]
  cookTimeMinutes?: number
  caloriesPerServing?: number
  difficulty?: string
  image?: string
  ingrediens?: string[]
  instructions?: string[]
  onGo: (item: any) => void
}>()

const onGoItem = () => {
  // Build the full item object

  props.onGo(props.id)
}
</script>
