<template>
  <h1>Карточка товара</h1>

  <div>
    <p>{{ product?.title }}</p>
    <p>{{ product?.price }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'
import ky from 'ky'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = ref<Product>()

onMounted(async () => {
  const data = await ky.get<Product>(`http://localhost:3000/products/${route.params.id}`).json()

  product.value = data
})
</script>
