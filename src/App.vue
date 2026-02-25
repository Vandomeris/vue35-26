<template>
  <header class="flex justify-between container mx-auto py-5">
    <div>LOGO</div>

    <nav class="flex gap-x-5">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/todos">Список дел</RouterLink>
      <RouterLink to="/exchange">Обмен валют</RouterLink>
      <RouterLink to="/products">Товары </RouterLink>
      <RouterLink to="/cart">Корзина </RouterLink>
    </nav>
  </header>

  <main class="mx-auto container">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import type { Product } from './types/types'
import { RouterLink } from 'vue-router'

const start_cart = JSON.parse(localStorage.getItem('cart')!) || []

const cart = ref<Product[]>(start_cart)

provide('cart', cart)

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true },
)
</script>
