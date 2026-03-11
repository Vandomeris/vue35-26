<template>
  <h1>FavouritesPage</h1>
  <div v-for="item in favourites.list" :key="item.id">
    <p>{{ item.title }} || {{ item.brand }}</p>
  </div>
</template>

<script setup lang="ts">
import { favourites } from '@/stores'
</script>
