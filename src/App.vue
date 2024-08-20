<script setup>
import { RouterView } from 'vue-router'

// Компоненты
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped></style>
