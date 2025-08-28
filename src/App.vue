<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import './main.css'
</script>

<template>
  <div class="flex flex-col min-h-screen inset-0 bg-[url('/spaghetti-1932466_1920.jpg')] bg-cover">
    <!-- Navbar at top -->
    <Navbar />

    <!-- Main content fills remaining space -->
    <main class="flex-1 flex flex-col">
      <router-view class="flex-1" />
    </main>
  </div>
</template>

<style scoped></style>
