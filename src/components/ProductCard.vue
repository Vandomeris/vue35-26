<template>
  <div>
    <p>{{ product.brand }} | {{ product.title }}</p>
    <p>{{ product.rating }} {{ product.price }}₽</p>
    <p>{{ product.inStock ? 'В наличии' : 'Будет позже' }}</p>
    <p>{{ product.description }}</p>
    <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'

defineProps<{
  product: Product
}>()
</script>
