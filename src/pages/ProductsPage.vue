<template>
  <h1>Каталог товаров</h1>

  <div class="grid grid-cols-5 gap-5">
    <div v-for="product in products" :key="product.id">
      <p>{{ product.brand }} | {{ product.title }}</p>
      <p>{{ product.rating }} {{ product.price }}₽</p>
      <p>{{ product.inStock ? 'В наличии' : 'Будет позже' }}</p>
      <p>{{ product.description }}</p>
      <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'
import ky from 'ky'
import { onMounted, ref } from 'vue'

const products = ref<Product[]>([])

onMounted(async () => {
  // const resp = await fetch('http://localhost:3000/products')
  // const data = await resp.json()

  const data = await ky.get<Product[]>('http://localhost:3000/products').json()

  products.value = data
})
</script>
