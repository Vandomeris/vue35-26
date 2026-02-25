<template>
  <div>
    <p>{{ product.brand }} | {{ product.title }}</p>
    <p>{{ product.rating }} {{ product.price }}₽</p>
    <p>{{ product.inStock ? 'В наличии' : 'Будет позже' }}</p>
    <p>{{ product.description }}</p>
    <button @click="cart!.push(product)">Купить</button>
    <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'
import { inject, type Ref } from 'vue'

defineProps<{
  product: Product
}>()

const cart = inject<Ref<Product[]>>('cart')

// console.log(cart?.value)
</script>
