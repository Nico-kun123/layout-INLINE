<script setup>
import { RouterView } from 'vue-router'

// Компоненты
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar v-if="!$route.meta.hideNavbar" />
  </header>

  <RouterView />
</template>

<style scoped></style>
