<template>
  <h1>CartPage</h1>
  <div v-if="cart?.length">
    <div v-for="product in cart" :key="product.id">
      <p>{{ product.title }}</p>
      <p>$$$$${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'
import { inject, type Ref } from 'vue'

const cart = inject<Ref<Product[]>>('cart')
</script>
